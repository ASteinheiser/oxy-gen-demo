// ------------------------
// Web worker file for running fibonacci
// recursive function written in Node.js
// ------------------------
export default function JsFibWebWorker(args) {
  // "main" function for communicating with the web worker
  const onmessage = (e) => { // eslint-disable-line no-unused-vars
    let sum;
    // time the fibonacci function
    let time = timedFunction(() => {
      sum = fibonacci(e.data);
    });

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