require('es6-promise').polyfill();
require('isomorphic-fetch');

const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 5000;


function parseCSV(data) {
  parsedJSON = [];
  lines = data.split('\r\n');

  // The first row of the csv contains attribute names, we'll
  // make the first letter lowercase and use them as properties
  header = lines.shift().split(',').map(x => x.charAt(0).toLowerCase() + x.slice(1));

  lines.forEach(line => {
    if (line === '') {
      return
    }

  lineJSON = {};
    line.split(',').forEach((value, i) => {
      const property_name = header[i];

      // Strip unwanted quoation marks from response
      lineJSON[property_name] = value.replace(/\"/g, '');
    });
    parsedJSON.push(lineJSON);
  });
  return parsedJSON;
}

app.get('/api/departures', (req, res) => {
  fetch('http://developer.mbta.com/lib/gtrtfs/Departures.csv')
  .then(response => {
    responseCSV = response.text();
    return responseCSV;
  }).then(responseCSV => {
    responseJSON = parseCSV(responseCSV);
    return responseJSON;
  }).then(responseJSON => {
    res.json(responseJSON);
  }).catch(error => {
    console.log('error: ', error)
  });
});

app.use(express.static(path.resolve(__dirname, 'client/build/')));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client/build', 'index.html'))
});

app.listen(port, () => console.log(`Listening on port ${port}`));
