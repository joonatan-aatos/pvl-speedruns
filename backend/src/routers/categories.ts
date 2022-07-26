import express from "express";
import prismaClient from "../utils/prismaClient";

const categoriesRouter = express.Router();

categoriesRouter.get("/", async (_req: any, res: any) => {
  try {
    const categories = await prismaClient.category.findMany();
    res.send(categories);
  } catch (e: any) {
    console.error(e);
    res.status(400).end();
  }
});

categoriesRouter.post("/", async (req, res) => {
  try {
    const category = await prismaClient.category.create({
      data: req.body.data,
    });
    res.json(category);
  } catch (e: any) {
    console.error(e);
    res.status(400).end();
  }
});

categoriesRouter.put("/", async (req, res) => {
  try {
    await prismaClient.category.update(req.body);
    res.end();
  } catch (e: any) {
    console.error(e);
    res.status(400).end();
  }
});

categoriesRouter.delete("/", async (req, res) => {
  try {
    await prismaClient.category.delete(req.body);
    res.end();
  } catch (e: any) {
    console.error(e);
    res.status(400).end();
  }
});

export default categoriesRouter;
