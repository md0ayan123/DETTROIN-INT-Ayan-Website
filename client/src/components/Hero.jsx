
import { useReveal } from "../hooks/useReveal.jsx";
import "./Hero.css";

const HERO_FEATURES = [
  {
    icon: "✓",
    title: "Small Classes",
    text: "More attention for every child",
  },
  {
    icon: "✓",
    title: "Strong Values",
    text: "Character alongside academics",
  },
  {
    icon: "✓",
    title: "Safe Campus",
    text: "A secure place to learn and grow",
  },
];

export default function Hero() {
  const [artRef, artIn] = useReveal();

  return (
    <section className="hero" id="top">

      {/* Decorative background */}
      <div className="hero-bg-shape hero-bg-shape-one" />
      <div className="hero-bg-shape hero-bg-shape-two" />
      <div className="hero-grid-pattern" />

      <div className="wrap hero-grid">

        {/* ==================================================
            LEFT CONTENT
        ================================================== */}

        <div className="hero-content">

          {/* Eyebrow */}
          <div className="hero-eyebrow">
            <span className="hero-eyebrow-dot" />
            <span>Ramghat Road, Aligarh</span>
            <span className="hero-eyebrow-divider">·</span>
            <span>Daycare – Class 8</span>
          </div>


          {/* Main Heading */}
          <h1 className="hero-title">
            Where curiosity
            <br />
            becomes{" "}
            <em>character.</em>
          </h1>


          {/* Description */}
          <p className="hero-sub">
            Excellence International School builds a real, staged path for
            every child — from first steps in daycare to confident
            middle-schoolers ready for what's next.
          </p>


          {/* Feature points */}
          <div className="hero-feature-list">

            {HERO_FEATURES.map((feature, index) => (
              <div
                className="hero-feature"
                key={feature.title}
                style={{
                  "--feature-delay": `${0.65 + index * 0.12}s`,
                }}
              >
                <span className="hero-feature-icon">
                  {feature.icon}
                </span>

                <div>
                  <strong>{feature.title}</strong>
                  <span>{feature.text}</span>
                </div>
              </div>
            ))}

          </div>


          {/* CTA Buttons */}
          <div className="hero-actions">

            <a
              href="#admissions"
              className="btn btn-primary hero-primary-btn"
            >
              <span>Book a Campus Visit</span>
              <span className="btn-arrow">→</span>
            </a>

            <a
              href="#path"
              className="btn btn-ghost hero-secondary-btn"
            >
              Explore Our Growth Path
              <span>↓</span>
            </a>

          </div>


          {/* Stats */}
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


          {/* Trust line */}
          <div className="hero-trust">

            <div className="hero-trust-avatars">
              <span>👩‍🏫</span>
              <span>👨‍🏫</span>
              <span>👩‍🎓</span>
            </div>

            <div className="hero-trust-text">
              <strong>Learning that stays personal.</strong>
              <span>
                Academics · Character · Confidence
              </span>
            </div>

          </div>

        </div>


        {/* ==================================================
            RIGHT ARTWORK
        ================================================== */}

        <div
          ref={artRef}
          className={`hero-art reveal ${artIn ? "in" : ""}`}
        >

          {/* Main SVG */}
          <div className="hero-visual">

            <svg
              viewBox="0 0 420 440"
              xmlns="http://www.w3.org/2000/svg"
              className="hero-svg"
            >

              {/* Main background */}
              <rect
                x="0"
                y="0"
                width="420"
                height="440"
                rx="28"
                fill="#E7ECE1"
              />


              {/* Decorative circles */}
              <circle
                cx="355"
                cy="52"
                r="24"
                fill="#F3D9A7"
                opacity="0.7"
              />

              <circle
                cx="70"
                cy="55"
                r="15"
                fill="#D0DDCF"
              />


              {/* Growth path */}
              <path
                className="growth-path"
                d="M40 340 C 100 260, 140 260, 175 220 S 260 140, 340 100"
                stroke="#4C7A5E"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
                strokeDasharray="6 10"
              />


              {/* Journey points */}
              <circle
                className="journey-point point-one"
                cx="40"
                cy="340"
                r="10"
                fill="#E8A33D"
              />

              <circle
                className="journey-point point-two"
                cx="175"
                cy="220"
                r="10"
                fill="#4C7A5E"
              />

              <circle
                className="journey-point point-three"
                cx="340"
                cy="100"
                r="10"
                fill="#1E2B3C"
              />


              {/* Small learning card */}
              <rect
                x="70"
                y="120"
                width="90"
                height="70"
                rx="10"
                fill="#fff"
                stroke="#DCE0D3"
              />

              <rect
                x="85"
                y="140"
                width="60"
                height="8"
                rx="4"
                fill="#E8A33D"
              />

              <rect
                x="85"
                y="156"
                width="40"
                height="8"
                rx="4"
                fill="#DCE0D3"
              />


              {/* Main learning card */}
              <rect
                x="230"
                y="260"
                width="120"
                height="90"
                rx="10"
                fill="#fff"
                stroke="#DCE0D3"
              />

              <circle
                cx="255"
                cy="285"
                r="12"
                fill="#4C7A5E"
              />

              <rect
                x="278"
                y="278"
                width="55"
                height="8"
                rx="4"
                fill="#DCE0D3"
              />

              <rect
                x="278"
                y="293"
                width="35"
                height="8"
                rx="4"
                fill="#DCE0D3"
              />

              <rect
                x="245"
                y="315"
                width="90"
                height="8"
                rx="4"
                fill="#EDEFE8"
              />


              {/* Tiny decorative book */}
              <rect
                x="110"
                y="275"
                width="65"
                height="45"
                rx="7"
                fill="#FFFFFF"
                stroke="#DCE0D3"
              />

              <rect
                x="120"
                y="288"
                width="44"
                height="6"
                rx="3"
                fill="#4C7A5E"
              />

              <rect
                x="120"
                y="301"
                width="30"
                height="6"
                rx="3"
                fill="#EDEFE8"
              />

            </svg>


            {/* Floating card - safe campus */}
            <div className="floating-card floating-card-safe">

              <div className="floating-icon floating-icon-green">
                🛡️
              </div>

              <div>
                <strong>Safe Campus</strong>
                <span>Carefully supervised</span>
              </div>

            </div>


            {/* Floating card - learning */}
            <div className="floating-card floating-card-learning">

              <div className="floating-icon floating-icon-yellow">
                ✦
              </div>

              <div>
                <strong>Holistic Learning</strong>
                <span>Mind · Body · Character</span>
              </div>

            </div>


            {/* Floating mini badge */}
            <div className="hero-mini-badge">
              <span className="mini-badge-icon">★</span>
              <span>Growing with purpose</span>
            </div>

          </div>


          {/* Admission Badge */}
          <div className="hero-badge">

            <span className="dot" />

            <div>
              <strong>Admissions 2026–27</strong>
              <span>Forms are now open</span>
            </div>

            <span className="hero-badge-arrow">
              →
            </span>

          </div>


          {/* Bottom visual caption */}
          <div className="hero-art-caption">

            <span className="caption-line" />

            <span>
              A thoughtful start for a confident future.
            </span>

          </div>

        </div>

      </div>


      {/* ==================================================
          BOTTOM SCROLL INDICATOR
      ================================================== */}

      <a
        href="#path"
        className="hero-scroll"
        aria-label="Scroll to explore"
      >
        <span className="hero-scroll-line" />
        <span>Scroll to explore</span>
      </a>

    </section>
  );
}

