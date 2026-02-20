import { execSync } from 'child_process';

try {
  console.log('Running pnpm install to sync lockfile...');
  const output = execSync('pnpm install --no-frozen-lockfile', {
    cwd: '/vercel/share/v0-project',
    encoding: 'utf-8',
    stdio: 'pipe',
  });
  console.log(output);
  console.log('Lockfile synced successfully.');
} catch (error) {
  console.error('Error:', error.stderr || error.message);
  process.exit(1);
}
