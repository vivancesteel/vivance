import { ModalRef } from "../_types/modalRef";

type Menu = {
  txt: string;
  sectionId?: string;
  isSelect?: boolean;
};

type OutrosServicos = {
  txt: string;
  modalRef: ModalRef;
};

export const menuArray: Menu[] = [
  { txt: "Steel Frame", sectionId: "aboutSteelFrame" },
  { txt: "Benefícios", sectionId: "benefitsSteelFrame" },
  { txt: "Catálogo de projetos", sectionId: "projectCatalog" },
  { txt: "Processos", sectionId: "process" },
  { txt: "Contato", sectionId: "contact" },
  { txt: "Outros serviços", isSelect: true },
];

export const outrosServicosArray: OutrosServicos[] = [
  {
    txt: "Terraplanagem e Pavimentação",
    modalRef: "TERRAPLANAGEM",
  },
  {
    txt: "Infraestrutura e saneamento",
    modalRef: "INFRA",
  },
  {
    txt: "Obras civis",
    modalRef: "OBRA-CIVIS",
  },
];
