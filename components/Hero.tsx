import Terminal from "./Terminal";

export default function Hero() {
  return (
    <section className="hero" id="top">
      <Terminal />
      <div className="hero-copy">
        <h1>0xFORLON</h1>
        <p className="hero-tagline">
          Offensive security engineer &amp; CS student. I break things on
          purpose, then write down exactly how.
        </p>
        <div className="hero-actions">
          <a href="#writeups" className="btn btn-primary">
            Read the write-ups
          </a>
          <a href="#contact" className="btn btn-ghost">
            Hire me
          </a>
        </div>
      </div>
    </section>
  );
}
