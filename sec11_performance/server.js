const express = require("express");
const cluster = require('cluster')

cluster.schedulingPolicy = cluster.SCHED_RR;

const app = express();

function delay(duration) {
  const startTime = Date.now();
  while (Date.now() - startTime < duration) {
    //event loop is blocked
  }
}

app.get("/", (req, res) => {
  // JSON.stringify();
  // JSON.parse()
  res.send(`performance example ${process.pid}`);
});

app.get("/timer", (req, res) => {
  //delay the response
  delay(9000);
  res.send(`beep beep beeep! ${process.pid} `);
});

console.log("Worker process started");
app.listen(3000);
