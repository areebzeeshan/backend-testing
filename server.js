require("dotenv").config();
const express = require("express");
const app = express();
const { dbConn } = require("./src/Config/db");
const cors = require("cors");

const userRoutes = require("./src/Routes/user.routes");

// port
PORT = process.env.PORT || 5000;

// database connection
dbConn();

// cors
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Routes
app.use("/api/user", userRoutes);

app.listen(PORT, () => {
  console.log(`server is listening at port : ${PORT}`);
});
