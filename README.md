# Electron App with React + Rust

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

## Build Distribution for Mac, Linux and Windows
```
npm run electron-pack
```
