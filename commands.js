const { stat } = require('fs');
const { program } = require('commander');

program
  .storeOptionsAsProperties(false)
  .requiredOption('-a, --action [type],', 'action (encode or decode)')
  .requiredOption('-s, --shift <number>', 'shift')
  .option('-i, --input <filename>', 'input file path')
  .option('-o, --output <filename>', 'output file path');

program.parse(process.argv);

const { action, shift, output } = program.opts();

if (action !== 'decode' && action !== 'encode') {
  process.stderr.write('Error! Write encode/decode for action parameter\n');
  process.on('exit', () => exit(1));
}

if (typeof +shift !== 'number') {
  process.stderr.write('Error! Write number for shift parameter\n');
}

stat(output, err => {
  return err === null
    ? (program.correctWay = true)
    : process.on('exit', () => {
        program.correctWay = false;
      });
});

module.exports = program;