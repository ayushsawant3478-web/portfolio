/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import HeroSection from "./components/HeroSection";
import MarqueeSection from "./components/MarqueeSection";
import AboutSection from "./components/AboutSection";
import CertificationsSection from "./components/CertificationsSection";
import ServicesSection from "./components/ServicesSection";
import ProjectsSection from "./components/ProjectsSection";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="main-wrapper w-full overflow-x-clip bg-[#0C0C0C]">
      <HeroSection />
      <MarqueeSection />
      <AboutSection />
      <CertificationsSection />
      <ServicesSection />
      <ProjectsSection />
      <Footer />
    </div>
  );
}
