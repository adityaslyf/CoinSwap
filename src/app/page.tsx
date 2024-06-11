import { ChartTwo } from "../app/components/ChartTwo";

import SwapForm from "./components/SwapForm";

export default function Home() {
  return (
    <main className="flex flex-col md:flex-row bg-gray-700 p-4 h-screen overflow-y-scroll">
    <div className="w-full md:w-1/2 lg:w-1/2 mb-4 md:mb-0">
      <SwapForm />
    </div>
    <div className="w-full min-h-[500px] md:w-1/2 lg:w-1/2 flex justify-center items-center">
      <div className="w-full h-full md:h-[600px]">
        <ChartTwo />
      </div>
    </div>
  </main>
  );
}
