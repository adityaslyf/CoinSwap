import { ChartTwo } from "../app/components/ChartTwo";

import SwapForm from "./components/SwapForm";

export default function Home() {
  return (
    <main className="flex bg-gray-700 p-4 h-screen">
      {/* <Navbar /> */}
      
      <SwapForm />
      <div className=" h-[600px] w-full">
      <ChartTwo />
      </div>
     
      {/* <MetaMaskConnect /> */}
   
    </main>
  );
}
