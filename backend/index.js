import express from "express";
import connection from "./config/dbconfig.js";
import productRouter from "./router/productRouter.js";
import cors from "cors";
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: "GET,POST",
  })
);
connection();

app.listen(3000, () => {
  console.log("connected to backend successfully");
});

app.use("/product", productRouter);
app.all("*", (req, res) => {
  return res.status(404).json({ message: "Oops!! api not found" });
});
