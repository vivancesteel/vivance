import { SliderImage } from "./sliderImage";

export function AboutStellFrame() {
  return (
    <section
      id="aboutSteelFrame"
      className="py-16 sm:py-32 px-4 sm:px-6 bg-surface-inverse flex flex-col-reverse md:flex-row items-center justify-center gap-12"
    >
      <article className="grid gap-6 max-w-120 sm:max-w-120 md:max-w-90 xl:max-w-160">
        <h1 className="text-3xl lg:text-4xl">O que é Steel Frame?</h1>
        <p className="text-text-secundary text-md sm:text-base">
          Steel Frame é um sistema construtivo industrializado que utiliza
          perfis de aço galvanizado como estrutura. É a evolução da construção
          civil, combinando tecnologia, sustentabilidade e eficiência.
        </p>
        <p className="text-text-secundary text-md sm:text-base">
          Este método revolucionário já é amplamente utilizado nos Estados
          Unidos, Canadá e Europa, e agora está transformando o mercado
          brasileiro com obras até 60% mais rápidas que a alvenaria tradicional.
        </p>

        <div className="grid grid-cols-2 gap-6">
          <div>
            <h2 className="text-text-active text-3xl mb-2">60%</h2>
            <p className="text-text-secundary text-sm">Mais rápido</p>
          </div>
          <div>
            <h2 className="text-text-active text-3xl mb-2">40%</h2>
            <p className="text-text-secundary text-sm">Menos resíduos</p>
          </div>
          <div>
            <h2 className="text-text-active text-3xl mb-2">30%</h2>
            <p className="text-text-secundary text-sm">Mais leve</p>
          </div>
          <div>
            <h2 className="text-text-active text-3xl mb-2">100%</h2>
            <p className="text-text-secundary text-sm">Sustentavel</p>
          </div>
        </div>
      </article>

      <div className="relative max-w-87 sm:max-w-120 lg:max-w-134 rounded-2xl">
        <SliderImage />

        <div className="absolute -bottom-6 -left-4 sm:-bottom-6 sm:-left-6 w-fit bg-surface-primary shadow-lg p-4 sm:p-6 rounded-[.875rem]">
          <h2 className="text-md sm:text-base text-text-inverse max-w-52.75">
            Tecnologia de ponta para construções residenciais e comerciais
          </h2>
        </div>
      </div>
    </section>
  );
}
