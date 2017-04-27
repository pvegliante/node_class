var http = require('http');
var fs = require('fs');
const PORT = 8080;

function load_album_list(callback) {
    // we assume that any directory inside albums is an "album"
    fs.readdir(
        'albums',
        function(err, files) {
            if (err) {
                callback(err);
                return;
            }

            var only_dirs = [];

            var iterator = (index) => {
              if (index == files.length) {
                callback(null, only_dirs);
                return;
              }

              fs.stat('albums/' + files[index], (err, stats) => {
                if (stats.isDirectory()) {
                  only_dirs.push(files[index]);
                }
                iterator(index + 1);
              });
            }

            iterator(0);
    });
}

function handle_incoming_request(req, res) {
    console.log('INCOMING REQUEST: ' + req.method + ' ' + req.url);
    load_album_list(function(err, albums) {
        if (err) {
            res.writeHead(500, {
                "Content-Type": "application/json"
            });
            res.end(JSON.stringify(err) + "\n");
            return;
        }

        var out = {
            error: null,
            data: {albums: albums}
        };
        res.writeHead(200, {
            "Content-Type": "application/json"
        })
        res.end(JSON.stringify(out) + "\n");
    });
}

var server = http.createServer(handle_incoming_request);

server.listen(PORT, () => {
    console.log('listening on http://localhost: ' + PORT);
});
