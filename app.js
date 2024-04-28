// Importing required modules
const express = require("express");
const { sendMail } = require("./controllers/mailController");
const http = require("http");
const path = require("path");

const app = express();

app.use(express.json());

app.use(express.static(path.join(__dirname, "dist")));

app.post("/contact", sendMail);

const port = 3000;

app.listen(port, () => {
  console.log(`listening on port ${port}`);
  console.log(`serving on http://localhost:${port}`);
});
