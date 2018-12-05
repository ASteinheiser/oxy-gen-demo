extern crate wasm_bindgen;
extern crate rand;

use wasm_bindgen::prelude::*;
use rand::prelude::*;

#[wasm_bindgen]
pub extern fn find() -> i32 {

  let mut rng = rand::thread_rng();

  return rng.gen::<i32>();
}
