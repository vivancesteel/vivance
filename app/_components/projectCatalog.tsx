import Image from "next/image";
import { StaticImageData } from "next/dist/shared/lib/get-img-props";
import residenciaSustentavel from "@/public/residencia-sustentavel.jpg";
import residenciaAltoPadrao from "@/public/residencia-alto-padrao.jpg";
import edificioComercial from "@/public/edificil-comercial.jpg";
import { SectionHeader } from "./ui/sectionHeader";

type Card = {
  label: string;
  title: string;
  details: string;
  imgSrc: StaticImageData;
  imgPositionX?: "left" | "right";
  imgPositionY?: "bottom" | "top";
};

export function ProjectCatalog() {
  const cards: Card[] = [
    {
      label: "Residencial",
      title: "Residência sustentavel",
      details: "Área: 280m² - Prazo: 4 meses",
      imgSrc: residenciaSustentavel,
      imgPositionX: "right",
    },
    {
      label: "Residencial",
      title: "Residência alto padrão",
      details: "Área: 320m² - Prazo: 5 meses",
      imgSrc: residenciaAltoPadrao,
    },
    {
      label: "Comercial",
      title: "Edifício comercial",
      details: "Área: 450m² - Prazo: 6 meses",
      imgSrc: edificioComercial,
      imgPositionY: "bottom",
    },
  ];

  return (
    <section
      id="projectCatalog"
      className="py-16 sm:py-32 px-4 sm:px-6 bg-surface-inverse flex flex-col justify-center items-center"
    >
      <SectionHeader
        title="Catálogo de projetos"
        description="Conheça nosso catálogo de projetos que transformamos em realidade com
          tecnologia Steel Frame"
      />
      <div className="container mx-auto mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {cards.map((card, index) => (
          <div
            key={index}
            className="group relative rounded-2xl shadow-xl hover:shadow-2xl transition-all"
          >
            <div className="aspect-4/5 overflow-hidden w-full h-full rounded-2xl">
              <Image
                data-position-x={card?.imgPositionX}
                data-position-y={card?.imgPositionY}
                src={card.imgSrc}
                alt={card.title}
                className="w-full h-full object-cover data-[position-x='right']:object-right data-[position-y='bottom']:object-bottom group-hover:scale-110 transition-transform duration-500"
              />
            </div>

            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-4 sm:p-6 rounded-2xl">
              <p className="text-text-inverse-secundary text-md">
                {card.label}
              </p>
              <h3 className="text-lg text-text-inverse mb-3 mt-2">
                {card.title}
              </h3>
              {/* <p className="text-text-inverse-secundary text-md">
                {card.details}
              </p> */}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
