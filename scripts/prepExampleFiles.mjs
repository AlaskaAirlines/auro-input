import fs from 'fs';

/* eslint-disable prefer-arrow-callback */

/**
 * Function to support @focusin event.
 * @private
 * @param {string} path - path to file
 * @param {string} type - file encoding
 * @return {void}
 */
function removeExport(path, type) {
  fs.readFile(path, type, function(err, data) {
    const exportPos = data.indexOf('export');
    const exampleScript = data.substring(0, exportPos);
    const writer = fs.createWriteStream(path);

    writer.write(exampleScript);
  });
}

removeExport('./demo/index.min.js', 'utf8');
removeExport('./demo/api.min.js', 'utf8');
