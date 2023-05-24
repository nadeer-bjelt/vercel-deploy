import express from "express";

const app = express();

const port = 9000;

app.use("/", (req, res) => {
  res.json({ message: "Hello from express app" });
});

app.listen(9000, () => {
  console.log(`Starting port is ${port}`);
});
