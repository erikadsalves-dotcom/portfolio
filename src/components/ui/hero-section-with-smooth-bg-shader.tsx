"use client";

import { MeshGradient } from "@paper-design/shaders-react";
import { useEffect, useState } from "react";

interface HeroSectionProps {
  children?: React.ReactNode;
  colors?: string[];
  distortion?: number;
  swirl?: number;
  speed?: number;
  offsetX?: number;
  className?: string;
  veilOpacity?: string;
}

export function HeroShader({
  children,
  colors = ["#d4c5a9", "#f0ede8", "#c8b89a", "#e8dfd0", "#b8a88a", "#e0ddd8"],
  distortion = 0.6,
  swirl = 0.4,
  speed = 0.3,
  offsetX = 0.08,
  className = "",
  veilOpacity = "bg-white/30",
}: HeroSectionProps) {
  const [dimensions, setDimensions] = useState({ width: 1920, height: 1080 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const update = () =>
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return (
    <section
      className={`relative w-full min-h-screen flex items-center justify-center ${className}`}
      style={{ backgroundColor: "#f7f4ed" }}
    >
      {/* Shader canvas */}
      <div className="hero-shader-canvas absolute inset-0 w-full h-full overflow-hidden [&_canvas]:!w-full [&_canvas]:!h-full [&_canvas]:!block">
        {mounted && (
          <>
            <MeshGradient
              width={dimensions.width}
              height={dimensions.height}
              colors={colors}
              distortion={distortion}
              swirl={swirl}
              grainMixer={0}
              grainOverlay={0}
              speed={speed}
              offsetX={offsetX}
            />
            <div
              className={`absolute inset-0 pointer-events-none ${veilOpacity}`}
            />
            {/*
              Bottom fade — makes the shader fully invisible by 82%.
              The last ~18% of the hero is pure #f7f4ed background,
              identical to the page — so no edge is possible.
            */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-x-0 bottom-0 h-full"
              style={{
                background:
                  "linear-gradient(to bottom, rgba(247,244,237,0) 0%, rgba(247,244,237,0.06) 30%, rgba(247,244,237,0.22) 48%, rgba(247,244,237,0.50) 62%, rgba(247,244,237,0.82) 74%, #f7f4ed 82%)",
              }}
            />
          </>
        )}
      </div>

      <div className="relative z-10 w-full">{children}</div>
    </section>
  );
}
