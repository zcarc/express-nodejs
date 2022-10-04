const express = require("express");
const logger = require("morgan");
const app = express();
const port = 3000;

const wiki = require("./wiki.js");

const a_middleware_function = function (req, res, next) {
  // Perform some operations
  console.log("a_middleware_function");
  next(); // Call next() so Express will call the next middleware function in the chain.
};

// Function added with use() for all routes and verbs
// app.use(a_middleware_function);

app.use("/wiki", a_middleware_function);

app.use(logger("dev"));
app.use("/wiki", wiki);

// app.use(express.static("public"));
app.use("/media", express.static("public"));

app.get("/", function (req, res) {
  res.send("Hello World!");
});

app.use((req, res, next) => {
  res.status(404).send("Sorry can't find that!");
});

app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
});
