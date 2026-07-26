import { useState } from "react";
import { useReveal } from "../hooks/useReveal";
import "./Admissions.css";

const API_URL =
  process.env.REACT_APP_API_URL || "http://localhost:4000";

console.log("API URL:", API_URL);

const GRADES = [
  "Daycare",
  "Pre-Primary",
  "Primary (Class 1-5)",
  "Middle School (Class 6-8)",
];

export default function Admissions() {
  const [textRef, textIn] = useReveal();
  const [formRef, formIn] = useReveal();

  const [form, setForm] = useState({
    childName: "",
    grade: GRADES[0],
    phone: "",
  });

  const [status, setStatus] = useState("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const isValidPhone = (phone) => {
    return /^\d{10}$/.test(phone.replace(/\D/g, ""));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setErrorMsg("");

    if (!isValidPhone(form.phone)) {
      setStatus("error");
      setErrorMsg("Please enter a valid 10-digit mobile number.");
      return;
    }

    setStatus("submitting");

    try {
      const response = await fetch(`${API_URL}/api/enquiry`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      let data = {};

      try {
        data = await response.json();
      } catch {
        data = {};
      }

      if (!response.ok) {
        throw new Error(
          data.error ||
            data.message ||
            "Unable to submit enquiry. Please try again."
        );
      }

      setStatus("success");

      setForm({
        childName: "",
        grade: GRADES[0],
        phone: "",
      });
    } catch (error) {
      console.error(error);
      setStatus("error");
      setErrorMsg(error.message || "Failed to connect to server.");
    }
  };

  return (
    <section id="admissions">
      <div className="cta-band">
        <div className="cta-inner">
          <div
            ref={textRef}
            className={`reveal ${textIn ? "in" : ""}`}
          >
            <span className="eyebrow" style={{ color: "#5b4620" }}>
              Admissions 2026–27
            </span>

            <h2 className="cta-heading">
              Seats are open —
              <br />
              let's find the right stage.
            </h2>

            <p className="cta-copy">
              Share a few details and our admissions desk will call you back
              within one working day. No pressure, just information.
            </p>

            <div className="hero-actions" style={{ marginTop: 26 }}>
              <a href="tel:+917055582117" className="btn btn-primary">
                Call +91 70555 82117
              </a>
            </div>
          </div>

          <form
            ref={formRef}
            className={`cta-form reveal ${formIn ? "in" : ""}`}
            onSubmit={handleSubmit}
          >
            <label htmlFor="childName">Child's Name</label>

            <input
              id="childName"
              name="childName"
              type="text"
              placeholder="e.g. Aarav Sharma"
              value={form.childName}
              onChange={handleChange}
              required
            />

            <label htmlFor="grade">Enquiring For</label>

            <select
              id="grade"
              name="grade"
              value={form.grade}
              onChange={handleChange}
            >
              {GRADES.map((grade) => (
                <option key={grade} value={grade}>
                  {grade}
                </option>
              ))}
            </select>

            <label htmlFor="phone">Phone Number</label>

            <input
              id="phone"
              name="phone"
              type="tel"
              placeholder="10-digit mobile number"
              value={form.phone}
              onChange={handleChange}
              required
            />

            <button
              type="submit"
              className="btn btn-primary submit-btn"
              disabled={status === "submitting"}
            >
              {status === "submitting"
                ? "Sending..."
                : "Request a Call Back"}
            </button>

            {status === "success" && (
              <p className="form-message success">
                Thanks! Our admissions team will contact you shortly.
              </p>
            )}

            {status === "error" && (
              <p className="form-message error">{errorMsg}</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}