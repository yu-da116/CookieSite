import { useRef } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Products from "./components/Products";
import Lessons from "./components/Lessons";
import Gallery from "./components/Gallery";
import Schedule from "./components/Schedule";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Toaster } from "@/components/ui/toaster";

function App() {
  const aboutRef = useRef<HTMLDivElement>(null);
  const productsRef = useRef<HTMLDivElement>(null);
  const lessonsRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);
  const scheduleRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-cream font-sans text-brown-default">
      <Navbar 
        onNavigate={{
          about: () => scrollToSection(aboutRef),
          products: () => scrollToSection(productsRef),
          lessons: () => scrollToSection(lessonsRef),
          schedule: () => scrollToSection(scheduleRef),
          contact: () => scrollToSection(contactRef),
        }} 
      />
      <Hero onCTAClick={() => scrollToSection(lessonsRef)} />
      <div ref={aboutRef}>
        <About />
      </div>
      <div ref={productsRef}>
        <Products />
      </div>
      <div ref={lessonsRef}>
        <Lessons onReserveClick={() => scrollToSection(scheduleRef)} />
      </div>
      <div ref={galleryRef}>
        <Gallery />
      </div>
      <div ref={scheduleRef}>
        <Schedule />
      </div>
      <div ref={contactRef}>
        <Contact />
      </div>
      <Footer 
        onNavigate={{
          about: () => scrollToSection(aboutRef),
          products: () => scrollToSection(productsRef),
          lessons: () => scrollToSection(lessonsRef),
          schedule: () => scrollToSection(scheduleRef),
        }} 
      />
      <Toaster />
    </div>
  );
}

export default App;
