# Playwright TypeScript CLI

[![GitHub stars](https://img.shields.io/github/stars/vasu31dev/playwright-ts-cli)](https://github.com/vasu31dev/playwright-ts-cli/stargazers)
![Last Commit](https://img.shields.io/github/last-commit/vasu31dev/playwright-ts-cli)
![Pull Requests](https://img.shields.io/github/issues-pr-raw/vasu31dev/playwright-ts-cli)

## About

`playwright-ts-cli` is a powerful command-line tool designed to initialize and update projects with the [Playwright TypeScript template](https://github.com/vasu31dev/playwright-ts-template). It simplifies the process of setting up a new project with specific configurations, dependencies, and structure, allowing developers to kickstart their Playwright testing with ease.

## Features

- **Initialize Project**: Quickly scaffold a new project with predefined Playwright TypeScript configurations, dependencies, and structure.
- **Update Project**: Seamlessly update existing projects with the latest files and configurations from the Playwright TypeScript template.
- **Compatibility**: Works with the [vasu-playwright-utils](https://www.npmjs.com/package/vasu-playwright-utils) library, offering additional utilities and functionalities.

## Installation

Install `playwright-ts-cli` globally using npm:

```bash
npm install -g vasu-playwright-cli
```

### Update Playwright Library

Keep your Playwright library up to date with the latest utilities:

```bash
npm i vasu-playwright-utils
```

## Usage

### Initialize a New Project

Navigate to the desired directory and run:

```bash
vasu-playwright-cli init
```

Or use:

```bash
npx vasu-playwright-cli init
```

This command will set up a new project with the Playwright TypeScript template, including:

- Download the Playwright TypeScript template.
- Copy specific files and directories to the current working directory.
- Create a new `package.json` file with necessary dependencies.
- Initializing a new Git repository.
- Installing npm packages.

### Update an Existing Project with future updates

Navigate to the project directory and run:

```bash
vasu-playwright-cli update
```

Or use:

```bash
npx vasu-playwright-cli update
```

This command will update specific files or directories within the project, aligning them with the latest updates to the [Playwright TypeScript template](https://github.com/vasu31dev/playwright-ts-template).

## Contributing

We welcome contributions! Feel free to open an issue or submit a pull request on [GitHub](https://github.com/vasu31dev/playwright-ts-cli).

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
