
const fibonacciNode = (num) => {
  switch(num) {
    case 0:
    case 1:
      return 1;
    default:
      return fibonacciNode(num - 1) + fibonacciNode(num - 2);
  }
}

export default fibonacciNode;
