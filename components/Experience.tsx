type Role = {
  role: string;
  org: string;
  period: string;
  note?: string;
  highlights?: string[];
};

const EXPERIENCE: Role[] = [
    {
      role: "Penetration Tester (Contract)",
      org: "Confidential client — fintech",
      period: "Mar 2027 – Apr 2027",
      note: "External web application and API assessment.",
      highlights: [
  "Identified and reported 7 vulnerabilities, 2 rated high severity",
  "Delivered a CVSS-scored report with remediation guidance",
   ],
   },
];

export default function Experience() {
  if (EXPERIENCE.length === 0) return null;

  return (
    <section id="experience" className="section">
      <h2 className="section-heading">
        <span className="prompt">$</span> cat Experience.log
      </h2>
      <p className="section-sub">Engagements and employment.</p>

      <ul className="record-list">
        {EXPERIENCE.map((e) => (
          <li className="record" key={`${e.org}-${e.period}`}>
            <h3 className="record-title">{e.role}</h3>
            <span className="record-meta">{e.period}</span>
            <p className="record-org">{e.org}</p>
            {e.note && <p className="record-note">{e.note}</p>}
            {e.highlights && (
              <ul className="record-highlights">
                {e.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}