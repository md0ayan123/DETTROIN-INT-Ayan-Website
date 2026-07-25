import { useReveal } from "../hooks/useReveal.jsx";
import "./Hero.css";

export default function Hero() {
  const [artRef, artIn] = useReveal();

  return (
    <section className="hero" id="top">
      <div className="wrap hero-grid">
        <div>
          <span className="eyebrow">Ramghat Road, Aligarh · Daycare–Class 8</span>
          <h1>
            Where curiosity <br />
            becomes <em>character.</em>
          </h1>
          <p className="hero-sub">
            Excellence International School builds a real, staged path for every
            child — from first steps in daycare to confident middle-schoolers ready
            for what's next. Small classes, close attention, strong values.
          </p>
          <div className="hero-actions">
            <a href="#admissions" className="btn btn-primary">
              Book a Campus Visit
            </a>
            <a href="#path" className="btn btn-ghost">
              See the Growth Path ↓
            </a>
          </div>
          <div className="hero-stats">
            <div className="hero-stat">
              <b>5</b>
              <span>Stages, one journey</span>
            </div>
            <div className="hero-stat">
              <b>2026–27</b>
              <span>Admissions open now</span>
            </div>
            <div className="hero-stat">
              <b>1:15</b>
              <span>Approx. teacher ratio</span>
            </div>
          </div>
        </div>

        <div className={`hero-art reveal ${artIn ? "in" : ""}`} ref={artRef}>
          <svg viewBox="0 0 420 440" xmlns="http://www.w3.org/2000/svg">
            <rect x="0" y="0" width="420" height="440" rx="28" fill="#E7ECE1" />
            <path
              d="M40 340 C 100 260, 140 260, 175 220 S 260 140, 340 100"
              stroke="#4C7A5E"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
              strokeDasharray="6 10"
            />
            <circle cx="40" cy="340" r="10" fill="#E8A33D" />
            <circle cx="175" cy="220" r="10" fill="#4C7A5E" />
            <circle cx="340" cy="100" r="10" fill="#1E2B3C" />
            <rect x="70" y="120" width="90" height="70" rx="10" fill="#fff" stroke="#DCE0D3" />
            <rect x="85" y="140" width="60" height="8" rx="4" fill="#E8A33D" />
            <rect x="85" y="156" width="40" height="8" rx="4" fill="#DCE0D3" />
            <rect x="230" y="260" width="120" height="90" rx="10" fill="#fff" stroke="#DCE0D3" />
            <circle cx="255" cy="285" r="12" fill="#4C7A5E" />
            <rect x="278" y="278" width="55" height="8" rx="4" fill="#DCE0D3" />
            <rect x="278" y="293" width="35" height="8" rx="4" fill="#DCE0D3" />
            <rect x="245" y="315" width="90" height="8" rx="4" fill="#EDEFE8" />
          </svg>
          <div className="hero-badge">
            <span className="dot" />
            <span>Admission Enquiry — Class 2026–27 forms now open</span>
          </div>
        </div>
      </div>
    </section>
  );
}
