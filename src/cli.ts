#!/usr/bin/env node
import { Command } from "commander";
// import * as inquirer from "inquirer";
import * as fs from "fs-extra";
import * as path from "path";
import download from "download-git-repo";
import { spawn } from "child_process";

const program = new Command();

program
  .command("init")
  .description("Initialize a new project")
  .action(initProject);

program
  .command("update")
  .description("Update the project")
  .action(updateProject);

program.parse(process.argv);

function initProject() {
  // Define the GitHub repository
  const repo = "vasu31dev/playwright-ts-template#main";

  // Define the files and directories to copy
  const filesAndDirs = [
    ".husky",
    "src/vasu-playwright/setup",
    "src/vasu-playwright/utils",
    "tests",
    ".eslintignore",
    ".eslintrc",
    ".gitignore",
    ".prettierignore",
    ".prettierrc",
    "playwright.config.ts",
    "tsconfig.json",
  ];

  // Download the entire repository
  download(repo, "temp-repo", { clone: true }, (err: any) => {
    if (err) {
      console.error("Failed to download repository:", err);
      return;
    }

    // Copy each specified file or directory
    filesAndDirs.forEach((item) => {
      fs.copySync(path.join("temp-repo", item), path.join(process.cwd(), item));
    });

    // Read the package.json file from the repository
    const repoPackageJsonPath = path.join("temp-repo", "package.json");
    const repoPackageJson = JSON.parse(
      fs.readFileSync(repoPackageJsonPath, "utf8")
    );

    // Define the sections to be excluded
    const excludeFields = [
      "name",
      "version",
      "description",
      "keywords",
      "license",
      "repository",
      "author",
      "homepage",
      "bugs",
      // "dependencies",
      // "devDependencies",
    ];

    // Create a new package.json object with only the necessary sections
    let packageJson: any = {};
    Object.keys(repoPackageJson).forEach((key) => {
      if (!excludeFields.includes(key)) {
        packageJson[key] = repoPackageJson[key];
      }
    });

    // Write the new package.json file to the project directory
    const packageJsonPath = path.join(process.cwd(), "package.json");
    fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));

    // Optionally, delete the temporary repository folder
    fs.removeSync("temp-repo");

    console.log("Project initialized successfully!");

    // Run npm install
    runNpmInstall();
  });
}

function runNpmInstall() {
  console.log("Running npm install...");
  const child = spawn("npm", ["install"], { stdio: "inherit" });

  child.on("close", (code) => {
    if (code !== 0) {
      console.error(`npm install exited with code ${code}`);
    } else {
      console.log("npm install completed successfully!");
    }
  });
}

function updateProject() {
  // Define the files and directories to update
  const filesAndDirsToUpdate: any[] = [
    // Add the paths to the files or directories you want to update
  ];

  // Update each file or directory
  filesAndDirsToUpdate.forEach((item) => {
    // You can add the logic to update the files or directories here
    // Example: fs.copySync(path.join(__dirname, item), path.join(process.cwd(), item), { overwrite: true });
  });

  console.log("Project updated successfully!");
}
