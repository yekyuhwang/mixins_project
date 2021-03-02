import express from "express";
import helmet from "helmet";
import path from "path";
// path : 경로를 구할 때 사용
import pageRouter from "./router/pageRouter";

const app = express();

const PORT = 3000;

app.use(helmet());
app.set("view engine", "pug");
app.use(express.static(path.join(__dirname, "/assets")));

console.log(path.join(__dirname, "/assets"));

app.use("/", pageRouter);

app.listen(PORT, () => {
  console.log(`🍀${PORT} SERVER START!`);
});
