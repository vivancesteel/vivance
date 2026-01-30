import { IconType } from "react-icons";
import {
  LuClock,
  LuDollarSign,
  LuLeaf,
  LuRuler,
  LuShield,
  LuZap,
} from "react-icons/lu";
import { SectionHeader } from "./ui/sectionHeader";

type Card = {
  title: string;
  description: string;
  icon: IconType;
};

export function BenefitsSteelFrame() {
  const cards: Card[] = [
    {
      title: "Rapidez na Construção",
      description:
        " Obras até 60% mais rápidas comparadas à alvenaria tradicional. Estrutura montada em dias, não meses.",
      icon: LuClock,
    },
    {
      title: "Sustentabilidade",
      description:
        "Menos desperdício de materiais, estrutura 100% reciclável e menor consumo de água durante a obra.",
      icon: LuLeaf,
    },
    {
      title: "Durabilidade",
      description:
        "Estrutura em aço galvanizado resistente à corrosão, cupins e intempéries. Vida útil superior a 300 anos.",
      icon: LuShield,
    },
    {
      title: "Eficiência Energética",
      description:
        "Melhor isolamento térmico e acústico, reduzindo custos com climatização em até 40%.",
      icon: LuZap,
    },
    {
      title: "Precisão Milimétrica",
      description:
        "Projetos executados com precisão industrial, garantindo qualidade e acabamento perfeito.",
      icon: LuRuler,
    },
    {
      title: "Custo-Benefício",
      description:
        "Menor desperdício, obra mais rápida e economia de mão de obra resultam em melhor custo final.",
      icon: LuDollarSign,
    },
  ];

  return (
    <section
      id="benefitsSteelFrame"
      className="py-16 sm:py-32 px-4 sm:px-6 bg-surface-inverse-secundary flex flex-col justify-center items-center"
    >
      <SectionHeader
        title="Por que escolher Steel Frame?"
        description="Descubra as vantagens que fazem do Steel Frame a escolha preferida
          para construções modernas"
      />
      <div className="container mx-auto mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {cards.map((card, index) => (
          <div
            key={index}
            className="p-6 bg-surface-inverse rounded-2xl shadow-lg hover:shadow-2xl transition-all"
          >
            <div className="p-4 w-fit rounded-[10px] bg-surface-enabled-primary text-icon-active">
              {/* <LuLeaf /> */}
              <card.icon size={32} />
            </div>
            <h3 className="text-lg text-text-default mb-4 mt-6">
              {card.title}
            </h3>
            <p className="text-text-secundary text-md sm:text-base">
              {card.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
