use rand::prelude::*;

#[no_mangle]
pub extern fn find() -> i32 {

  let mut rng = rand::thread_rng();

  return rng.gen::<i32>();
}
