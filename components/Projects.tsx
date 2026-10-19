const PROJECTS = [
  {
    name: "Bitewing EMR",
    description:
      "Full-stack dental clinic management system — patient records, scheduling, and billing for a clinic in Kitui, Kenya.",
    tags: ["Full-stack", "Healthcare"],
    status: "In development",
    url: undefined,
  },
  {
    name: "0xFORLON",
    description:
      "This site — a self-hosted write-up log and portfolio, built with Next.js and markdown-based content.",
    tags: ["Next.js", "TypeScript"],
    status: "Live",
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
