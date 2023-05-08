const path = require('path')
const markdownMagic = require('markdown-magic')

const config = {
  matchWord: 'AURO-GENERATED-CONTENT'
}

const callback = function(updatedContent, outputConfig) {
  console.log('Finished compiling documentation.');
}

const markdownPath = path.join(__dirname, '../**/*.md')
markdownMagic(markdownPath, config, callback)
