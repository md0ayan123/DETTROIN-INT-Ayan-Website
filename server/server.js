import express from "express";
import cors from "cors";
import enquiryRouter from "./routes/enquiry.js";

const app = express();
const PORT = process.env.PORT || 4000;


app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "https://dettroin-int-ayan-website-iour.vercel.app/",
    ],
  })
);

app.use(express.json());

app.use((req, _res, next) => {
  console.log(`${new Date().toISOString()} ${req.method} ${req.path}`);
  next();
});

app.get("/api/health", (_req, res) => {
  res.json({ status: "ok", service: "excellence-school-server" });
});

app.use("/api/enquiry", enquiryRouter);

app.use((req, res) => {
  res.status(404).json({ error: `No route for ${req.method} ${req.path}` });
});

app.listen(PORT, () => {
  console.log(`Excellence School API running on http://localhost:${PORT}`);
});