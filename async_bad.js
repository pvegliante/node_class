var fs = require('fs');

var file;
var buf = new Buffer(100000);

fs.open(
  'info.txt', 'r',
  function (err, handle) {
    file = handle;
  }
);

fs.read(
  file, buf, 0, 100000, null,
  function (err, length) {
    console.log(buf.toString());
    fs.close(file, function() { /* dont care */ })
  }
);


// opens up the file. handle allows you to control the file. and assign the handle
