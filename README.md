# Electron App with React + Rust

## TODO:
- [ ] load rust WASM only once in the web worker (check for function)
- [ ] add onerror to webworker and handle error in app
- [ ] change name to oxy-gen-demo
- [ ] add descriptive overlay on initial load

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
```

## Build Rust(WASM) and React App:
```
yarn build
```

## Run Dev Electron App:
```
npm run dev
```

## Build Distribution for Mac, Linux and Windows
```
npm run electron-pack
```
