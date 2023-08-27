# Playwright TypeScript CLI

| [![GitHub stars](https://img.shields.io/github/stars/vasu31dev/playwright-ts-cli)](https://github.com/vasu31dev/playwright-ts-cli/stargazers) | ![Last Commit](https://img.shields.io/github/last-commit/vasu31dev/playwright-ts-cli) | ![Pull Requests](https://img.shields.io/github/issues-pr-raw/vasu31dev/playwright-ts-cli) | [![NPM Package](https://img.shields.io/npm/v/vasu-playwright-cli)](https://www.npmjs.com/package/vasu-playwright-cli) | <a href="https://www.linkedin.com/in/vasudeva-chowdary-annam-802126a2/" target="_blank"><img src="https://img.icons8.com/fluent/48/000000/linkedin.png" width="28" alt="LinkedIn"></a> | [vasu31dev@gmail.com](mailto:vasu31dev@gmail.com) |
| :---: | :---: | :---: | :---: | :---: | :---: |


## About

`playwright-ts-cli` is a powerful command-line tool designed to initialize and update projects with the [Playwright TypeScript template](https://github.com/vasu31dev/playwright-ts-template). It simplifies the process of setting up a new project with specific configurations, dependencies, and structure, allowing developers to kickstart their Playwright testing with ease.

## Features

- **Initialize Project**: Quickly scaffold a new project with predefined Playwright TypeScript configurations, dependencies, and structure.
- **Update Project**: Seamlessly update existing projects with the latest files and configurations from the Playwright TypeScript template.
- **Compatibility**: Works with the [vasu-playwright-utils](https://www.npmjs.com/package/vasu-playwright-utils) library, offering additional utilities and functionalities.

## Prerequisites

Ensure you have the following software installed on your machine:

- **[npm (v8.0.0 or later)](https://docs.npmjs.com/cli/v9/configuring-npm)**: Package manager for JavaScript, used to install and manage software packages.
  - To verify your current version, use the command `npm -v`.
  - If npm isn't installed, follow the [npm installation guide](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm).
- **[Node.js (v16.0.0 or later)](https://nodejs.org/en/download)**: JavaScript runtime built on Chrome's V8 JavaScript engine, allowing the execution of JavaScript server-side.
  - To verify your current version, use the command `node -v`.
- **[Git](https://git-scm.com/downloads)**: Distributed version control system used to track changes in source code during software development.
  - To check if Git is installed, run the command `git --version`.
  - If Git isn't installed, download and install it from the [official Git website](https://git-scm.com/downloads).

## Installation

### 1. Install Node.js

Before installing the CLI, make sure to have Node.js installed on your system. Here are two ways to install Node.js:

1. **Using Official Website**:

   - Visit the [official Node.js website](https://nodejs.org/en/download/).
   - Download and install the latest stable version.

2. **Using Command Line (nvm)**:
   ```bash
   curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash
   source ~/.nvm/nvm.sh
   nvm install --lts
   ```

### 2. Create a Playwright Test Directory

```bash
mkdir playwright-e2e-tests
cd playwright-e2e-tests
```

### 3. Install `vasu-playwright-cli`

```bash
npm i -D vasu-playwright-cli
```

## Usage

### Initialize a New Project

Navigate to the desired directory and run:

```bash
npx vasu-playwright-cli init
```

This command will set up a new project with ready to use Playwright TypeScript framework, including:

- Setup the Playwright TypeScript framework template with sample tests.
- Create a new `package.json` file with all the necessary dependencies.
- Initializing a new Git repository if neither the current nor parent directory is a Git repository.
- Installing all the npm packages including the playwright utils library which contains playwright helper methods.

### Update an Existing Project with future updates

Navigate to the project directory and run:

```bash
npx vasu-playwright-cli update
```

This command will update specific files or directories within the project, aligning them with the latest updates to the [Playwright TypeScript template](https://github.com/vasu31dev/playwright-ts-template).

### Update Playwright Library

Keep your Playwright library up to date with the latest playwright utilities which contain the helper methods that are updated regularly:

```bash
npm i -D vasu-playwright-utils
```

### Running Tests

To make sure the project framework is working as expected, you can run the following command to run the sample tests:

```bash
npm run test:chromium-headed -- sauce-demo-all-pass.spec.ts
```

View the report with:

```bash
npx playwright show-report
```

## Contributing

We welcome contributions! Feel free to open an issue or submit a pull request on [GitHub](https://github.com/vasu31dev/playwright-ts-cli).

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
