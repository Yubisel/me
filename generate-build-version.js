/* generate-build-version.js */
const fs = require('fs');
const packageJson = require('./package.json');

const appVersion = packageJson.version;

require('child_process').exec('git rev-parse --short HEAD', function(oError, sCommitHash) {
    console.log('Last commit hash on this branch is:', sCommitHash);

    const jsonData = {
      version: appVersion,
      commitHash: sCommitHash.trim()
    };
    
    var jsonContent = JSON.stringify(jsonData);
    
    fs.writeFile('./src/meta.json', jsonContent, 'utf8', function(err) {
      if (err) {
        console.log('An error occured while writing JSON Object to meta.json');
        return console.log(err);
      }
    
      console.log('meta.json file has been saved with latest version number');
    });
});

