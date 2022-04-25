import express from "express";
import { connect } from "./utils/prismaClient";

import categoriesRouter from "./routers/categories";
import runsRouter from "./routers/runs";

const app = express();
const port = parseInt(process.env.PORT as string) | 8080;

app.use(express.json());

app.use("/categories", categoriesRouter);
app.use("/runs", runsRouter);

connect().then(() => {
  app.listen(port, () => {
    console.log(`Pvl-speedruns api listening at http://localhost:${port}`);
  });
});
