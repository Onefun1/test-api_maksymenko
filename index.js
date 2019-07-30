const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

const users = [
  { name: "Max", age: 30 },
  { name: "Oksana", age: 29 },
  { name: "Miroslava", age: 2 }
];

app.get("/api/users", function(req, res) {
  res.set("Access-Control-Allow-Origin", "*");
  res.send(JSON.stringify(users));
});

app.get("/api/user", function(req, res) {
  res.set("Access-Control-Allow-Origin", "*");
  res.send("User was added");
});

app.listen(port, function() {
  console.log(`App listening on port http://127.0.0.1:${port}`);
});
