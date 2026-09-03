import { useState } from "react";
import { Hero } from "@/sections/Hero";
import { NavBar } from "@/layout/NavBar";
import { About } from "@/sections/About";
import { Contacts } from "@/sections/Contacts";
import { Experience } from "@/sections/Experience";
import { Projects } from "@/sections/Projects";
import { Testimonials } from "@/sections/Testimonials";
import { Footer } from "@/layout/Footer";

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <NavBar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Testimonials />
        <Contacts />
      </main>
      <Footer />
    </div>
  );
}

export default App;
