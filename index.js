import express from "express";
import userRoutes from "./routes/admin.js";
import testRoutes from "./routes/test.js";
const app = express();
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }));
// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to our Land Managments system." });
});
// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

app.use("/", userRoutes);
app.use("/", testRoutes);
