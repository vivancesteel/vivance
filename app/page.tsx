import { AboutStellFrame } from "./_components/aboutSteelFrame";
import { BenefitsSteelFrame } from "./_components/benefitsSteelFrame";
import { Contact } from "./_components/contact";
import { Footer } from "./_components/footer";
import { Hero } from "./_components/hero";
import { Process } from "./_components/process";
import { ProjectCatalog } from "./_components/projectCatalog";

export default function App() {
  return (
    <main>
      <Hero />
      <AboutStellFrame />
      <BenefitsSteelFrame />
      <ProjectCatalog />
      <Process />
      <Contact />
      <Footer />
    </main>
  );
}
