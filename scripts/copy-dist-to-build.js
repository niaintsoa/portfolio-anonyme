import { copy } from 'fs-extra';
import { existsSync } from 'fs';
import { resolve } from 'path';

const root = resolve(process.cwd());
const dist = resolve(root, 'dist');
const build = resolve(root, 'build');

if (!existsSync(dist)) {
  console.error('dist directory not found');
  process.exit(1);
}

copy(dist, build)
  .then(() => {
    console.log('copied dist -> build');
  })
  .catch((err) => {
    console.error('failed to copy', err);
    process.exit(1);
  });
