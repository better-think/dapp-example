# Albom Prototype

Using `Node v13.12.0` (with `npm 6.14.4`) through `n`:
 - setup summarized in this post https://medium.com/@ExplosionPills/dont-use-sudo-with-npm-still-66e609f5f92, this will allow to perform installs without `sudo`
 - `npm install -g truffle` after previous setup completed
 - `npm install` into the main project folder to install dependencies
 - `npm install` into the app folder to install front-end dependencies
 - `truffle develop` into the main project folder
    - a console will open, type `compile` and then `migrate` in order to deploy Smart Contracts to local Blockchain simulation and leave the terminal open
 - `npm run start` into the app folder and from a new terminal tab

 The dApp will appear at `localhost:3000`.

