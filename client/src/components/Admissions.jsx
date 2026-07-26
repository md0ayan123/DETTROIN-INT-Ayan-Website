import { useState } from "react";
import { useReveal } from "../hooks/useReveal.jsx";
import "./Admissions.css";

const API_URL = import.meta.env.VITE_API_URL || "https://dettroin-int-ayan-website-dfzo.onrender.com";
const GRADES = ["Daycare", "Pre-Primary", "Primary (Class 1-5)", "Middle School (Class 6-8)"];

export default function Admissions() {
  const [textRef, textIn] = useReveal();
  const [formRef, formIn] = useReveal();

  const [form, setForm] = useState({ childName: "", grade: GRADES[0], phone: "" });
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error
  const [errorMsg, setErrorMsg] = useState("");

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  }

  function isValidPhone(value) {
    const digitsOnly = value.replace(/\D/g, "");
    return digitsOnly.length === 10;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setErrorMsg("");

    if (!isValidPhone(form.phone)) {
      setStatus("error");
      setErrorMsg("Please enter a valid 10-digit mobile number.");
      return;
    }

    setStatus("submitting");

    try {
      const res = await fetch(`${API_URL}/api/enquiry`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.details?.join(", ") || data.error || "Something went wrong");
      }

      setStatus("success");
      setForm({ childName: "", grade: GRADES[0], phone: "" });
    } catch (err) {
      setStatus("error");
      setErrorMsg(err.message);
    }
  }

  return (
    <section id="admissions">
      <div className="cta-band">
        <div className="cta-inner">
          <div className={`reveal ${textIn ? "in" : ""}`} ref={textRef}>
            <span className="eyebrow" style={{ color: "#5b4620" }}>
              Admissions 2026–27
            </span>
            <h2 className="cta-heading">
              Seats are open — <br />
              let's find the right stage.
            </h2>
            <p className="cta-copy">
              Share a few details and our admissions desk will call you back within
              one working day. No pressure, just information.
            </p>
            <div className="hero-actions" style={{ marginTop: 26 }}>
              <a href="tel:+917055582117" className="btn btn-primary">
                Call +91 70555 82117
              </a>
            </div>
          </div>

          <form
            className={`cta-form reveal ${formIn ? "in" : ""}`}
            ref={formRef}
            onSubmit={handleSubmit}
          >
            <label htmlFor="childName">Child's name</label>
            <input
              id="childName"
              name="childName"
              type="text"
              placeholder="e.g. Aarav Sharma"
              value={form.childName}
              onChange={handleChange}
              required
            />

            <label htmlFor="grade">Enquiring for</label>
            <select id="grade" name="grade" value={form.grade} onChange={handleChange}>
              {GRADES.map((g) => (
                <option key={g}>{g}</option>
              ))}
            </select>

            <label htmlFor="phone">Phone number</label>
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
              {status === "submitting" ? "Sending…" : "Request a Call Back"}
            </button>

            {status === "success" && (
              <p className="form-message success">
                Thanks — our admissions desk will reach out shortly.
              </p>
            )}
            {status === "error" && (
              <p className="form-message error">
                {errorMsg || "Couldn't submit right now — please call us instead."}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
