import express from "express";
import cors from "cors";
import enquiryRouter from "./routes/enquiry.js";

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

// Simple request log — swap for morgan/winston in a real deployment
app.use((req, _res, next) => {
  console.log(`${new Date().toISOString()} ${req.method} ${req.path}`);
  next();
});

app.get("/api/health", (_req, res) => {
  res.json({ status: "ok", service: "excellence-school-server" });
});

app.use("/api/enquiry", enquiryRouter);

// Fallback 404
app.use((req, res) => {
  res.status(404).json({ error: `No route for ${req.method} ${req.path}` });
});

app.listen(PORT, () => {
  console.log(`Excellence School API running on http://localhost:${PORT}`);
});
