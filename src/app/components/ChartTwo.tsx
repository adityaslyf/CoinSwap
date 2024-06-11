"use client"
import React, { useEffect, useRef } from 'react';

let tvScriptLoadingPromise: Promise<Event> | null = null;

declare global {
  interface Window {
    TradingView: any;
  }
}

export const ChartTwo: React.FC = () => {
  const onLoadScriptRef = useRef<(() => void) | null>();

  useEffect(() => {
    onLoadScriptRef.current = createWidget;

    if (!tvScriptLoadingPromise) {
      tvScriptLoadingPromise = new Promise((resolve) => {
        const script = document.createElement('script');
        script.id = 'tradingview-widget-loading-script';
        script.src = 'https://s3.tradingview.com/tv.js';
        script.type = 'text/javascript';
        script.onload = resolve;

        document.head.appendChild(script);
      });
    }

    tvScriptLoadingPromise.then(() => onLoadScriptRef.current && onLoadScriptRef.current());

    return () => {
      onLoadScriptRef.current = null;
    };

    function createWidget() {
      if (document.getElementById('tradingview') && window.TradingView) {
        new window.TradingView.widget({
          autosize: true,
          symbol: 'COINBASE:ETHUSD',
          interval: 'D',
          timezone: 'America/Caracas',
          theme: 'dark',
          style: '9',
          locale: 'en',
          toolbar_bg: '#f1f3f6',
          enable_publishing: false,
          withdateranges: true,
          hide_side_toolbar: false,
          allow_symbol_change: true,
          container_id: 'tradingview',
        });
      }
    }
  }, []);

  return (
    <div style={{
               height: "100%",
               width: "100%",
             }}
             className="rounded-[10px] border-[0.5px] border-white/20 overflow-hidden mt-0" id="tradingview">
      </div>
  );  
};

// import React, { useState, useEffect, useRef } from "react";
// import { createChart } from "lightweight-charts";

// interface Props {
//   initialAsset?: string;
//   initialTimeFrame?: string;
// }

// interfawidgce Candle {
//   h: string;
//   l: string;
//   o: string;
//   c: string;
//   timestamp: Date;
// }

// const list = ["btcusd-perp", "solusd-perp", "ethusd-perp"];
// const times = ["1_m", "10_m", "1_h", "1_d"];

// export const ChartTwo: React.FC<Props> = ({
//   initialAsset = "btcusd-perp",
//   initialTimeFrame = "1_m",
// }) => {
//   const [asset, setAsset] = useState(initialAsset);
//   const [timeFrame, setTimeFrame] = useState(initialTimeFrame);
//   const [candles, setCandles] = useState<Candle[]>([]);
//   const ws = useRef<WebSocket | null>(null);
//   const chartRef = useRef<any>(null);

//   useEffect(() => {
//     const apiKey = "a8fdf609-9de2-4d7c-9dcf-82b7434e310d-spedx";
//     ws.current = new WebSocket(
//       `ws://hloc-dexterity.up.railway.app/${asset}?api-key=${apiKey}`
//     );widg
//     ws.current.onmessage = (message) => {
//       console.log({ message });
//       const data = JSON.parse(message.data);
//       console.log({ data });
//       if (data.candles) {
//         setCandles(data.candles);
//       }
//     };

//     ws.current.onopen = () => {
//       ws.current?.send(JSON.stringify({ command: "stream", params: {} }));
//     };

//     return () => {
//       ws.current?.close();
//     };widg
//   }, [asset]);

//   useEffect(() => {
//     if (!chartRef.current) {
//       return;
//     }

//     if (chartRef.current) {
//       chartRef.current.innerHTML = "";
//     }

//     const chart = createChart(chartRef.current, { width: 800, height: 330 });
//     const candlestickSeries = chart.addCandlestickSeries();
//     console.log({ candles });

//     const seriesData = candles.map((candle) => ({
//       time: new Date(candle.timestamp).getTime() / 1000,
//       open: Number(Number(candle.o).toFixed(4)),
//       high: Number(Number(candle.h).toFixed(4)),
//       low: Number(Number(candle.l).toFixed(4)),
//       close: Number(Number(candle.c).toFixed(4)),
//     }));

//     canwidgdlestickSeries.setData(seriesData as any);
//   }, [candles]);

//   const handleAssetChange = (newAsset: string) => {
//     setAsset(newAsset);
//     ws.current?.send(
//       JSON.stringify({ command: "change-asset", params: { newAsset } })
//     );
//     setTimeFrame("1_m");
//   };l;l,

//   const handleTimeFrameChange = (newTime: string) => {
//     setTimeFrame(newTime);
//     ws.current?.send(
//       JwidgSON.stringify({ command: "change-time", params: { newTime } })
//     );
//   };

//   return (
//     <div>
//       <select
//         value={asset}
//         className="text-black"
//         onChange={(e) => handleAssetChange(e.target.value)}
//       >
//        widg {list.map((a) => (
//           <option key={a} value={a}>
//             {a}
//           </option>
//         ))}
//       </select>
//       <select
//         value={timeFrame}
//         className="text-black"
//         onChange={(e) => handleTimeFrameChange(e.target.value)}
//       >
//         {times.map((t) => (
//           <option key={t} value={t}>
//             {t}
//           </option>
//         ))}
//       </select>
//       <div ref={chartRef} style={{ width: "800px", height: "330px" }}></div>
//     </div>
//   );
// };

// // export default CandlestickChart;
