export default function Contact() {
  return (
    <section id="contact" className="section section-contact">
      <h2 className="section-heading">
        <span className="prompt">$</span> contact --init
      </h2>
      <div className="terminal terminal-contact">
        <div className="terminal-bar">
          <span className="dot dot-r"></span>
          <span className="dot dot-y"></span>
          <span className="dot dot-g"></span>
          <span className="terminal-title">contact.sh</span>
        </div>
        <div className="terminal-body contact-lines">
          <p>
            <span className="prompt">$</span> echo $EMAIL
          </p>
          <p className="output">
            <a href="mailto:hello@0xforlon.dev">hello@0xforlon.dev</a>
          </p>
          <p>
            <span className="prompt">$</span> echo $GITHUB
          </p>
          <p className="output">
            <a
              href="https://github.com/0xFORLON"
              target="_blank"
              rel="noopener"
            >
              github.com/0xforlon
            </a>
          </p>
          <p>
            <span className="prompt">$</span> echo $X
          </p>
          <p className="output">
            <a href="https://x.com/0xforlon" target="_blank" rel="noopener">
              x.com/0xforlon
            </a>
          </p>
          <p>
            <span className="prompt">$</span> <span className="cursor-inline">_</span>
          </p>
        </div>
      </div>
    </section>
  );
}
