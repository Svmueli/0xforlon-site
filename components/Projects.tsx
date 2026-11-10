const PROJECTS = [
  {
    name: "ReconFlow",
    description:
      "Automated recon pipeline that chains subdomain enumeration, live-host probing, and template-based scanning into a single run, then outputs a deduplicated, triaged findings report.",
    tags: ["Automation", "Recon", "Python"],
    status: "Planned",
    url: undefined,
  },
  {
    name: "Juice Shop Pentest Report",
    description:
      "A full mock engagement against OWASP Juice Shop: scoping document, methodology, CVSS-scored findings with proof-of-concept steps, and a client-style remediation report.",
    tags: ["Web Security", "Pentest", "Reporting"],
    status: "In progress",
    url: undefined,
  },
  {
    name: "PromptBreaker Lab",
    description:
      "A deliberately vulnerable LLM chatbot built to practice prompt injection, data exfiltration, and tool-abuse attacks, with a write-up of each attack and its mitigation.",
    tags: ["AI Security", "LLM", "Lab"],
    status: "Planned",
    url: undefined,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section">
      <h2 className="section-heading">
        <span className="prompt">$</span> ls ./projects
      </h2>
      <p className="section-sub">
        Things I&apos;ve built — client work, tools, and experiments.
      </p>

      <div className="project-grid">
        {PROJECTS.map((p) => {
          const Wrapper = p.url ? "a" : "div";
          const wrapperProps = p.url
            ? { href: p.url, target: "_blank", rel: "noopener" }
            : {};
          return (
            <Wrapper className="project-card" key={p.name} {...wrapperProps}>
              <div className="project-card-head">
                <h3>{p.name}</h3>
                <span className="project-status">{p.status}</span>
              </div>
              <p className="project-desc">{p.description}</p>
              <div className="project-tags">
                {p.tags.map((tag) => (
                  <span className="project-tag" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </Wrapper>
          );
        })}
      </div>
    </section>
  );
}
