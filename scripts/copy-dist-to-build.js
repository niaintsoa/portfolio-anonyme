import { cp } from 'fs/promises';
import { existsSync } from 'fs';
import { resolve } from 'path';

const root = resolve(process.cwd());
const dist = resolve(root, 'dist');
const build = resolve(root, 'build');

(async () => {
  try {
    if (!existsSync(dist)) {
      console.error('dist directory not found');
      process.exit(1);
    }
    await cp(dist, build, { recursive: true, force: true });
    console.log('copied dist -> build');
  } catch (err) {
    console.error('failed to copy', err);
    process.exit(1);
  }
})();
