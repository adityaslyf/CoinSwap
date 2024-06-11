// "use client"
// import React, { useState, useEffect } from "react";
// import detectEthereumProvider from "@metamask/detect-provider";
// import walletIcon from '../../../public/wallet.png'
// import dropDownIcon from '../../../public/dropIcon.png'

// interface WalletState {
//   accounts: string[];
// }

// const MetaMaskConnect: React.FC = () => {
//   const [isMobile, setIsMobile] = useState(false);
//   const [hasProvider, setHasProvider] = useState<boolean | null>(null);
//   const initialState: WalletState = { accounts: [] };
//   const [wallets, setWallets] = useState<WalletState[]>([initialState]);
//   const [selectedWalletIndex, setSelectedWalletIndex] = useState<number>(0);
//   const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);

//   useEffect(() => {
//     const userAgent = window.navigator.userAgent;
//     setIsMobile(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent));

//     const refreshAccounts = (accounts: string[]) => {
//       if (accounts.length > 0) {
//         updateWallets(accounts);
//       } else {
//         setWallets([initialState]);
//       }
//     };

//     const getProvider = async () => {
//       try {
//         const provider = await detectEthereumProvider({ silent: true });
//         setHasProvider(!!provider);

//         if (provider) {
//           const accounts = await window.ethereum.request({
//             method: "eth_accounts",
//           });
//           refreshAccounts(accounts);
//           window.ethereum.on("accountsChanged", refreshAccounts);
//         }-
//       } catch (error) {
//         console.error("Error detecting Ethereum provider:", error);
//       }
//     };

//     getProvider();
//     return () => {
//       window.ethereum?.removeListener("accountsChanged", refreshAccounts);
//     };
//   }, [initialState]);

//   const updateWallets = (accounts: string[]) => {
//     const updatedWallets: WalletState[] = accounts.map(account => ({ accounts: [account] }));
//     setWallets(updatedWallets);
//   };

//   const handleConnect = async () => {
//     try {
//       if (isMobile) {
//         const metamaskAppDeepLink = `https://metamask.app.link/dapp/${window.location.origin.slice(8)}`;
//         window.location.href = metamaskAppDeepLink;
//       }

//       const accounts: string[] = await window.ethereum.request({
//         method: "eth_requestAccounts",
//       });
//       const connectedWallet: WalletState = { accounts };
//       setWallets([...wallets, connectedWallet]);
//       setSelectedWalletIndex(wallets.length);
//     } catch (error) {
//       console.error("Failed to connect:", error);
//     }
//   };

//   const handleWalletClick = async (index: number) => {
//     try {
//       await window.ethereum.request({
//         method: "eth_requestAccounts",
//         params: [{ eth_accounts: wallets[index].accounts }],
//       });
//       setSelectedWalletIndex(index);
//     } catch (error) {
//       console.error("Failed to set active wallet:", error);
//     }
//   };

//   return (
//     <div>
//       <div>
//         <button onClick={() => {
//           if (wallets[selectedWalletIndex].accounts.length === 0) {
//             handleConnect();
//           } else {
//             setDropdownOpen(!dropdownOpen);
//           }
//         }}>
//           <div className="flex sm:gap-2.5 gap-1 justify-between items-center sm:px-3.5 px-2 py-2.5 text-base font-semibold leading-7 text-gray-900 whitespace-nowrap bg-white rounded-lg border border-gray-200 border-solid">
//             <img
//               loading="lazy"
//               src={walletIcon}
//               alt="wallet icon"
//               className="shrink-0 self-stretch my-auto aspect-square sm:w-[22px]"
//             />
//             <div className="self-stretch sm:text-lg flex items-center text-xs">
//               {wallets[selectedWalletIndex].accounts.length > 0
//                 ? `${wallets[selectedWalletIndex].accounts[0].substring(0, 6)}...${wallets[selectedWalletIndex].accounts[0].substring(wallets[selectedWalletIndex].accounts[0].length - 4)}`
//                 : "Connect"}
//             </div>
//             <img
//               loading="lazy"
//               src={dropDownIcon}
//               alt="Copy icon""use client"
//               import React, { useState, useEffect } from "react";
//               import detectEthereumProvider from "@metamask/detect-provider";
//               import walletIcon from '../../../public/wallet.png'
//               import dropDownIcon from '../../../public/dropIcon.png'
              
//               interface WalletState {
//                 accounts: string[];
//               }
              
//               const MetaMaskConnect: React.FC = () => {
//                 const [isMobile, setIsMobile] = useState(false);
//                 const [hasProvider, setHasProvider] = useState<boolean | null>(null);
//                 const initialState: WalletState = { accounts: [] };
//                 const [wallets, setWallets] = useState<WalletState[]>([initialState]);
//                 const [selectedWalletIndex, setSelectedWalletIndex] = useState<number>(0);
//                 const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);
              
//                 useEffect(() => {
//                   const userAgent = window.navigator.userAgent;
//                   setIsMobile(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent));
              
//                   const refreshAccounts = (accounts: string[]) => {
//                     if (accounts.length > 0) {
//                       updateWallets(accounts);
//                     } else {
//                       setWallets([initialState]);
//                     }
//                   };
              
