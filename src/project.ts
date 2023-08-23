#!/usr/bin/env node
import * as fs from 'fs-extra';
import * as path from 'path';
import download from 'download-git-repo';
import { runCommand } from './commands';
import { exec } from 'child_process';

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

async function createPackageJson(source: string, destination: string, excludeFields: string[]) {
  const repoPackageJsonPath = path.join(source, 'package.json');
  const repoPackageJson = JSON.parse(fs.readFileSync(repoPackageJsonPath, 'utf8'));
  let packageJson: any = {};
  Object.keys(repoPackageJson).forEach(key => {
    if (!excludeFields.includes(key)) {
      packageJson[key] = repoPackageJson[key];
    }
  });
  fs.writeFileSync(destination, JSON.stringify(packageJson, null, 2));
}

export async function initProject() {
  const repo = 'direct:https://github.com/vasu31dev/playwright-ts-template.git#main';
  const filesAndDirs = [
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
  const excludePackageJsonFields = ['name', 'description', 'repository', 'author', 'homepage', 'bugs'];

  try {
    if (fs.existsSync('temp-repo')) {
      fs.removeSync('temp-repo');
    }
    await downloadRepo(repo, 'temp-repo');
    console.log('Playwright-template project cloned successfully.');
    await copyFiles(filesAndDirs, 'temp-repo', process.cwd());
    await createPackageJson('temp-repo', path.join(process.cwd(), 'package.json'), excludePackageJsonFields);
    fs.removeSync('temp-repo');
    console.log('Copied cloned files.');
    checkAndInitGit();
    // await runCommand('git', ['init'], 'Initializing Git repository...');
    // await runCommand('git', ['branch', '-m', 'main'], "Renaming branch to 'main'...");
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
