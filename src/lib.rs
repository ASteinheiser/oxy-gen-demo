extern crate wasm_bindgen;

use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub extern fn find_num() -> i32 {
  return 123 * 11;
}
