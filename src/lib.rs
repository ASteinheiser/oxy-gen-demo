mod random_number;

pub use random_number::find;

pub fn main() {
  random();
}

fn random() {
  let result = random_number::find();
  println!("random_number: {}", result);
}
