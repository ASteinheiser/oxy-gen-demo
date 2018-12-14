# OXY-GEN Demo

OXY-GEN is an open-source cli tool that helps developers quickly create native desktop apps using React and Rust!

It uses Electron to build the native app, create-react-app for the React side, and uses Web Assembly to bind the Rust functions.

OXY-GEN includes a recursive fibonacci algorithm written in Node.js and Rust. It uses Web Workers to run both languages in parallel to showcase the speed difference.

# Get Started

## Rust Toolchain Setup
### Install Rustup
```
curl https://sh.rustup.rs -sSf | sh
source $HOME/.cargo/env
```
### Select Nightly Version (for WASM support)
```
rustup default nightly
```
### Install WASM bindgen and add target
```
rustup target add wasm32-unknown-unknown
cargo install wasm-bindgen-cli
```

## Install Yarn
```
npm install -g yarn
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
yarn dev
```

## Build Distribution for Mac, Linux and Windows
```
yarn electron-pack
```
