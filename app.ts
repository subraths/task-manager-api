import express from "express";
import router from "./routes/routes";
import connectDB from "./db/connect";
import { config } from "dotenv";
import notFound from "./middleware/not_found";
import errorHandler from "./middleware/error_handler";

config();

const app = express();
const PORT = 5000;
const connectionUrl = process.env.URI || "";

app.use(express.json());

app.use("/api/v1/tasks", router);

app.use(notFound);

app.use(errorHandler);

const connect = async () => {
  try {
    await connectDB(connectionUrl);
    app.listen(PORT, () => console.log(`server running on port ${PORT}`));
  } catch (err) {
    console.error(err);
  }
};
connect();
