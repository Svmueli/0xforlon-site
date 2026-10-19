const SERVICES = [
  {
    name: "Penetration Testing",
    sub: "Web apps, internal/external network, APIs",
    deliverable:
      "Findings report with CVSS scoring, PoC steps, remediation guidance",
    engagement: "Fixed scope, 3–10 days",
  },
  {
    name: "Security Audit / Code Review",
    sub: "Source review, config review, dependency audit",
    deliverable: "Annotated findings, risk-ranked issue log, fix walkthrough",
    engagement: "Fixed scope, priced per repo/system",
  },
];

export default function Services() {
  return (
    <section id="services" className="section">
      <h2 className="section-heading">
        <span className="prompt">$</span> services --list
      </h2>
      <p className="section-sub">
        Engagements scoped like a real report: what you get, how it&apos;s
        delivered, what it costs.
      </p>

      <div className="report-table" role="table" aria-label="Services offered">
        <div className="report-row report-head" role="row">
          <span role="columnheader">Service</span>
          <span role="columnheader">Deliverable</span>
          <span role="columnheader">Engagement</span>
        </div>

        {SERVICES.map((s) => (
          <div className="report-row" role="row" key={s.name}>
            <span role="cell">
              <strong>{s.name}</strong>
              <br />
              <span className="row-sub">{s.sub}</span>
            </span>
            <span role="cell">{s.deliverable}</span>
            <span role="cell">{s.engagement}</span>
          </div>
        ))}
      </div>

      <p className="services-note">
        Every engagement starts with a short scoping call — no report goes
        out without a signed authorization.
      </p>
    </section>
  );
}
