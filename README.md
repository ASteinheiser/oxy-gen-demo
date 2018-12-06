# Electron App with React + Rust

# TODO:
- [ ] add web workers for dispatching both fibonacci calculations to allow for loading spinners
- [ ] generalize rust exports file from `fibonacci.wasm` to `rust.wasm`
- [ ] fix `url is not defined` error by adding `electron-fetch`

## Rust Toolchain Setup
### Install Rustup
```
curl https://sh.rustup.rs -sSf | sh
source $HOME/.cargo/env
```
### Select Nightly Version for WASM
```
rustup default nightly
```
### Install WASM bindgen and target
```
rustup target add wasm32-unknown-unknown
cargo install wasm-bindgen-cli
```

## Install Dependencies:
```
yarn install
npm run build
```

## Run Dev Electron App:
```
npm run dev
```
