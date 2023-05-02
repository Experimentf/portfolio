const fs = require('fs');
const { exec } = require('child_process');

const rootPath = 'C:/Users/devf/Desktop/divyansh-app';
const assetsPath = rootPath + '/public/assets';
const componentsPath = rootPath + '/src/components';

process.chdir(componentsPath);

fs.readdir(assetsPath, undefined, (err, files) => {
    if (err) {
        throw new Error(err.message);
    }
    try {
        files.forEach((file) => {
            exec(`npx gltfjsx --shadows -T ${assetsPath}/${file}`);
        });
    } catch (e) {
        throw e;
    }
});
