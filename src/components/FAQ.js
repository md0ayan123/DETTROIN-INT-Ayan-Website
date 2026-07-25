import { useState } from "react";
import "./FAQ.css";

const FAQS = [
  {
    q: "Where exactly is the school located?",
    a: "Ramghat Road, Aligarh, Uttar Pradesh 202001 — see the map link in the footer for directions.",
  },
  {
    q: "Which stages are open for admission right now?",
    a: "Daycare through Class 8 for the 2026–27 session, subject to seat availability at each stage.",
  },
  {
    q: "Is bus transport available from my area?",
    a: "We run fixed routes across most of Aligarh. Share your locality on the enquiry form and we'll confirm the nearest stop.",
  },
  {
    q: "What does a typical day include besides classes?",
    a: "Sports, arts, life-skills sessions and community activities run through the week — not only during annual events.",
  },
  {
    q: "How do I schedule a campus visit?",
    a: "Call +91 70555 82117 or submit the admissions form above, and we'll set up a time that works for you.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="faq" id="faq">
      <div className="wrap">
        <span className="eyebrow">Common questions</span>
        <h2 className="faq-heading">Frequently asked questions.</h2>
        <div className="faq-list">
          {FAQS.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div className={`faq-item ${isOpen ? "open" : ""}`} key={item.q}>
                <button
                  className="faq-q"
                  onClick={() => setOpenIndex(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                >
                  <span>{item.q}</span>
                  <span className="plus" />
                </button>
                <div className="faq-a">
                  <p>{item.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
