const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes/mainAPI");

const PORT = process.env.PORT || 8000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost/fitness-tracker',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    }
  );
  

  require("./routes/mainAPI")(app);
  require("./routes/htmlRoutes")(app);

app.listen(PORT, function () {
    console.log("App running on port 8000")
}); 