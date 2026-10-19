import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WriteupsList from "@/components/WriteupsList";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { getAllWriteups } from "@/lib/writeups";

export default function HomePage() {
  const writeups = getAllWriteups();

  return (
    <>
      <Header />
      <main>
        <Hero />
        <WriteupsList writeups={writeups} />
        <Projects />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
