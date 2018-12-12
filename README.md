# Electron App with React + Rust

## TODO:
- [ ] load rust WASM only once in the web worker (check for function)
- [ ] reduce app size by not including dev dependencies
- [ ] fix jswebworker infinite recursion on 0 or 1 (I think it's passing a boolean)

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
