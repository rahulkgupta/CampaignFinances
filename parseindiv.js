var fs = require('fs');
var _ = require('lodash')
var readline = require('readline');

console.log(process.argv[2]);

var readPath = process.argv[2];
// var writePath = process.argv[3];

var readStream = fs.createReadStream(readPath);
// var writeStream = fs.createWriteStream(writePath);

var rl = readline.createInterface({
  input: readStream,
  // output: writeStream,
  terminal: false
});

var counter = 0
rl.on('line', function (line) {
  counter ++;
  var cellsDirty = line.replace(/\,\,\,/g, ',||,||,').replace(/\|\|/g, '|blank|').split('|,');
  var cells = _.map(cellsDirty, function (val, key) {
    return val.replace(/\|/g, '');
  });
  console.log(cells);
  // // console.log(cellsDirty)
  // if (recipId.match('/^N/')) {
  //   console.log(line);
  // }
}).on('close', function () {
  console.log("Finished" + counter);
})
