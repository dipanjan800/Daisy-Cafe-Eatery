/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import PopularDrinks from "./components/PopularDrinks";
import Features from "./components/Features";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import CtaSection from "./components/CtaSection";
import Footer from "./components/Footer";
import ScrollToTopButton from "./components/ScrollToTopButton";
import ScrollCanvas from "./components/ScrollCanvas";

import JoinOurTeam from "./components/JoinOurTeam";

export default function App() {
  return (
    <div className="min-h-screen bg-transparent text-white font-sans selection:bg-[#d4a373] selection:text-[#110d0a]">
      <ScrollCanvas />

      <Navbar />

      <main>
        <Hero />
        <PopularDrinks />
        <Features />
        <About />
        <Testimonials />
        <JoinOurTeam />
        <CtaSection />
      </main>

      <Footer />
      <ScrollToTopButton />
    </div>
  );
}