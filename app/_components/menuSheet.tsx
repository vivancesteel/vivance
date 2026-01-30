"use client";

import { menuArray } from "@/app/constants/menu";
import { useEffect, useState } from "react";
import { HiMiniBars3 } from "react-icons/hi2";
import { LuChevronDown, LuX } from "react-icons/lu";

export function MenuSheet() {
  const [open, setOpen] = useState(false);

  function handleClick(sectionId?: string) {
    setOpen(false);

    if (!sectionId) return;

    const el = document.getElementById(sectionId);
    el?.scrollIntoView({ behavior: "smooth" });
  }

  useEffect(() => {
    if (open) {
      // salva o estado atual
      const originalStyle = window.getComputedStyle(document.body).overflow;
      document.body.style.overflow = "hidden";

      return () => {
        document.body.style.overflow = originalStyle;
      };
    }
  }, [open]);

  return (
    <>
      {/* Botão hamburguer */}
      <button
        aria-label="Abrir menu"
        onClick={() => setOpen(true)}
        className="flex flex-col gap-1.5 p-2"
      >
        <HiMiniBars3 color="var(--color-icon-inverse)" size={24} />
      </button>

      {/* Overlay */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-40 bg-black/40"
        />
      )}

      {/* Sheet */}
      <aside
        className={`fixed right-0 top-0 z-50 h-full w-72 bg-surface-secundary shadow-lg transition-transform duration-300
          ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex items-center justify-between p-4 border-b">
          <span className="font-semibold text-text-grey-light">Menu</span>
          <button onClick={() => setOpen(false)}>
            <LuX className="text-text-grey-light" size={22} />
          </button>
        </div>

        <nav className="flex flex-col p-4 gap-4">
          {menuArray.map((item, index) => (
            <button
              key={index}
              onClick={() =>
                item.isSelect ? null : handleClick(item.sectionId)
              }
              className="text-left text-text-inverse flex items-center gap-2 hover:text-text-active transition"
            >
              {item.txt}
              {item.isSelect && <LuChevronDown size={20} />}
            </button>
          ))}
        </nav>
      </aside>
    </>
  );
}
