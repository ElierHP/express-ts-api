import express, { Request, Response } from "express";
const router = express.Router();

router
  .route("/")
  .get((req: Request, res: Response) => {
    res.send("Get Route");
  })
  .post((req, res) => {
    res.send("Post Route");
  });

export default router;
