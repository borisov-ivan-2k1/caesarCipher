const { createReadStream, createWriteStream } = require('fs');
const { join } = require('path');
const { pipeline } = require('stream');

const Transformer = require('./Transform');
const commands = require('./commands');

const { action, shift, input, output } = commands.opts();

const readStream = input ?
  createReadStream(join(__dirname, input)) :
  process.stdin;

const writeStream = output ?
  createWriteStream(join(__dirname, output), { flags: 'a+' }) : 
  process.stdout;

const transform = new Transformer(action, shift);

pipeline(readStream, transform, writeStream, err => {
  if (err) console.log('Somthing error', err);
});