import express, { Express, Request, Response } from "express";

const app: Express = express();
const PORT = 3001;

app.get("/", (req: Request, res: Response) => {
  res.send("Hello from TS Node");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
