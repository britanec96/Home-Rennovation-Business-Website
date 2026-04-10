import Hero from "../components/sections/Hero";
import Services from "../components/sections/Services";
import BeforeAfter from "../components/sections/BeforeAfter";
import Process from "../components/sections/Process";
import Projects from "../components/sections/Projects";
import Testimonials from "../components/sections/Testimonials";
import Guarantees from "../components/sections/Guarantees";
import CtaBand from "../components/sections/CtaBand";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <BeforeAfter />
      <Process />
      <Projects />
      <Testimonials />
      <Guarantees />
      <CtaBand />
    </>
  );
}
