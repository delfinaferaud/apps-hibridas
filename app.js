import express from "express";
import { connectDB } from "./db.js";
import swaggerFile from "./swagger.json" with {type: "json"}
import swaggerUI from "swagger-ui-express"

await connectDB();

const app = express();
const PORT = 3333;

app.use(express.json());
app.set("view engine", "ejs");

import apiRoutes from "./routes/api.js";
import pageRoutes from "./routes/pages.js";

app.listen(PORT, () => {
  console.log(`Servidor en http://localhost:${PORT}`);
});

app.use("/api", apiRoutes);
app.use("/", pageRoutes);
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerFile));