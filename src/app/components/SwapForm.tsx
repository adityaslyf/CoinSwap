"use client"
import React, { useEffect, useState } from 'react';
import Web3 from 'web3';
import BigNumber from 'bignumber.js';
import qs from 'qs';

interface Token {
  symbol: string;
  logoURI: string;
  address: string;
  decimals: number;
}

const SwapForm: React.FC = () => {
  const [tokens, setTokens] = useState<Token[]>([]);
  const [currentTrade, setCurrentTrade] = useState<{ from?: Token; to?: Token }>({});
  const [currentSelectSide, setCurrentSelectSide] = useState<string>('');

  useEffect(() => {
    const init = async () => {
      await listAvailableTokens();
    };
    init();
  }, []);

  const listAvailableTokens = async () => {
    const response = await fetch("https://tokens.coingecko.com/uniswap/all.json");
    const tokenListJSON = await response.json();
    setTokens(tokenListJSON.tokens);
  };

  const selectToken = (token: Token) => {
    closeModal();
    setCurrentTrade(prevState => ({ ...prevState, [currentSelectSide]: token }));
  };

  const renderInterface = () => {
    if (currentTrade.from) {
      (document.getElementById("from_token_img") as HTMLImageElement).src = currentTrade.from.logoURI;
      (document.getElementById("from_token_text") as HTMLElement).innerText = currentTrade.from.symbol;
    }
    if (currentTrade.to) {
      (document.getElementById("to_token_img") as HTMLImageElement).src = currentTrade.to.logoURI;
      (document.getElementById("to_token_text") as HTMLElement).innerText = currentTrade.to.symbol;
    }
  };

  const openModal = (side: string) => {
    setCurrentSelectSide(side);
    document.getElementById("token_modal")!.style.display = "block";
  };

  const closeModal = () => {
    document.getElementById("token_modal")!.style.display = "none";
  };

  const connect = async () => {
    if (typeof window.ethereum !== "undefined") {
      try {
        await window.ethereum.request({ method: "eth_requestAccounts" });
        document.getElementById("login_button")!.innerText = "Connected";
        document.getElementById("swap_button")!.removeAttribute("disabled");
      } catch (error) {
        console.error(error);
      }
    } else {
      document.getElementById("login_button")!.innerText = "Please install MetaMask";
    }
  };

  const getPrice = async () => {
    if (!currentTrade.from || !currentTrade.to || !document.getElementById("from_amount")!.value) return;

    const amount = Number((document.getElementById("from_amount")! as HTMLInputElement).value) * (10 ** currentTrade.from.decimals);
    const params = {
      sellToken: currentTrade.from.address,
      buyToken: currentTrade.to.address,
      sellAmount: amount,
    };

    const headers = {
      '0x-api-key': process.env.NEXT_PUBLIC_0X_API_KEY as string,
    };
console.log(headers)
    const response = await fetch(`https://api.0x.org/swap/v1/quote?${qs.stringify(params)}`, { headers });
    const swapQuoteJSON = await response.json();

    (document.getElementById("to_amount")! as HTMLInputElement).value = String(swapQuoteJSON.buyAmount / (10 ** currentTrade.to.decimals));
    (document.getElementById("gas_estimate") as HTMLElement).innerText = swapQuoteJSON.estimatedGas;

    return swapQuoteJSON;
  };

  const getQuote = async (account: string) => {
    if (!currentTrade.from || !currentTrade.to || !document.getElementById("from_amount")!.value) return;

    const amount = Number((document.getElementById("from_amount")! as HTMLInputElement).value) * (10 ** currentTrade.from.decimals);
    const params = {
      sellToken: currentTrade.from.address,
      buyToken: currentTrade.to.address,
      sellAmount: amount,
      takerAddress: account,
    };

    const response = await fetch(`https://api.0x.org/swap/v1/quote?${qs.stringify(params)}`);
    const swapQuoteJSON = await response.json();

    (document.getElementById("to_amount")! as HTMLInputElement).value = String(swapQuoteJSON.buyAmount / (10 ** currentTrade.to.decimals));
    (document.getElementById("gas_estimate") as HTMLElement).innerText = swapQuoteJSON.estimatedGas;

    return swapQuoteJSON;
  };

  const trySwap = async () => {
    const accounts = await window.ethereum.request({ method: "eth_accounts" });
    const takerAddress = accounts[0];

    const swapQuoteJSON = await getQuote(takerAddress);
    const erc20abi = [
      // Your ERC20 ABI here
      {
        "constant": true,
        "inputs": [],
        "name": "name",
        "outputs": [
          {
            "name": "",
            "type": "string"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "_spender",
            "type": "address"
          },
          {
            "name": "_value",
            "type": "uint256"
          }
        ],
        "name": "approve",
        "outputs": [
          {
            "name": "",
            "type": "bool"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      // ...add other ERC20 function ABIs as needed
    ];
    const fromTokenAddress = currentTrade.from!.address;
    const web3 = new Web3(Web3.givenProvider);
    const ERC20TokenContract = new web3.eth.Contract(erc20abi, fromTokenAddress);

    const maxApproval = new BigNumber(2).pow(256).minus(1);

    await ERC20TokenContract.methods.approve(swapQuoteJSON.allowanceTarget, maxApproval).send({ from: takerAddress });
  };

  useEffect(() => {
    renderInterface();
  }, [currentTrade]);

  return (
    <div className="container">
      <div className="row">
        <div className="col col-md-6 offset-md-3" id="window">
          <h4>Swap</h4>
          <div id="form">
            <div className="swapbox">
              <div className="swapbox_select token_select" id="from_token_select" onClick={() => openModal('from')}>
                <img className="token_img" id="from_token_img" />
                <span id="from_token_text"></span>
              </div>
              <div className="swapbox_select">
                <input className="number form-control" placeholder="amount" id="from_amount" onBlur={getPrice} />
              </div>
            </div>
            <div className="swapbox">
              <div className="swapbox_select token_select" id="to_token_select" onClick={() => openModal('to')}>
                <img className="token_img" id="to_token_img" />
                <span id="to_token_text"></span>
              </div>
              <div className="swapbox_select">
                <input className="number form-control" placeholder="amount" id="to_amount" />
              </div>
            </div>
            <div className="gas_estimate_label">Estimated Gas: <span id="gas_estimate"></span></div>
            <button disabled className="btn btn-large btn-primary btn-block" id="swap_button" onClick={trySwap}>Swap</button>
          </div>
        </div>
      </div>
      <div className="modal" id="token_modal" tabIndex={-1} role="dialog">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Select a token</h5>
              <button type="button" className="close" aria-label="Close" onClick={closeModal}>
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              {tokens.map(token => (
                <div key={token.address} className="token_row" onClick={() => selectToken(token)}>
                  <img className="token_list_img" src={token.logoURI} />
                  <span className="token_list_text">{token.symbol}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SwapForm;
