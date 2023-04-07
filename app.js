const express = require("express");
const addDays = require("date-fns/addDays");
const app = express();

app.get("/", (request, response) => {
  const date = new Date();
  const no_days = addDays(
    new Date(date.getFullYear(), date.getMonth(), date.getDate()),
    100
  );
  response.send(
    `${no_days.getDate()}/${no_days.getMonth() + 1}/${no_days.getFullYear()}`
  );
});

module.exports = app;
