import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Approach from "@/components/Approach";
import About from "@/components/About";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      {/* Top navigation header */}
      <Navbar />

      {/* Main page sections */}
      <main className="flex-1 w-full relative z-10 bg-white">
        <Hero />
        <Projects />
        <Approach />
        <About />
        <Contact />
      </main>
    </>
  );
}
