const EDUCATION = [
  {
    degree: "BSc Computer Science",
    institution: "University of The People",
    period: "2025 – 2028",
    note: "",
  },
];

export default function Education() {
  return (
    <section id="education" className="section">
      <h2 className="section-heading">
        <span className="prompt">$</span> cat Education.txt
      </h2>
      <p className="section-sub">Formal Academic Background.</p>

      <ul className="record-list">
        {EDUCATION.map((e) => (
          <li className="record" key={e.degree}>
            <h3 className="record-title">{e.degree}</h3>
            <span className="record-meta">{e.period}</span>
            <p className="record-org">{e.institution}</p>
            {e.note && <p className="record-note">{e.note}</p>}
          </li>
        ))}
      </ul>
    </section>
  );
}
