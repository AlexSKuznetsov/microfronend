const express = require("express");
const fs = require("fs");

const app = express();

app.use("/", express.static(__dirname + "/public"));
app.use("/modules", express.static(__dirname + "/modules"));

app.get("/config", (req, res) => {
  setTimeout(() => result(), 0); // server response delay
  const result = () => {
    return res.json([
      {
        name: "HeaderModule",
        tag: "header-module",
        file: "header-module.js",
      },
      {
        name: "CurrentTime",
        tag: "time-formatted",
        file: "currtime-module.js",
      },
      {
        name: "InputModule",
        tag: "input-module",
        file: "input-module.js",
      },
    ]);
  };
});

app.listen(3000, () => {
  console.log("started");
});
