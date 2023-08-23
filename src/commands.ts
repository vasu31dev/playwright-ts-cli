import { spawn } from 'child_process';

export function runCommand(command: string, args: string[], description: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const child = spawn(command, args, { stdio: 'inherit' });

    child.on('close', code => {
      if (code !== 0) {
        console.error(`${description} exited with code ${code}`);
        reject(new Error(`${description} failed`));
      } else {
        console.log(`${description} completed successfully!`);
        resolve();
      }
    });
  });
}
