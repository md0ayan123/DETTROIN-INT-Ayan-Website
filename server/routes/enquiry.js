import { Router } from "express";
import { readFile, writeFile } from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DATA_FILE = path.join(__dirname, "..", "data", "enquiries.json");

const router = Router();

async function readEnquiries() {
  try {
    const raw = await readFile(DATA_FILE, "utf-8");
    return JSON.parse(raw);
  } catch (err) {
    if (err.code === "ENOENT") return [];
    throw err;
  }
}

async function writeEnquiries(list) {
  await writeFile(DATA_FILE, JSON.stringify(list, null, 2), "utf-8");
}

function validate({ childName, grade, phone }) {
  const errors = [];
  if (!childName || !childName.trim()) errors.push("childName is required");
  if (!grade || !grade.trim()) errors.push("grade is required");
  if (!phone || !/^\d{10}$/.test(phone.replace(/\D/g, "").slice(-10))) {
    errors.push("phone must be a valid 10-digit mobile number");
  }
  return errors;
}


router.post("/", async (req, res) => {
  const errors = validate(req.body || {});
  if (errors.length) {
    return res.status(400).json({ error: "Invalid submission", details: errors });
  }

  const { childName, grade, phone } = req.body;
  const enquiry = {
    id: Date.now().toString(36),
    childName: childName.trim(),
    grade: grade.trim(),
    phone: phone.trim(),
    submittedAt: new Date().toISOString(),
  };

  const list = await readEnquiries();
  list.push(enquiry);
  await writeEnquiries(list);

  res.status(201).json(enquiry);
});


router.get("/", async (_req, res) => {
  const list = await readEnquiries();
  res.json(list);
});

export default router;
