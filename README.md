# CaBeam React-Native expo POC

Small proof of concept to try to build the CaBeam react-native (expo) app.

We have the repo divided into:

* api: contains the server side code consumed by the app
* app: conforms the mobile app

# API

TBD

# APP

## Pre-requisites

- Nix package manager: download and install from [here](https://nixos.org/nix/)
- MacOS/Windows: Node 10+

#### Project Setup

- Get into the nix-shell
  ```
  $ nix-shell
  ```
- Install the packages from package.json
  ```
  nix-shell $ npm install
  ```

#### Without Nix

- Install expo client
  ```
  npm install expo-cli --global
  ```
- Install packages (root folder of project)
  ```
  npm install
  ```

#### Start local development server and API server

- **[With Nix]** Run expo watcher (needs LAN access to access to bind with the app)

  ```
  nix-shell $ npx expo start
  ```

- **[Without Nix]** Simply run

  ```
  npm run start & npm run api
  ```

- Go to URL provided usually
  ```
  http://localhost:19002/
  ```
- Open Expo app in your device (or download it)
  > Note: it could be either Android or iOS
- Scan the QR code
- That's it! Start coding! :rocket:

## References

- Nix package manager: https://nixos.org/nix/
- Nix packages: https://nixos.org/nixos/packages.html#nodejs
- Expo (React-native ecosystem wrapper): https://expo.io/learn