import { memo } from "react";
import { useReveal } from "../hooks/useReveal.js";
import "./GrowthPath.css";

const STAGES = [
  {
    num: "STAGE 01",
    title: "Daycare",
    age: "6 months – 3 years",
    points: ["Safe, supervised play", "Rest & routine built in", "First social interactions"],
  },
  {
    num: "STAGE 02",
    title: "Pre-Primary",
    age: "3 – 5 years",
    points: ["Play-based learning", "Early language & numbers", "Storytelling & creative play"],
  },
  {
    num: "STAGE 03",
    title: "Primary School",
    age: "Class 1 – 5",
    points: ["Reading, writing, core maths", "First science concepts", "Habits & classroom routine"],
  },
  {
    num: "STAGE 04",
    title: "Middle School",
    age: "Class 6 – 8",
    points: [
      "Concept-based maths & science",
      "Discussion & presentation skills",
      "Groundwork for Class 9 onward",
    ],
  },
];

const StageCard = memo(function StageCard({ stage }) {
  const [ref, inView] = useReveal();
  return (
    <div className={`stage-card reveal ${inView ? "in" : ""}`} ref={ref}>
      <span className="stage-num">{stage.num}</span>
      <h4>{stage.title}</h4>
      <span className="stage-age">{stage.age}</span>
      <ul>
        {stage.points.map((p) => (
          <li key={p}>{p}</li>
        ))}
      </ul>
    </div>
  );
});

export default function GrowthPath() {
  const [headRef, headIn] = useReveal();
  const [lineRef, lineIn] = useReveal(0.2);

  return (
    <section className="path-section" id="path">
      <div className="wrap">
        <div className={`path-head reveal ${headIn ? "in" : ""}`} ref={headRef}>
          <span className="eyebrow">The Growth Path</span>
          <h2>
            One school, four real stages — <br />
            not one-size-fits-all.
          </h2>
          <p>
            Each stage has its own pace, its own focus, and its own way of
            teaching. Here's what your child actually moves through, year by year.
          </p>
        </div>

        <div className="path-wrap" ref={lineRef}>
          <svg
            className={`path-svg-line ${lineIn ? "in" : ""}`}
            viewBox="0 0 1000 40"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path d="M 60 20 L 940 20" />
          </svg>
          <div className="path-stages">
            {STAGES.map((stage) => (
              <StageCard key={stage.title} stage={stage} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
