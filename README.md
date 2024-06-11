# DeFi DApp Development

## Overview

This project is a decentralized finance (DeFi) application built with Next.js and TypeScript. It features robust functionalities for wallet connectivity, token swapping, and real-time cryptocurrency price charting.

## Features

1. **Wallet Connection**: Connect to Ethereum wallets using MetaMask or WalletConnect.
2. **Cryptocurrency Price Charting**: Real-time and historical price charting using the TradingView library.
3. **Token Swapping**: Execute ERC-20 token swaps using the 0x protocol.

## Tech Stack

- **Framework**: Next.js
- **Language**: TypeScript
- **Styling**: CSS
- **Web3 Library**: Web3.js
- **Charting Library**: TradingView Widget
- **API Integration**: 0x Protocol, CoinGecko

## Getting Started

### Prerequisites

Ensure you have the following installed:

- Node.js (v14 or later)
- npm or yarn
- MetaMask extension in your browser

### Installation

1. **Clone the repository**:
    ```bash
    git clone git@github.com:adityaslyf/CoinSwap.git
    ```

2. **Install dependencies**:
    ```bash
    npm install
    # or
    yarn install
    ```

3. **Set up environment variables**:
   Create a `.env.local` file in the root directory and add your 0x API key:
    ```bash
    NEXT_PUBLIC_0X_API_KEY=your_0x_api_key_here
    ```

4. **Run the development server**:
    ```bash
    npm run dev
    # or
    yarn dev
    ```

    Open [http://localhost:3000](http://localhost:3000) with your browser to see the application.

## Usage

### Wallet Connection

1. Click on the "Connect Wallet" button.
2. Choose your preferred wallet (MetaMask or WalletConnect).
3. Approve the connection request in your wallet.

### Token Swapping

1. Select the tokens you want to swap by clicking on the "Select a Token" button.
2. Enter the amount of the token you want to swap.
3. Click on the "Swap" button to execute the transaction.
4. Confirm the transaction in your wallet.

### Price Charting

The price chart is displayed on the main interface. You can view real-time and historical price data for different cryptocurrencies.

## Project Structure

- **`components/SwapForm.tsx`**: Component for token swapping.
- **`components/ChartTwo.tsx`**: Component for displaying the TradingView chart.
- **`components/Navbar.tsx`**: Navigation bar component with wallet connection functionality.
- **`pages/index.tsx`**: Main page of the application.

## Dependencies

- **Web3.js**: For blockchain interactions.
- **TradingView Widget**: For displaying real-time and historical price charts.
- **0x Protocol**: For token swapping functionality.
- **Bootstrap**: For styling the UI.


## Acknowledgements

- [0x Protocol](https://0x.org/)
- [CoinGecko](https://www.coingecko.com/)
- [TradingView](https://www.tradingview.com/)
- [MetaMask](https://metamask.io/)

## Contact

For any questions or suggestions, please open an issue in the repository or contact me directly at [aditya.varshneymail@gmail.com](mailto:aditya.varshneymail@gmail.com).
