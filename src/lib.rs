extern crate wasm_bindgen;

use wasm_bindgen::prelude::*;
// Export your rust functions here
#[wasm_bindgen]
pub extern fn fibonacci(n: u32) -> u32 {
  match n {
    0 => 1,
    1 => 1,
    _ => fibonacci(n - 1) + fibonacci(n - 2)
  }
}
