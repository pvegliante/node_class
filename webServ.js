var http = require('http');
const PORT = 8080;


function process_request(req, res) {
  var body = "Thanks for Calling!\n";
  var content_length = body.length;
  res.writeHead(200, {
    'Content_Length': content_length,
    'Content_Type': 'text/plan'
  });

  res.end(body);
}

var server = http.createServer(process_request);
server.listen(PORT, () => {
  console.log('listening on http://localhost: ' + PORT);
});
