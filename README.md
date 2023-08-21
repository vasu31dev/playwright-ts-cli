# Playwright TypeScript CLI

[![GitHub stars](https://img.shields.io/github/stars/vasu31dev/playwright-ts-cli)](https://github.com/vasu31dev/playwright-ts-cli/stargazers)
![Last Commit](https://img.shields.io/github/last-commit/vasu31dev/playwright-ts-cli) ![Pull Requests](https://img.shields.io/github/issues-pr-raw/vasu31dev/playwright-ts-cli)

## About

`playwright-ts-cli` is a command-line tool designed to initialize and update projects based on the [Playwright TypeScript template](https://github.com/vasu31dev/playwright-ts-template). It streamlines the process of setting up a new project with specific configurations, dependencies, and structure.

This CLI tool integrates with the [vasu-playwright-utils](https://www.npmjs.com/package/vasu-playwright-utils) library, offering additional utilities and functionalities. The library is regularly updated with new features and enhancements, allowing users to benefit from the latest improvements by updating to different versions as they become available.

## Features

- **Initialize Project**: Quickly set up a new project with predefined playwright typescript configurations, dependencies, and structure.
- **Update Project**: Easily update existing projects with the latest files and configurations from the Playwright TypeScript template.

## Installation

You can install `playwright-ts-cli` globally using npm:

```bash
npm install -g playwright-ts-cli
```

### Update Playwright Library

To update the Playwright library with the latest versions of utilities, run:

```bash
npm i vasu-playwright-utils
```

## Usage

### Initialize a New Project

To initialize a new project, navigate to the desired directory and run:

```bash
vasu-playwright-cli init
```

This command will:

- Download the Playwright TypeScript template.
- Copy specific files and directories to the current working directory.
- Create a new `package.json` file with necessary dependencies.
- Initialize a new Git repository.
- Install npm packages.

### Update an Existing Project

To update an existing project, navigate to the project directory and run:

```bash
vasu-playwright-cli update
```

This command updates specific files or directories within the project as per latest updates to the [Playwright TypeScript template](https://github.com/vasu31dev/playwright-ts-template).

## Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request on [GitHub](https://github.com/vasu31dev/playwright-ts-cli).

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
