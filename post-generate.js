const { execSync } = require('child_process');
const { readdirSync, writeFileSync } = require('fs');
const { generatedMfes, scripts, ...rest } = require('./package.json');

const NON_MFE_DIRS = ['.git', 'node_modules', '.vscode'];

const getDirectories = source =>
  readdirSync(source, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name);

const directories = getDirectories('.');
const newMfe = directories
  .filter(dir => !NON_MFE_DIRS.includes(dir))
  .find(dir => !generatedMfes.includes(dir));

if (newMfe) {
  const newPackage = {
    ...rest,
    scripts: {
      ...scripts,
      'install:deps': `${scripts['install:deps']} \"cd ${newMfe} && rm -rf node_modules && rm yarn.lock && yarn\"`,
      start: `${scripts.start} \"cd ${newMfe} &&  yarn webpack serve\"`,
    },
    generatedMfes: [...generatedMfes, newMfe],
  };
  const newPackageJson = JSON.stringify(newPackage, null, 2);

  writeFileSync('./package.json', newPackageJson);

  execSync(`cd ${newMfe} && yarn && cd ..`);
}
