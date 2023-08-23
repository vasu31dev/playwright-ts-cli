#!/usr/bin/env node
import * as fs from 'fs-extra';
import * as path from 'path';
import download from 'download-git-repo';
import { runCommand } from './commands';
import { exec } from 'child_process';

const REPO_URL = 'direct:https://github.com/vasu31dev/playwright-ts-template.git#main';
const TEMP_REPO_DIR = 'temp-repo';
const FILES_AND_DIRS = [
  '.husky',
  'src',
  'tests',
  '.eslintignore',
  '.eslintrc',
  '.gitignore',
  '.prettierignore',
  '.prettierrc',
  'package-lock.json',
  'playwright.config.ts',
  'tsconfig.json',
];
const EXCLUDE_PACKAGE_JSON_FIELDS = ['name', 'description', 'repository', 'author', 'homepage', 'bugs'];

async function downloadRepo(repo: string, destination: string): Promise<void> {
  return new Promise<void>((resolve, reject) => {
    download(repo, destination, { clone: true }, (err: any) => {
      if (err) reject(err);
      else resolve();
    });
  });
}

async function copyFiles(filesAndDirs: string[], source: string, destination: string) {
  filesAndDirs.forEach(item => {
    fs.copySync(path.join(source, item), path.join(destination, item));
  });
}

async function checkAndInitGit() {
  exec('git rev-parse --is-inside-work-tree', async (error, stdout) => {
    if (error || stdout.trim() !== 'true') {
      console.log('No existing Git repository detected. Initializing a new Git repository...');
      await runCommand('git', ['init', '-b', 'main'], 'Initializing Git repository...');
    } else {
      console.log('An existing Git repository was detected. Skipping Git initialization.');
    }
  });
}

async function createPackageJson(source: string, destination: string) {
  const repoPackageJsonPath = path.join(source, 'package.json');
  const repoPackageJson = JSON.parse(fs.readFileSync(repoPackageJsonPath, 'utf8'));
  const packageJson = { ...repoPackageJson };
  EXCLUDE_PACKAGE_JSON_FIELDS.forEach(field => delete packageJson[field]);
  fs.writeFileSync(destination, JSON.stringify(packageJson, null, 2));
}

export async function initProject() {
  try {
    if (fs.existsSync(TEMP_REPO_DIR)) {
      fs.removeSync(TEMP_REPO_DIR);
    }
    await downloadRepo(REPO_URL, TEMP_REPO_DIR);
    console.log('Playwright-template project cloned successfully.');
    await copyFiles(FILES_AND_DIRS, TEMP_REPO_DIR, process.cwd());
    await createPackageJson(TEMP_REPO_DIR, path.join(process.cwd(), 'package.json'));
    fs.removeSync(TEMP_REPO_DIR);
    console.log('Copied cloned files.');
    checkAndInitGit();
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
