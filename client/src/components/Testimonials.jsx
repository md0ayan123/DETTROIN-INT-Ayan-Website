import { useReveal } from "../hooks/useReveal.jsx";
import "./Testimonials.css";

const TESTIMONIALS = [
  {
    initials: "RS",
    name: "Rakesh Sharma",
    role: "Parent, Class 5",
    quote:
      "My son actually explains what he learned at dinner now, instead of just saying \u201cschool was fine.\u201d That change alone was worth the switch.",
  },
  {
    initials: "NV",
    name: "Neha Verma",
    role: "Parent, Class 3",
    quote:
      "The teachers know my daughter well enough to notice when something's off. That's rare, and it matters more than any brochure line.",
  },
  {
    initials: "AG",
    name: "Amit Gupta",
    role: "Parent, Class 7",
    quote:
      "We picked this school for the safety measures. We stayed for how much our son enjoys actually going every morning.",
  },
];

function TestimonialCard({ t }) {
  const [ref, inView] = useReveal();
  return (
    <div className={`testi-card reveal ${inView ? "in" : ""}`} ref={ref}>
      <p className="testi-quote">{t.quote}</p>
      <div className="testi-who">
        <div className="testi-avatar">{t.initials}</div>
        <div>
          <b>{t.name}</b>
          <span>{t.role}</span>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="testi">
      <div className="wrap">
        <span className="eyebrow">From our parents</span>
        <h2 className="testi-heading">What families tell us.</h2>
        <div className="testi-grid">
          {TESTIMONIALS.map((t) => (
            <TestimonialCard key={t.name} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
}
