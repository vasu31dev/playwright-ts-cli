import spawn from 'cross-spawn';

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

    child.on('error', error => {
      console.error(`Failed to start child process: ${error}`);
      reject(error);
    });
  });
}
