import { memo } from "react";
import { useReveal } from "../hooks/useReveal.jsx";
import "./WhyUs.css";

const REASONS = [
  {
    icon: "📘",
    title: "Concept-first teaching",
    body: "Lessons are planned around understanding, with regular revision and doubt-clearing — not just covering the syllabus.",
  },
  {
    icon: "🧑‍🏫",
    title: "Faculty who stay close",
    body: "Teachers track individual progress and step in early, using discussion and real examples over rote drills.",
  },
  {
    icon: "🛡️",
    title: "A genuinely safe campus",
    body: "CCTV coverage, supervised entry and exit, and staff trained to know exactly where every child should be.",
  },
  {
    icon: "🚌",
    title: "Reliable transport",
    body: "Fixed routes, experienced drivers, and supervised travel — one less logistics worry for parents.",
  },
];

const ReasonCard = memo(function ReasonCard({ reason }) {
  const [ref, inView] = useReveal();
  return (
    <div className={`why-card reveal ${inView ? "in" : ""}`} ref={ref}>
      <div className="why-icon">{reason.icon}</div>
      <h4>{reason.title}</h4>
      <p>{reason.body}</p>
    </div>
  );
});

export default function WhyUs() {
  return (
    <section className="why" id="why">
      <div className="wrap">
        <span className="eyebrow">Why families choose us</span>
        <h2 className="why-heading">Four things we don't compromise on.</h2>
        <div className="why-grid">
          {REASONS.map((r) => (
            <ReasonCard key={r.title} reason={r} />
          ))}
        </div>
      </div>
    </section>
  );
}
