const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes/mainAPI");

const PORT = process.env.PORT || 8000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false
});

app.use(routes);

app.listen(PORT, function () {
    console.log("App running on port ${PORT}!")
}); 