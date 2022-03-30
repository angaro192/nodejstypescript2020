import express from "express";

const app = express();

app.get("/", (req, res) => {
  return res.json({ message: "Ola mundo TS" });
});

app.listen(3000);