//                   const getProvider = async () => {
//                     try {
//                       const provider = await detectEthereumProvider({ silent: true });
//                       setHasProvider(!!provider);
              
//                       if (provider) {
//                         const accounts = await window.ethereum.request({
//                           method: "eth_accounts",
//                         });
//                         refreshAccounts(accounts);
//                         window.ethereum.on("accountsChanged", refreshAccounts);
//                       }-
//                     } catch (error) {
//                       console.error("Error detecting Ethereum provider:", error);
//                     }
//                   };
              
//                   getProvider();
//                   return () => {
//                     window.ethereum?.removeListener("accountsChanged", refreshAccounts);
//                   };
//                 }, [initialState]);
              
//                 const updateWallets = (accounts: string[]) => {
//                   const updatedWallets: WalletState[] = accounts.map(account => ({ accounts: [account] }));
//                   setWallets(updatedWallets);
//                 };
              
//                 const handleConnect = async () => {
//                   try {
//                     if (isMobile) {
//                       const metamaskAppDeepLink = `https://metamask.app.link/dapp/${window.location.origin.slice(8)}`;
//                       window.location.href = metamaskAppDeepLink;
//                     }
              
//                     const accounts: string[] = await window.ethereum.request({
//                       method: "eth_requestAccounts",
//                     });
//                     const connectedWallet: WalletState = { accounts };
//                     setWallets([...wallets, connectedWallet]);
//                     setSelectedWalletIndex(wallets.length);
//                   } catch (error) {
//                     console.error("Fail"use client"
//                     import React, { useState, useEffect } from "react";
//                     import detectEthereumProvider from "@metamask/detect-provider";
//                     import walletIcon from '../../../public/wallet.png'
//                     import dropDownIcon from '../../../public/dropIcon.png'
                    
//                     interface WalletState {
//                       accounts: string[];
//                     }
                    
//                     const MetaMaskConnect: React.FC = () => {
//                       const [isMobile, setIsMobile] = useState(false);
//                       const [hasProvider, setHasProvider] = useState<boolean | null>(null);
//                       const initialState: WalletState = { accounts: [] };
//                       const [wallets, setWallets] = useState<WalletState[]>([initialState]);
//                       const [selectedWalletIndex, setSelectedWalletIndex] = useState<number>(0);
//                       const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);
                    
//                       useEffect(() => {
//                         const userAgent = window.navigator.userAgent;
//                         setIsMobile(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent));
                    
//                         const refreshAccounts = (accounts: string[]) => {
//                           if (accounts.length > 0) {
//                             updateWallets(accounts);
//                           } else {
//                             setWallets([initialState]);
//                           }
//                         };
                    
//                         const getProvider = async () => {
//                           try {
//                             const provider = await detectEthereumProvider({ silent: true });
//                             setHasProvider(!!provider);
                    
//                             if (provider) {
//                               const accounts = await window.ethereum.request({
//                                 method: "eth_accounts",
//                               });
//                               refreshAccounts(accounts);
//                               window.ethereum.on("accountsChanged", refreshAccounts);
//                             }-
//                           } catch (error) {
//                             console.error("Error detecting Ethereum provider:", error);
//                           }
//                         };
                    
//                         getProvider();
//                         return () => {
//                           window.ethereum?.removeListener("accountsChanged", refreshAccounts);
//                         };
//                       }, [initialState]);
                    
//                       const updateWallets = (accounts: string[]) => {
//                         const updatedWallets: WalletState[] = accounts.map(account => ({ accounts: [account] }));
//                         setWallets(updatedWallets);
//                       };
                    
//                       const handleConnect = async () => {
//                         try {
//                           if (isMobile) {
//                             const metamaskAppDeepLink = `https://metamask.app.link/dapp/${window.location.origin.slice(8)}`;
//                             window.location.href = metamaskAppDeepLink;
//                           }
                    
//                           const accounts: string[] = await window.ethereum.request({
//                             method: "eth_requestAccounts",
//                           });
//                           const connectedWallet: WalletState = { accounts };
//                           setWallets([...wallets, connectedWallet]);
//                           setSelectedWalletIndex(wallets.length);
//                         } catch (error) {
//                           console.error("Failed to connect:", error);
//                         }
//                       };
                    
//                       const handleWalletClick = async (index: number) => {
//                         try {
//                           await window.ethereum.request({
//                             method: "eth_requestAccounts",
//                             params: [{ eth_accounts: wallets[index].accounts }],
//                           });
//                           setSelectedWalletIndex(index);
//                         } catch (error) {
//                           console.error("Failed to set active wallet:", error);
//                         }
//                       };
                    
