

# 🚀 Elevate Your Automation: Redefining the Future of Testing, Where Precision Meets Efficiency.

## Playwright TypeScript Framework: "Your One-Stop Solution for Web (Desktop & Mobile), API, and Electron Automation Testing"

Welcome to the easy-to-use Playwright TypeScript Framework for Web (Desktop & Mobile), APIs, and Electron Desktop applications. Built with Playwright and TypeScript, its great for everyone from testers to business analysts, making their testing smoother and faster. You can start writing tests quickly without the fuss.

For more detailed information about the framework, key features, tools, installation, utilities, usage, test execution and reports, please visit the complete documenation [here](https://github.com/vasu31dev/playwright-ts-template#-elevate-your-automation-redefining-the-future-of-testing-where-precision-meets-efficiency).

## Getting Started

### Tools

Tools at high level. For more details, please visit the complete documentation [here](https://github.com/vasu31dev/playwright-ts-template#tools--frameworks)
- **[TypeScript](https://www.typescriptlang.org/)**: JavaScript programming language for enhancing code quality and understandability.
- **[Playwright Test](https://playwright.dev/docs/test-configuration)**: A modern end-to-end testing framework, facilitating test creation, execution, fixture management and report generation.
- **[Playwright Assertions](https://playwright.dev/docs/assertions)**: Provides robust assertion capabilities for validating tests.
- **[Allure Report](https://docs.qameta.io/allure/)**: A flexible and visually appealing reporting tool, offering clarity on test results.
- **[ESLint](https://eslint.org/)**: Checks JavaScript and TypeScript code for mistakes and helps to maintain code consistency.
- **[Prettier](https://prettier.io/)**: Code formatter, ensuring consistent code style across the project.
- **[Logger (Winston)](https://www.npmjs.com/package/winston)**: Logging library, producing both file-based logs and color-coded console outputs.
- **[Husky](https://www.npmjs.com/package/husky)**: Manages Git hooks to enforce quality checks before commits.
- **[Github Actions](https://docs.github.com/en/actions/learn-github-actions/understanding-github-actions)**: A CI/CD platform integrated with GitHub, automating workflows like test execution on pull requests. 

### Prerequisites

Ensure you have the following software installed on your machine. For more information about the sofware and on how to check the versions installed, please visit the complete documentation [here](https://github.com/vasu31dev/playwright-ts-template#prerequisites).

- **[npm (v8.0.0 or later)](https://docs.npmjs.com/cli/v9/configuring-npm)**: 
  - If npm isn't installed or the version installed is not the supported version, please follow the [npm installation guide](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm).
- **[Node.js (v16.0.0 or later)](https://nodejs.org/en/download)**: 
  - if Node.js isn't installed, download and install it from the title link provided.
- **[Git](https://git-scm.com/downloads)**: 
  - If Git isn't installed, download and install it from the [official Git website](https://git-scm.com/downloads).
- **VSCode Plugins**:
  - **[Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)**: A tool for consistent code formatting. Install it directly from the title link provided.
  - **[ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)**: A tool for identifying and fixing linting issues. Install it directly from the title link provided.
- **VSCode Settings**: Apply the following configurations in your VSCode settings (use `Cmd+` for Mac and `Ctrl+` for Windows , to access the settings window):
  - **Quote Style**: Set `typescript.preferences.quoteStyle` to `single` for consistent quote usage across your code.
  - **Format On Save**: Enable `Format On Save Mode` and set it to `file`. 

### Installation

To begin with your project, start the installation process either by command-line instructions or by doing it step-by-step manually.

#### 1) CLI Installation
 This is the preferred method of installation, as it automatically installs all the necessary dependencies, libraries, playwright browsers, winston logger and husky pre-commit hook.

 The installation steps are below:

 - Install Node.js
   Node.js installation can be done via direct from the website or from CLI. Find   the [Node.js installation steps](https://github.com/vasu31dev/playwright-ts-cli#1-install-nodejs) here.

  - Create a Playwright Test Directory
      ```bash
     mkdir playwright-e2e-tests
     cd playwright-e2e-tests
      ```
  - Install vasu-playwright-cli
     ```bash
     npm i -D vasu-playwright-cli
     ```
     This step installs all the above mentioned dependencies, libraries, playwright browsers, logger and pre-commit hook.

#### Project Initialisation

Run the below command to initialise a project
 ```bash
  npx vasu-playwright-cli init
 ```
  This command will set up a new project with ready to use Playwright TypeScript framework including:
  - Setup the Playwright TypeScript framework template with sample tests.
  - Create a new `package.json` file with all the necessary dependencies.
  - Initializing a new Git repository if neither the current nor parent directory is a Git repository.
  - Installing all the npm packages including the playwright utils library which contains playwright helper methods.

#### 2) Manual Installation
This process involves step-by-step installation of all the dependencies, libraries and playwright browsers manually.

  - Clone the repository:
   ```bash
    git clone https://github.com/vasu31dev/playwright-ts-template.git
   ```

  - Navigate to the project directory:
   ```bash
     cd playwright-ts-template
   ```

  - Install the dependencies:
  ```bash
    npm install
  ```
  - Install the Playwright browsers
  ```bash
    npx playwright install
  ```

### Project Update Guide

It is important to keep your project up to date with the latest changes.

#### 1) Project Installed Through CLI
For the project installed through CLI, please follow the below steps for the project updates:

- Navigate to the project directory and run:
  ```bash
   npx vasu-playwright-cli update
  ```
  This command will update specific files or directories within the project, aligning them with the latest updates to the Playwright TypeScript template.

- Update Playwright Library
   ```bash
  npm i -D vasu-playwright-utils@latest
  ```
  This command keeps your Playwright library up to date with the latest playwright utilities which contain the helper methods that are updated regularly.

#### 2) Project Installed Manually

To pull the latest changes and install the latest packages, follow these steps:

- Pull the latest changes
  ```bash
   git pull origin <branchName>
  ```
  Replace `<branchName>` with the name of the branch that you want to update.
- Install the latest packages
  ```bash
   npm install
  ```
- If there are dependency errors while installing packages, you can remove the node_modules folder and install the packages again. This step can help resolve potential conflicts or issues with dependencies.
  ```bash
    rm -rf node_modules
    npm install
  ```
- Update Playwright browsers as needed
  ```bash
   npx playwright install
  ```
### Framework and Usage

Our framework comprises of several utility functions that simplifies page set up, element identification, actions on elements and finally asserting results. These functions help to put together page objects and write tests simply, letting you focus on making effective test cases.

For more detailed information on framework set up, creating page objects and writing tests in spec files, please visit the complete documentation [here](https://github.com/vasu31dev/playwright-ts-template#project-structure).

### Test Execution

 - To make sure the project framework is working as expected, you can run the following command to run the sample tests in headed chromium browser:
   ```bash
   npm run test:chromium-headed -- sauce-demo-all-pass.spec.ts
   ```
 - Once your own tests are build, you can choose either to run just one test, a group of tests, or all of them. Tests can be run on one browser or many at the same time. Normally, tests are run in headless mode, and you can see the results right in the terminal.
 - Tests can be executed via the `Playwright Test for VSCode` plugin or through the command-line interface. 
 - For more information on how to execute tests with configured settings in `playwright.config.ts` file, and the scripts defined in `package.json` file with various options for browser headed or headless, reruns, workers please visit the complete documentation for [Executing tests](https://github.com/vasu31dev/playwright-ts-template#executing-tests).

### Reports
- Report for the sample tests executed in above step can be viewed with:
  ```bash
  npx playwright show-report
  ```

- In general, Playwright Test comes with different built-in reporters for various needs, and it also support to integrate your own custom reports.

- For more information on report viewing via command-line or configured script in package.json file, please visit the complete documentation [here](https://github.com/vasu31dev/playwright-ts-template#report-generation-and-viewing).

