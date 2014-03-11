var fs = require('fs');
var readline = require('readline');

console.log(process.argv[2]);

var readPath = process.argv[2];
var writePath = process.argv[3];

var readStream = fs.createReadStream(readPath);
var writeStream = fs.createWriteStream(writePath);

var rl = readline.createInterface({
  input: readStream,
  output: writeStream,
  terminal: false
});

rl.on('line', function (line) {
  if (line.indexOf('PRES') != -1) {
    writeStream.write(line + '\n');
  }
}).on('close', function () {
  console.log("Finished");
})
