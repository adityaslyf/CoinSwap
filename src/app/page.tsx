
import {ChartTwo} from '../app/components/ChartTwo'
// import MetaMaskConnect from './components/MetaMaskConnect'
import Navbar from './components/Navbar'
import SwapForm from './components/SwapForm'
export default function Home() {
  return (
    <main className="flex min-h-screen h-screen flex-col items-center justify-between p-24">
<Navbar />
    <ChartTwo />
    {/* <MetaMaskConnect /> */}
    <SwapForm />
  </main>
  );
} 
