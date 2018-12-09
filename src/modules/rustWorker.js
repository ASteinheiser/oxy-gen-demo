// TODO: import WASM file and use fib func from there
// Web worker file for running fibonacci func in Rust (Web Assembly)
export default function RustFibWebWorker(args) {
  // "main" function for communicating with the web worker
  const onmessage = (e) => { // eslint-disable-line no-unused-vars
    let sum;
    // time the fibonacci function
    let time = timedFunction(() => {
      sum = fibonacci(e.data);
    });
    // format the time to seconds and round off long decimal
    time = (time / 1000).toFixed(3);

    postMessage({ time, sum });
  };

  const fibonacci = (num) => {
    switch(num) {
      case 0:
      case 1:
        return 1;
      default:
        return fibonacci(num - 1) + fibonacci(num - 2);
    }
  }

  const timedFunction = (func) => {
    var t0 = performance.now();
    func();
    var t1 = performance.now();

    return (t1 - t0);
  }
}


// // -----------------------------------
// // Custom hook for loading the WASM files.
// // Returns a done Boolean so you can delay app
// // loading until WASM functions are ready.
// // -----------------------------------
// import { useEffect, useState } from 'react';

// const { remote } = window.require('electron');
// const url        = require('url');
// const path       = require('path');
// // set the correct path to the WASM file
// let WASM_URL = (process.env.NODE_ENV === 'development') ?
//   '/rust_bg.wasm'
//   :
//   url.format({
//     pathname: path.join(remote.app.getAppPath(), '/build/rust_bg.wasm'),
//     protocol: 'file:',
//     slashes: true
//   });

// const useLoadWasm = () => {

//   const [done, setDone] = useState(false);

//   useEffect(() => {
//     fetch(WASM_URL)
//       .then(response =>
//         response.arrayBuffer()
//       ).then(bytes =>
//         WebAssembly.instantiate(bytes, {imports: {}})
//       ).then(results => {
//         setDone(true);
//         // bind rust WASM functions to window for easy access
//         window.fibonacci = results.instance.exports.fibonacci;
//       });
//   }, []); // pass `[]` for componentWillMount

//   return done;
// }

// export default useLoadWasm;
