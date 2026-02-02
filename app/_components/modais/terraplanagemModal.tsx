"use client";

import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import Image from "next/image";
import imagem_1 from "@/public/terraplanagem/terraplanagem1.png";
import imagem_2 from "@/public/terraplanagem/terraplanagem2.png";
import imagem_3 from "@/public/terraplanagem/terraplanagem3.png";

type ModalServicesProps = {
  isOpen: boolean;
  toggleModal: () => void;
};

export function TerraplanagemModal({
  isOpen,
  toggleModal,
}: ModalServicesProps) {
  return (
    <Dialog open={isOpen} onOpenChange={() => toggleModal()}>
      <DialogContent className="min-w-fit bg-surface-inverse px-2 lg:px-6">
        <DialogTitle className="tex-lg lg:text-2xl">
          Terraplanagem e Pavimentação
        </DialogTitle>

        <div className="grid grid-cols-2 gap-2 md:gap-6 max-h-[80vh] overflow-y-auto">
          <div className="grid gap-2 md:gap-6 justify-between">
            <div>
              <h2 className="text-lg md:text-2lx lg:text-3xl text-text-active">
                Base sólida para o desenvolvimento de obras urbanas e
                industriais
              </h2>
              <p className="text-sm lg:text-base text-text-secundary mt-2 md:mt-6">
                Realizamos serviços de terraplanagem e pavimentação com alto
                rigor técnico e monitoramento topográfico contínuo. Asseguramos
                o preparo adequado do solo, nivelamento preciso, compactação
                eficaz e aplicação de camadas estruturais com qualidade,
                garantindo durabilidade e excelente desempenho para vias
                urbanas, pátios industriais e áreas logísticas. Cada etapa é
                cuidadosamente acompanhada para assegurar segurança, resistência
                e total conformidade com as especificações do projeto
              </p>
            </div>

            <Image
              src={imagem_2}
              alt="Imagem 3"
              className="brightness-70 mt-auto rounded-lg"
            />
          </div>
          <div className="grid gap-2 md:gap-6">
            <Image
              src={imagem_1}
              alt="Imagem 1"
              className="brightness-74 rounded-lg"
            />

            <p className="text-sm lg:text-base text-text-secundary">
              Executamos estruturas de contenção em muros de gabião, garantindo
              estabilidade para margens, taludes, áreas de risco e a construção
              de diques, sempre com soluções duráveis e sustentáveis. Na
              pavimentação, conduzimos todas as etapas — desde a preparação do
              subleito, terraplenagem e compactação até a aplicação das camadas
              finais — assegurando qualidade, resistência e longa vida útil para
              vias e pátios industriais. Trabalhamos com diferentes tipos de
              pavimento, incluindo CBUQ e pavimento intertravado
            </p>

            <Image
              src={imagem_3}
              alt="Imagem 2"
              className="brightness-80 rounded-lg"
            />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
