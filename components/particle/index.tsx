"use client";

import { useCallback } from "react";
import { NextParticles, NextParticlesProvider } from "@tsparticles/nextjs";
import type { Engine, ISourceOptions } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";

const options: ISourceOptions = {
  background: {
    color: "#fff",
  },
  fpsLimit: 60,
  particles: {
    number: {
      value: 70,
      density: {
        enable: true,
      },
    },
    color: {
      value: "#1a3a6e1e", // این رنگ جایگزین رنگ SVG میشه
    },
    shape: {
      type: "image",
      options: {
        image: [
          {
            src: "/images/SVG/1.svg", // مسیر فایل SVG در پوشه public
            width: 32,
            height: 32,
            replaceColor: true, // ← SVG Replace فعال میشه
          },
          {
            src: "/images/SVG/2.svg", // مسیر فایل SVG در پوشه public
            width: 32,
            height: 32,
            replaceColor: true, // ← SVG Replace فعال میشه
          },
        ],
      },
    },
    opacity: {
      value: { min: 0.1, max: 0.3 },
      animation: {
        enable: true,
        speed: 0.3,
        sync: true,
      },
    },
    size: {
      value: { min: 8, max: 20 },
    },
    move: {
      enable: true,
      speed: 5,
      direction: "none",
      random: true,
      outModes: { default: "out" },
    },
    links: {
      enable: true,
      distance: 130,
      color: "#6ee7f7",
      opacity: 0.15,
      width: 1,
    },
  },
  interactivity: {
    events: {
      onHover: {
        enable: false,
        mode: "repulse",
      },
      onClick: {
        enable: false,
        mode: "push",
      },
    },
    modes: {
      repulse: { distance: 80 },
      push: { quantity: 3 },
    },
  },
  detectRetina: true,
};

export function ParticlesBackground() {
  const init = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <NextParticlesProvider init={init}>
      <NextParticles
        id="tsparticles"
        options={options}
        style={{
          position: "fixed",
          inset: 0,
          zIndex: -1,
        }}
      />
    </NextParticlesProvider>
  );
}
