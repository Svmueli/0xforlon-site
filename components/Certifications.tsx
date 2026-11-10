const CERTIFICATIONS = [
  {
    name: "Footprinting & Information Gathering — Web Edition",
    issuer: "HTB Academy",
    status: "Completed",
    note: "DNS zone transfers (AXFR), virtual host enumeration, and large-scale scripted crawling.",
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="section">
      <h2 className="section-heading">
        <span className="prompt">$</span> ls ./trainings
      </h2>
      <p className="section-sub">
        Trainings, courses, and certifications — completed and in progress.
      </p>

      <ul className="record-list">
        {CERTIFICATIONS.map((c) => (
          <li className="record" key={c.name}>
            <h3 className="record-title">{c.name}</h3>
            <span className="record-meta">{c.status}</span>
            <p className="record-org">{c.issuer}</p>
            {c.note && <p className="record-note">{c.note}</p>}
          </li>
        ))}
      </ul>
    </section>
  );
}
