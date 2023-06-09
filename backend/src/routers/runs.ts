import express from "express";
import prismaClient from "../utils/prismaClient";

const runsRouter = express.Router();

runsRouter.get("/", async (_req: any, res: any) => {
  try {
    const runs = await prismaClient.run.findMany();
    res.send(runs);
  } catch (e: any) {
    console.error(e);
    res.status(400).end();
  }
});

runsRouter.post("/", async (req, res) => {
  try {
    const run = await prismaClient.run.create({ data: req.body.data });
    res.json(run);
  } catch (e: any) {
    console.error(e);
    res.status(400).end();
  }
});

runsRouter.put("/", async (req, res) => {
  try {
    await prismaClient.run.update(req.body);
    res.end();
  } catch (e: any) {
    console.error(e);
    res.status(400).end();
  }
});

runsRouter.delete("/", async (req, res) => {
  try {
    await prismaClient.run.delete(req.body);
    res.end();
  } catch (e: any) {
    console.error(e);
    res.status(400).end();
  }
});

export default runsRouter;
