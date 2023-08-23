#!/usr/bin/env node
import * as fs from 'fs-extra';
import * as path from 'path';
import download from 'download-git-repo';
import { runCommand } from './commands';
import { exec } from 'child_process';

const REPO_URL = 'direct:https://github.com/vasu31dev/playwright-ts-template.git#main';
const TEMP_REPO_DIR = 'temp-repo';

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
    await downloadRepo(REPO_URL, TEMP_REPO_DIR);
    console.log('Playwright-template project cloned successfully.');
    copyEntireProject(TEMP_REPO_DIR, process.cwd()); // Copy the entire directory
    modifyPackageJson(process.cwd());
    fs.removeSync(TEMP_REPO_DIR);
    console.log('Copied cloned files.');
    const isGitRepo = await checkAndInitGit();
    if (isGitRepo) {
      console.log('Project is already part of a Git repository or a subdirectory. Skipping Husky installation.');
    } else {
      // If not part of a Git repository, run the Husky installation command
      await runCommand('npx', ['husky', 'install'], 'Installing Husky...');
    }

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

async function downloadRepo(repo: string, destination: string): Promise<void> {
  return new Promise<void>((resolve, reject) => {
    download(repo, destination, { clone: true }, (err: any) => {
      if (err) reject(err);
      else resolve();
    });
  });
}

async function checkAndInitGit(): Promise<boolean> {
  return new Promise<boolean>(resolve => {
    exec('git rev-parse --is-inside-work-tree', (error, stdout) => {
      if (error || stdout.trim() !== 'true') {
        console.log('No existing Git repository detected. Initializing a new Git repository...');
        resolve(false);
      } else {
        console.log('An existing Git repository was detected. Skipping Git initialization.');
        resolve(true);
      }
    });
  });
}

function copyEntireProject(source: string, destination: string) {
  fs.copySync(source, destination);
}

function modifyPackageJson(destination: string) {
  const packageJsonPath = path.join(destination, 'package.json');
  const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));

  // Modify the fields as per requirements
  packageJson.name = MODIFY_PACKAGE_JSON_FIELDS.name;
  packageJson.repository = MODIFY_PACKAGE_JSON_FIELDS.repository;
  packageJson.author = MODIFY_PACKAGE_JSON_FIELDS.author;
  MODIFY_PACKAGE_JSON_FIELDS.exclude.forEach(field => delete packageJson[field]);

  fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
}
