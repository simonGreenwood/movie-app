// set up an express server in typescript
import express from "express";
import { PORT } from "./utils/config";
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});


app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
