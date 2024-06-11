// import { connectorsForWallets } from "@rainbow-me/rainbowkit";
// import { createConfig, http } from "wagmi";
// import { mainnet } from "wagmi/chains";
// import {
//   metaMaskWallet,
//   coinbaseWallet,
//   rainbowWallet,
//   walletConnectWallet,
//   trustWallet,
//   rabbyWallet,
// } from "@rainbow-me/rainbowkit/wallets";

// const connectors = connectorsForWallets(
//   [
//     {
//       groupName: "Recommended",
//       wallets: [
//         metaMaskWallet,
//         coinbaseWallet,
//         rainbowWallet,
//         walletConnectWallet,
//         trustWallet,
//         rabbyWallet,
//       ],
//     },
//   ],
//   {
//     appName: "GPU Net",
//     projectId: "70287a0c3540989c40c7d01b69f033d6",
//   }
// );

// export const config = createConfig({
//   connectors,
//   chains: [mainnet],
//   transports: {
//     [mainnet.id]: http(""),
//   },
// });
// console.log(connectorsForWallets); // Should not be undefined or null       
