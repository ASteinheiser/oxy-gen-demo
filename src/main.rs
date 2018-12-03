mod randomNumber;

pub use randomNumber::find;

pub fn main() {
  random();
}

fn random() {
  let result = randomNumber::find();
  println!("randomNumber: ", result);
}
