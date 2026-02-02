"use client";

import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import Image from "next/image";
import imagem_1 from "@/public/infra/infra1.png";
import imagem_2 from "@/public/infra/infra2.png";
import imagem_3 from "@/public/infra/infra3.png";

type ModalServicesProps = {
  isOpen: boolean;
  toggleModal: () => void;
};

export function InfraModal({ isOpen, toggleModal }: ModalServicesProps) {
  return (
    <Dialog open={isOpen} onOpenChange={() => toggleModal()}>
      <DialogContent className="min-w-fit bg-surface-inverse px-2 lg:px-6">
        <DialogTitle className="tex-lg lg:text-2xl">
          Obras de infraestrutura
        </DialogTitle>

        <div className="grid grid-cols-2 gap-2 md:gap-6 max-h-[80vh] overflow-y-auto">
          <div className="grid gap-2 md:gap-6 justify-between">
            <div>
              <h2 className="text-lg md:text-2lx lg:text-3xl text-text-active">
                Execução de redes urbanas, drenagem e infraestrutura pesada
              </h2>
              <p className="text-sm lg:text-base text-text-secundary mt-2 md:mt-6">
                Executamos obras de infraestrutura e saneamento com foco em
                eficiência, segurança e durabilidade. Atuamos na implantação de
                redes de água, esgoto e drenagem pluvial, sempre em conformidade
                com as normas técnicas e ambientais. Nossos serviços abrangem
                desde os estudos iniciais até a execução e entrega final,
                garantindo sistemas funcionais e preparados para atender às
                demandas urbanas e industriais
              </p>
            </div>

            <Image
              src={imagem_3}
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
              Executamos obras de infraestrutura e saneamento com foco em
              eficiência, segurança e durabilidade. Atuamos na implantação de
              redes de água, esgoto e drenagem pluvial, sempre em conformidade
              com as normas técnicas e ambientais. Nossos serviços abrangem
              desde os estudos iniciais até a execução e entrega final,
              garantindo sistemas funcionais e preparados para atender às
              demandas urbanas e industriais
            </p>

            <Image
              src={imagem_2}
              alt="Imagem 2"
              className="brightness-80 rounded-lg"
            />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
