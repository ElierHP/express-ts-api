import express, { Application, Request, Response } from "express";
import config from "../config";

const port = config.port as number;
const host = config.host as string;

const app: Application = express();

// Body Parsing Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response) => {
  return res.status(200).send({
    message: "Hello World!",
  });
});

app.listen(port, host, () => {
  console.log(`Server listing at http://${host}:${port}`);
});
