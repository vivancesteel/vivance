type Menu = {
  txt: string;
  sectionId?: string;
  isSelect?: boolean;
};

export const menuArray: Menu[] = [
  { txt: "Steel Frame", sectionId: "aboutSteelFrame" },
  { txt: "Benefícios", sectionId: "benefitsSteelFrame" },
  { txt: "Catálogo de projetos", sectionId: "projectCatalog" },
  { txt: "Processos", sectionId: "process" },
  { txt: "Contato", sectionId: "contact" },
  // { txt: "Outros serviços", isSelect: true },
];
