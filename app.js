const express = require("express");
const stripe = require("stripe")(
  "sk_test_51KdH1DJypsOSexrir0wU1sr6LjScg2vmUb0pcBzi9Ui3CFvRzfO5cBuBfXNa68b6Y8KXYOnkeqBdOubi9F459QsT00pCqFNOp4"
);
const bodyParser = require("body-parser");
const exphbs = require("express-handlebars");

const app = express();
// Handlebars Middelware
app.engine("handlebars", exphbs.engine({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Body Parser Middelware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Set Static Folder
app.use(express.static(`${__dirname}/public`));

// Index route
app.get("/", (req, res) => {
  res.render("index");
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
