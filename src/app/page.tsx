import Navbar from "@/components/Navbar";
import ScrollProgress from "@/components/ScrollProgress";
import LoadingScreen from "@/components/LoadingScreen";
import Footer from "@/components/Footer";
import Hero from "@/sections/Hero";
import Stats from "@/sections/Stats";
import About from "@/sections/About";
import Skills from "@/sections/Skills";
import Projects from "@/sections/Projects";
import Experience from "@/sections/Experience";
import Workflow from "@/sections/Workflow";
import LeetCodeTracker from "@/sections/LeetCodeTracker";
import Contact from "@/sections/Contact";


export default function Home() {
  return (
    <>
      <LoadingScreen />
      <ScrollProgress />
      <Navbar />
      <main id="main-content" tabIndex={-1}>
        <Hero />
        <Stats />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Workflow />
        <LeetCodeTracker />
        <Contact />
      </main>
      <Footer />
    </>
  );
}