//                       return (
//                         <div>
//                           <div>
//                             <button onClick={() => {
//                               if (wallets[selectedWalletIndex].accounts.length === 0) {
//                                 handleConnect();
//                               } else {
//                                 setDropdownOpen(!dropdownOpen);
//                               }
//                             }}>
//                               <div className="flex sm:gap-2.5 gap-1 justify-between items-center sm:px-3.5 px-2 py-2.5 text-base font-semibold leading-7 text-gray-900 whitespace-nowrap bg-white rounded-lg border border-gray-200 border-solid">
//                                 <img
//                                   loading="lazy"
//                                   src={walletIcon}
//                                   alt="wallet icon"
//                                   className="shrink-0 self-stretch my-auto aspect-square sm:w-[22px]"
//                                 />
//                                 <div className="self-stretch sm:text-lg flex items-center text-xs">
//                                   {wallets[selectedWalletIndex].accounts.length > 0
//                                     ? `${wallets[selectedWalletIndex].accounts[0].substring(0, 6)}...${wallets[selectedWalletIndex].accounts[0].substring(wallets[selectedWalletIndex].accounts[0].length - 4)}`
//                                     : "Connect"}
//                                 </div>
//                                 <img
//                                   loading="lazy"
//                                   src={dropDownIcon}
//                                   alt="Copy icon"
//                                   className="shrink-0 self-stretch my-auto aspect-[0.95] w-[19px]"
//                                 />
//                               </div>
//                               {dropdownOpen && (
//                                 <div className="absolute w-fit ml-0.5 bg-white border border-gray-200 shadow-md">
//                                   {wallets.map((wallet, index) => (
//                                     <div
//                                       key={index}
//                                       className="sm:px-9 px-2 py-2 hover:bg-gray-100 cursor-pointer flex justify-center items-center"
//                                       onClick={() => handleWalletClick(index)}
//                                     >
//                                       <div>
//                                         {wallet.accounts[0]?.substring(0, 9)}...{wallet.accounts[0]?.substring(wallet.accounts[0]?.length - 4)}
//                                       </div>
//                                     </div>
//                                   ))}
//                                 </div>
//                               )}
//                             </button>
//                           </div>
//                         </div>
//                       );
//                     };
                    
//                     export default MetaMaskConnect;ed to connect:", error);
//                   }
//                 };
              
//                 const handleWalletClick = async (index: number) => {
//                   try {
//                     await window.ethereum.request({
//                       method: "eth_requestAccounts",
//                       params: [{ eth_accounts: wallets[index].accounts }],
//                     });
//                     setSelectedWalletIndex(index);
//                   } catch (error) {
//                     console.error("Failed to set active wallet:", error);
//                   }
//                 };
              
//                 return (
//                   <div>
//                     <div>
//                       <button onClick={() => {
//                         if (wallets[selectedWalletIndex].accounts.length === 0) {
//                           handleConnect();
//                         } else {
//                           setDropdownOpen(!dropdownOpen);
//                         }
//                       }}>
//                         <div className="flex sm:gap-2.5 gap-1 justify-between items-center sm:px-3.5 px-2 py-2.5 text-base font-semibold leading-7 text-gray-900 whitespace-nowrap bg-white rounded-lg border border-gray-200 border-solid">
//                           <img
//                             loading="lazy"
//                             src={walletIcon}
//                             alt="wallet icon"
//                             className="shrink-0 self-stretch my-auto aspect-square sm:w-[22px]"
//                           />
//                           <div className="self-stretch sm:text-lg flex items-center text-xs">
//                             {wallets[selectedWalletIndex].accounts.length > 0
//                               ? `${wallets[selectedWalletIndex].accounts[0].substring(0, 6)}...${wallets[selectedWalletIndex].accounts[0].substring(wallets[selectedWalletIndex].accounts[0].length - 4)}`
//                               : "Connect"}
//                           </div>
//                           <img
//                             loading="lazy"
//                             src={dropDownIcon}
//                             alt="Copy icon"
//                             className="shrink-0 self-stretch my-auto aspect-[0.95] w-[19px]"
//                           />
//                         </div>
//                         {dropdownOpen && (
//                           <div className="absolute w-fit ml-0.5 bg-white border border-gray-200 shadow-md">
//                             {wallets.map((wallet, index) => (
//                               <div
//                                 key={index}
//                                 className="sm:px-9 px-2 py-2 hover:bg-gray-100 cursor-pointer flex justify-center items-center"
//                                 onClick={() => handleWalletClick(index)}
//                               >
//                                 <div>
//                                   {wallet.accounts[0]?.substring(0, 9)}...{wallet.accounts[0]?.substring(wallet.accounts[0]?.length - 4)}
//                                 </div>
//                               </div>
//                             ))}
//                           </div>
//                         )}
//                       </button>
//                     </div>
//                   </div>
//                 );
//               };
              
//               export default MetaMaskConnect;-fit ml-0.5 bg-white border border-gray-200 shadow-md">
//               {wallets.map((wallet, index) => (
//                 <div
//                   key={index}
//                   className="sm:px-9 px-2 py-2 hover:bg-gray-100 cursor-pointer flex justify-center items-center"
//                   onClick={() => handleWalletClick(index)}
//                 >
//                   <div>
//                     {wallet.accounts[0]?.substring(0, 9)}...{wallet.accounts[0]?.substring(wallet.accounts[0]?.length - 4)}
//                   </div>
//                 </div>
//               ))}
//             </div>
//           )}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default MetaMaskConnect;