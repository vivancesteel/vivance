"use client";
/* eslint-disable @next/next/no-img-element */

import { ImgComparisonSlider } from "@img-comparison-slider/react";

export function SliderImage() {
  return (
    <ImgComparisonSlider className="rounded-2xl outline-none shadow-2xl">
      <img slot="first" src="casa2-completa.png" alt="Casa em steel frame" />
      <img
        slot="second"
        src="casa2-estrutura.png"
        alt="Estrutura de casa em steel frame"
      />
    </ImgComparisonSlider>
  );
}
