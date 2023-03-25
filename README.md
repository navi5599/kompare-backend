# Backend Project
This is the backend project for the [Frontend Project](https://github.com/navi5599/kompare-frontend) , which is a project built with React that connects to this backend built with Node.js.

## Setup
Clone the repository and navigate to the project root directory.

Install the project dependencies using npm:

```bash
npm install
```

Start the development server:

```bash
npm run start:dev
```

This command will start the server in development mode and automatically restart the server whenever you make changes to the code.

## Scripts
- start: Starts the server in production mode.

- build: Builds the TypeScript code to JavaScript.

- start:dev: Starts the server in development mode with nodemon.

- test: Runs the test suite with Jest.

## Dependencies
- body-parser: Parse incoming request bodies in a middleware before your handlers.

- cors: Cross-Origin Resource Sharing middleware.

- dotenv: Loads environment variables from a .env file.

- express: Fast, unopinionated, minimalist web framework for Node.js.

- joi: Schema description language and data validator for JavaScript.

- mongoose: MongoDB object modeling tool designed to work in an asynchronous environment.

- morgan: HTTP request logger middleware.

- nodemon: Monitors changes in the source code and restarts the server.

## Dev Dependencies
- @babel/core: Transpile the JavaScript code to ES5.

- @babel/preset-env: Smart defaults for Babel to transpile modern JavaScript.

- @babel/preset-typescript: Babel preset for TypeScript.

- @types/jest: TypeScript types for Jest.

- @types/node: TypeScript types for Node.js.

- babel-jest: Use Babel to transform Jest test files.

- jest: Test framework.

- ts-jest: Jest transformer with TypeScript support.

- ts-node: TypeScript execution environment.

- typescript: TypeScript compiler.