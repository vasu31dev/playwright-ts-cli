#!/usr/bin/env node
import * as fs from 'fs-extra';
import * as path from 'path';
import { runCommand } from './commands';
import { exec } from 'child_process';
import axios from 'axios';
import simpleGit from 'simple-git';

const git = simpleGit();

const REPO_URL = 'https://github.com/vasu31dev/playwright-ts-template.git';
const REPO_BRANCH = 'main';
const TEMP_REPO_DIR = 'temp-repo';
const README_PATH = 'template-files/README.md';
const DOWNLOAD_URL = 'https://raw.githubusercontent.com/vasu31dev/playwright-ts-cli/main/template-files/README.md';
const DESTINATION_PATH = path.join(process.cwd(), 'README.md');

// Define the fields to modify in package.json
const MODIFY_PACKAGE_JSON_FIELDS = {
  name: 'playwright-e2e-tests',
  repository: '',
  author: '',
  exclude: ['homepage', 'bugs'],
};

export async function initProject() {
  try {
    if (fs.existsSync(TEMP_REPO_DIR)) {
      fs.removeSync(TEMP_REPO_DIR);
    }
    await downloadRepo(REPO_URL, REPO_BRANCH, TEMP_REPO_DIR); // Clone the Playwright-template project into a temp directory
    console.log('Playwright-template project cloned successfully.');
    const isSubdirectory = await checkAndInitGit();
    copyEntireProject(TEMP_REPO_DIR, process.cwd(), isSubdirectory); // Copy the entire TEMP_REPO_DIR directory except README.md file and docs folder
    await downloadFile(DOWNLOAD_URL, DESTINATION_PATH).catch(error => console.error('Error downloading file:', error)); // Download README.md file
    modifyPackageJson(process.cwd(), isSubdirectory);
    fs.removeSync(TEMP_REPO_DIR); // Remove the temp directory
    console.log('Copied cloned files.');

    await runCommand('npm', ['install'], 'Running npm install...');
  } catch (error) {
    console.error('Project initialization failed. See error details below:');
    console.error('Error details:', error);
  }
}

export function updateProject() {
  // Define the files and directories to update
  const filesAndDirsToUpdate: any[] = [
    // Add the paths to the files or directories you want to update
  ];

  // Update each file or directory
  filesAndDirsToUpdate.forEach(item => {
    // You can add the logic to update the files or directories here
    // Example: fs.copySync(path.join(__dirname, item), path.join(process.cwd(), item), { overwrite: true });
  });

  console.log('Project update completed successfully.');
}

async function downloadRepo(repo: string, branch: string, destination: string): Promise<void> {
  try {
    await git.clone(repo, destination);
    await git.cwd(destination).checkout(branch);
    console.log(`Repository cloned to ${destination} and checked out to branch ${branch}`);
  } catch (error) {
    console.error('Failed to clone repository:', error);
    throw error;
  }
}

async function checkAndInitGit() {
  return new Promise<boolean>(resolve => {
    // Check if the current directory is inside a Git work tree
    exec('git rev-parse --is-inside-work-tree', async (error, stdout) => {
      if (error || stdout.trim() !== 'true') {
        // Check if the current directory is a subdirectory of another directory
        exec('git rev-parse --show-toplevel', async (subDirError, topLevelDir) => {
          if (subDirError || !topLevelDir) {
            console.log('No existing Git repository detected. Initializing a new Git repository...');
            try {
              await runCommand('git', ['init', '-b', 'main'], 'Initializing Git repository...');
              resolve(false);
            } catch (initError) {
              console.error('Failed to initialize Git repository:', initError);
              resolve(false);
            }
          } else {
            console.log('Project is installed as a subdirectory. Skipping Git initialization.');
            resolve(true);
          }
        });
      } else {
        console.log('An existing Git repository was detected. Skipping Git initialization.');
        resolve(true);
      }
    });
  });
}

function copyEntireProject(source: string, destination: string, isSubdirectory: boolean) {
  fs.copySync(source, destination, {
    filter: src => {
      const baseName = path.basename(src);
      if (baseName === 'README.md' || baseName === 'docs') {
        return false; // Exclude README.md file and docs folder
      }
      return isSubdirectory ? !src.includes('.husky') : true; // Exclude .husky folder if the repo is copied as a subdirectory
    },
  });
}

async function downloadFile(url: string, outputPath: string) {
  try {
    const response = await axios.get(url, { responseType: 'arraybuffer' });
    fs.writeFileSync(outputPath, response.data);
    console.log(`File downloaded successfully to ${outputPath}`);
  } catch (error) {
    console.error('Error downloading file:', error);
  }
}

function modifyPackageJson(destination: string, isSubdirectory: boolean) {
  const packageJsonPath = path.join(destination, 'package.json');
  const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));

  // Modify the fields as per requirements
  packageJson.name = MODIFY_PACKAGE_JSON_FIELDS.name;
  packageJson.repository = MODIFY_PACKAGE_JSON_FIELDS.repository;
  packageJson.author = MODIFY_PACKAGE_JSON_FIELDS.author;
  MODIFY_PACKAGE_JSON_FIELDS.exclude.forEach(field => delete packageJson[field]);

  // Remove the "prepare": "husky install" script if the repo is copied as a subdirectory
  if (isSubdirectory && packageJson.scripts && packageJson.scripts.prepare) {
    delete packageJson.scripts.prepare;
  }

  fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
}