import path from 'path';
import markdownMagic from 'markdown-magic';

const __dirname = new URL('.', import.meta.url).pathname;

const config = {
  matchWord: 'AURO-GENERATED-CONTENT'
}

const callback = function(updatedContent, outputConfig) {
  console.log('Finished compiling documentation.');
}

const markdownPath = path.join(__dirname, '../**/*.md')
markdownMagic(markdownPath, config, callback)
