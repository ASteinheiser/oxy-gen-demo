// -----------------------------------
// Custom hook for loading the WASM files.
// Returns a done Boolean so you can delay app
// loading until WASM functions are ready.
// -----------------------------------
import { useEffect, useState } from 'react';

const useLoadWasm = () => {

  const [done, setDone] = useState(false);

  useEffect(() => {
    fetch("/fibonacci_bg.wasm")
      .then(response =>
        response.arrayBuffer()
      ).then(bytes =>
        WebAssembly.instantiate(bytes, {imports: {}})
      ).then(results => {
        setDone(true);
        // bind WASM functions to window for easy access
        window.fibonacci = results.instance.exports.fibonacci;
      });
  }, []); // pass `[]` for componentWillMount

  return done;
}

export default useLoadWasm;
