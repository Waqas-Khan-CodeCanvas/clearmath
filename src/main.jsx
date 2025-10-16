import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './components/Header';
import Footer from "./components/Footer";
import Hero from "./sections/Hero";
import Features from "./sections/Features";
import DemoSection from "./sections/DemoSection";
import CTA from "./sections/cta";

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <div className="bg-[#0b0c10] font-sans overflow-x-hidden">
      <Header />
      <Hero />
      <Features />
      <DemoSection />
      <CTA />
      <Footer />
    </div>
  </StrictMode>,
)





