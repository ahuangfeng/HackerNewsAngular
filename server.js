//Install express server
const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/HKAngular'));
app.use('/', express.static(__dirname + '/mainPage'));

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname + '/dist/HKAngular/index.html'));
});

var port = process.env.PORT || 8080;
// Start the app by listening on the default Heroku port
app.listen(port);

console.log("Server listening on port " + port);