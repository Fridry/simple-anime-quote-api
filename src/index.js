const express = require("express");
const getData = require("./getData");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Hello World!" });
});

app.get("/quote", async (req, res) => {
  const quote = await getData();

  res.json(quote);
});

app.use((req, res, next) => {
  res.status(404).json({
    message:
      "Ohh you are lost, read the API documentation to find your way back home :)",
  });
});

const port = 3000;

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
