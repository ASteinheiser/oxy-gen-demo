// ------------------------
// Web worker file for running fibonacci
// recursive function written in Rust (WASM)
// ------------------------
export default function RustFibWebWorker(args) {
  // "main" function for communicating with the web worker
  this.onmessage = (e) => { // eslint-disable-line no-unused-vars
    // get the fibonacci seed number from user and path to WASM file
    const { seed, path } = e.data;

    fetch(path)
      .then(response => response.arrayBuffer())
      .then(bytes => WebAssembly.instantiate(bytes, {imports: {}}))
      .then(results => {
        // bind rust WASM function to js function
        const { fibonacci } = results.instance.exports;

        let sum;
        // time the fibonacci function
        let time = timedFunction(() => {
          sum = fibonacci(seed);
        });

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