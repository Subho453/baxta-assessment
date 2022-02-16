# Baxta Assessment

This assessment is build using RESTful APIs using Node.js and Express.

## Manual Installation

If you would still prefer to do the installation manually, follow these steps:

Clone the repo:

```bash
git clone https://github.com/Subho453/baxta-assessment.git
cd baxta-assessment
```

Install the dependencies:

```bash
npm install
```

## Features

- **Logging**: using rotating-file-stream and morgan
- **Testing**: unit and integration tests using jest
- **Error handling**: centralized error handling
- **Environment variables**: using dotenv
- **Security**: set security HTTP headers using helmet
- **Santizing**: sanitize request data against xss
- **CORS**: Cross-Origin Resource-Sharing enabled using cors
- **Compression**: gzip compression with compression
- **Linting**: with ESLint and Prettier

## Commands

Running app:

```bash
npm start
```

Testing:

```bash
# run all tests
npm run test

# run test coverage
npm run coverage
```

Linting:

````bash
# run ESLint
yarn lint

# fix ESLint errors
yarn lint:fix

## Environment Variables

The environment variables can be found and modified in the `.env` file. They come with these default values:

```bash
# Port number
PORT=5000
NODE_ENV=development

````

## Project Structure

```
src\
 |--assets\         # Assets used
 |--config\         # Environment variables
 |--controllers\    # Route controllers (controller layer)
 |--middlewares\    # Custom express middlewares
 |--routes\         # Routes
 |--services\       # Business logic (service layer)
 |--utils\          # Utility classes and functions
 |--app.js          # Express app
tests\              # Unit and API testing
```

## Linting

Linting is done using [ESLint](https://eslint.org/) and [Prettier](https://prettier.io).

To modify the ESLint configuration, update the `.eslintrc.json` file.
