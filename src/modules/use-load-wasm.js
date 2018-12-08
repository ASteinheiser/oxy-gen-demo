// -----------------------------------
// Custom hook for loading the WASM files.
// Returns a done Boolean so you can delay app
// loading until WASM functions are ready.
// -----------------------------------
import { useEffect, useState } from 'react';

const { remote } = window.require('electron');
const url        = require('url');
const path       = require('path');
// set the correct path to the WASM file
let WASM_URL = (process.env.NODE_ENV === 'development') ?
  '/rust_bg.wasm'
  :
  url.format({
    pathname: path.join(remote.app.getAppPath(), '/build/rust_bg.wasm'),
    protocol: 'file:',
    slashes: true
  });

const useLoadWasm = () => {

  const [done, setDone] = useState(false);

  useEffect(() => {
    fetch(WASM_URL)
      .then(response =>
        response.arrayBuffer()
      ).then(bytes =>
        WebAssembly.instantiate(bytes, {imports: {}})
      ).then(results => {
        setDone(true);
        // bind rust WASM functions to window for easy access
        window.fibonacci = results.instance.exports.fibonacci;
      });
  }, []); // pass `[]` for componentWillMount

  return done;
}

export default useLoadWasm;
