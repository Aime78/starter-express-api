const express = require("express");

const fs = require("fs");
const app = express();

app.get("/", (req, res) => {
  fs.readFile("./db.json", "utf-8", (err, data) => {
    if (err) throw err;

    const jsonData = JSON.parse(data);
    res.send(jsonData);
  });
});
app.listen(process.env.PORT || 3000);
