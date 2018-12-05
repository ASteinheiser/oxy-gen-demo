# Electron App with React + Rust

### Install Rust Toolchain:
```
curl https://sh.rustup.rs -sSf | sh
source $HOME/.cargo/env
rustup default nightly
rustup target add wasm32-unknown-unknown
cargo install wasm-bindgen-cli
```
### Install Dependencies:
```
yarn install
npm run build
```
### Run Dev App:
```
npm run dev
```
