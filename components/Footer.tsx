const EASTER_EGG = `
$ file hellofriend.dat

$ strings hellofriend.dat
LEAVE ME HERE
`;

export default function Footer() {
  return (
    <footer className="site-footer">
      <p>
        © {new Date().getFullYear()} 0xFORLON{" "}
      </p>
      <pre className="dim">{EASTER_EGG.trim()}</pre>
    </footer>
  );
}