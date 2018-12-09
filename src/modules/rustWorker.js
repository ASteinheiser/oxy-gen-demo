// ------------------------
// Web worker file for running fibonacci
// recursive function written in Rust (WASM)
// ------------------------
export default function RustFibWebWorker(args) {
  // set the correct path to the WASM file
  const WASM_URL = 'file:///build/rust_bg.wasm';

  // "main" function for communicating with the web worker
  const onmessage = (e) => { // eslint-disable-line no-unused-vars
    fetch(WASM_URL)
      .then(response => response.arrayBuffer())
      .then(bytes => WebAssembly.instantiate(bytes, {imports: {}}))
      .then(results => {
        // bind rust WASM function to js function
        const fibonacci = results.instance.exports.fibonacci;

        let sum;
        // time the fibonacci function
        let time = timedFunction(() => {
          sum = fibonacci(e.data);
        });
        // format the time to seconds and round off long decimal
        time = (time / 1000).toFixed(3);

        postMessage({ time, sum });
      });
  };

  const timedFunction = (func) => {
    var t0 = performance.now();
    func();
    var t1 = performance.now();

    return (t1 - t0);
  }
}