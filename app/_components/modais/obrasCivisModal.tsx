"use client";

import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import Image from "next/image";
import imagem_1 from "@/public/obras-civis/obras-civis1.png";
import imagem_2 from "@/public/obras-civis/obras-civis2.png";
import imagem_3 from "@/public/obras-civis/obras-civis3.png";

type ModalServicesProps = {
  isOpen: boolean;
  toggleModal: () => void;
};

export function ObrasCivisModal({ isOpen, toggleModal }: ModalServicesProps) {
  return (
    <Dialog open={isOpen} onOpenChange={() => toggleModal()}>
      <DialogContent className="min-w-fit bg-surface-inverse">
        <DialogTitle className="text-2xl">Obras civis</DialogTitle>

        <div className="grid grid-cols-2 gap-6  max-h-[80vh] overflow-y-auto">
          <div className="grid gap-6 justify-between">
            <div>
              <h2 className="text-xl lg:text-3xl text-text-active">
                Consultoria e execução de estruturas civis e metálicas para
                obras industriais e corporativas
              </h2>
              <p className="text-sm lg:text-base text-text-secundary mt-6">
                Execução de obras civis de médio e grande porte, incluindo
                fundações, estruturas de concreto armado, alvenarias e
                fechamento de fachadas. Atuamos também na execução e montagem de
                estruturas metálicas, oferecendo soluções robustas e adaptadas
                às necessidades de cada projeto. Nossa consultoria técnica
                acompanha todas as etapas da obra, desde a compatibilização de
                projetos até o controle de qualidade na execução, garantindo
                segurança estrutural, eficiência e conformidade com as normas
                técnicas vigentes
              </p>
            </div>

            <Image
              src={imagem_2}
              alt="Imagem 3"
              className="brightness-85 mt-auto rounded-lg"
            />
          </div>
          <div className="grid gap-6">
            <Image
              src={imagem_1}
              alt="Imagem 1"
              className="brightness-86 rounded-lg"
            />

            <p className="text-sm lg:text-base text-text-secundary">
              Realizamos fundações profundas e rasas com rigor técnico, atuando
              desde a locação e marcação topográfica até a concretagem,
              assegurando segurança, estabilidade e perfeito alinhamento
              estrutural. Na execução de estruturas metálicas, conduzimos todas
              as etapas — desde a preparação das bases até o içamento e a
              fixação dos elementos — garantindo precisão na montagem,
              acabamento de qualidade e total conformidade com os projetos
              executivos e as normas vigentes
            </p>

            <Image
              src={imagem_3}
              alt="Imagem 2"
              className="brightness-90 rounded-lg"
            />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
