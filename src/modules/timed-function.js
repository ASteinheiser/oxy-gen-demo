
const timedFunction = (func) => {
  const { performance } = window;

  var t0 = performance.now();
  func();
  var t1 = performance.now();

  return (t1 - t0);
}

export default timedFunction;
