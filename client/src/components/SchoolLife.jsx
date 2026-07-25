
import { useReveal } from "../hooks/useReveal.jsx";
import "./SchoolLife.css";

const ITEMS = [
  {
    emoji: "🏸",
    title: "Sports & Fitness",
    body: "Outdoor games, athletics, yoga sessions and inter-house competitions through the year.",
  },
  {
    emoji: "🎭",
    title: "Arts & Culture",
    body: "Dance, music, drama and art find room every week — not just at the annual function.",
  },
  {
    emoji: "🗣️",
    title: "Life Skills",
    body: "Public speaking, teamwork and leadership are practised, not just talked about in assembly.",
  },
  {
    emoji: "🤝",
    title: "Community Service",
    body: "Structured service activities that build empathy and awareness beyond the school gate.",
  },
];

const VALUES = [
  "Honesty",
  "Integrity",
  "Respect",
  "Discipline",
  "Compassion",
  "Responsibility",
];



function LifeCard({ item }) {
  const [ref, inView] = useReveal();

  return (
    <div
      ref={ref}
      className={`holistic-card reveal ${inView ? "in" : ""}`}
    >
      <span className="holistic-emoji">
        {item.emoji}
      </span>

      <h4>{item.title}</h4>

      <p>{item.body}</p>
    </div>
  );
}


function ValueChip({ value }) {
  const [ref, inView] = useReveal();

  return (
    <span
      ref={ref}
      className={`value-chip ${inView ? "in" : ""}`}
    >
      {value}
    </span>
  );
}



export default function SchoolLife() {
  const [headingRef, headingInView] = useReveal();

  return (
    <>


      <section className="holistic" id="life">
        <div className="wrap">

          <span className="eyebrow">
            Beyond the classroom
          </span>

          <h2
            ref={headingRef}
            className={`holistic-heading ${
              headingInView ? "in" : ""
            }`}
          >
            School life, not just school hours.
          </h2>

          <div className="holistic-grid">
            {ITEMS.map((item) => (
              <LifeCard
                key={item.title}
                item={item}
              />
            ))}
          </div>

        </div>
      </section>

     

      <section className="values">
        <div className="wrap">

          <span className="eyebrow">
            What we teach alongside the syllabus
          </span>

          <div className="values-row">
            {VALUES.map((value) => (
              <ValueChip
                key={value}
                value={value}
              />
            ))}
          </div>

        </div>
      </section>
    </>
  );
}

