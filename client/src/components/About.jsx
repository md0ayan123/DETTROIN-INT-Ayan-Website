import { useReveal } from "../hooks/useReveal.jsx";
import "./About.css";

const MISSION = [
  "Teach for understanding, not recall",
  "Give every stage age-appropriate pacing",
  "Build discipline alongside curiosity",
  "Keep the campus safe, supervised, calm",
  "Prepare students for what comes after Class 8",
];

export default function About() {
  const [introRef, introIn] = useReveal();
  const [cardRef, cardIn] = useReveal();

  return (
    <section className="vm" id="about">
      <div className="wrap">
        <span className="eyebrow">About the school</span>
        <div className="vm-grid">
          <div className={`reveal ${introIn ? "in" : ""}`} ref={introRef}>
            <h2>A campus built around attention, not just enrolment.</h2>
            <p className="vm-copy">
              We keep class sizes small on purpose. Every stage — daycare through
              middle school — is designed so a teacher actually knows each child's
              pace, not just their name. Academics stay concept-first: we'd rather a
              student understand why, than memorise what.
            </p>
          </div>
          <div className={`vm-card reveal ${cardIn ? "in" : ""}`} ref={cardRef}>
            <span className="eyebrow" style={{ color: "var(--marigold-deep)" }}>
              Our Mission
            </span>
            <ul className="vm-list">
              {MISSION.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
