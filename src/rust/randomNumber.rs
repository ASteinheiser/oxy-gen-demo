#[no_mangle]

use std::rand::{task_rng, Rng};

pub extern fn find() -> i32 {
  return task_rng().gen_range(0, 1000000);
}
