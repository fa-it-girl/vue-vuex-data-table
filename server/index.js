const express = require("express");
const fs = require('fs');
const cors = require('cors');
const app = express();
const path = require('path')
app.use(cors({
  origin: '*'
}));

app.get("/api/data", (request, response) => {
  fs.readFile(path.join('public', 'data/') + 'data.json', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    response.json(JSON.parse(data));
  });
});

app.get("/api/data/:id", (request, response) => {
  const id = request.params.id
  fs.readFile(path.join('public', 'data/') + 'data_extended.json', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    response.json(JSON.parse(data)[id]);
  });
});

const root = path.join('public', 'dist')
app.get("*", function(req, res){
  fs.stat(root + req.path, function(err) {
    if(err) {
      res.sendFile("index.html", { root })
    } else {
      res.sendFile(req.path,  { root })
    }
  })
})

app.listen(3000, () => {
    console.log("Listen on the port 3000");
});
