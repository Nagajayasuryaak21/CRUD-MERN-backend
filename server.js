require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const connection = require("./db");
const createRoutes = require("./routes/Create")
const readRoutes = require("./routes/Read")
const updateRoutes = require("./routes/Update")
const deleteRoutes = require("./routes/Delete")


// database connection
connection();

// middlewares
app.use(express.json());
app.use(cors());

app.use("/create",createRoutes);
app.use("/update",updateRoutes);
app.use("/read",readRoutes);
app.use("/delete",deleteRoutes);
const port = process.env.PORT;
if (port) {
  app.listen(port, console.log(`Listening on port ${port}...`));
}

module.exports=app;