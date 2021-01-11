const express = require("express");
const app = express();
const PORT = 5000;
const checkDateTime = require("./middleware");

app.set("view engine", "ejs");

// using middleware
app.use(checkDateTime);

// creating routes
app.get("/", (req, res) => {
  res.render("index");
});

app.get("/services", (req, res) => {
  res.render("services");
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/contact", (req, res) => {
  res.render("contact");
});

app.listen(PORT, () => console.log(`Server is running on ${PORT}`));
