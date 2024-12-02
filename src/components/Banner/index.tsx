'use client';
import React, { useEffect, useRef } from 'react';
export default function Banner() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const container = containerRef.current;
      if (!container) return;

      const { clientX } = e;
      const { innerWidth } = window;

      const xOffset = (clientX / innerWidth) * 2 - 1;

      const layers = container.querySelectorAll('[data-depth]');
      layers.forEach((layer) => {
        const depth = parseFloat(layer.getAttribute('data-depth') || '0');
        const translateX = xOffset * (-depth * 250);

        (
          layer as HTMLElement
        ).style.transform = `translate3d(${translateX}px, 0px, 0)`;
      });
    };
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section ref={containerRef} className="relative overflow-hidden h-[400px]">
      <div className="container relative top-[10px]">
        <div
          data-depth="0"
          className="bg-[url('/assets/image/banner/main_visual_bg.png')] -my-[10px] -mx-[400px] w-[2000px] h-[420px] relative left-0 top-0 transition-transform duration-1000 1.2s ease-out"
        ></div>
        <div
          data-depth="0.02"
          className="bg-[url('/assets/image/banner/main_visual.png')] -my-[10px] -mx-[400px] w-[2000px] h-[420px] absolute top-0 left-0 transition-transform duration-1000 1.2s ease-out"
        ></div>
        <div
          data-depth="0.3"
          className="bg-[url('/assets/image/banner/main_visual_img01.png')] mt-[340px] -ml-[400px] mb-0 w-[2000px] h-[60px] absolute top-0 left-0 transition-transform duration-1000 1.2s ease-out"
        ></div>
        <div
          data-depth="0.4"
          className="bg-[url('/assets/image/banner/main_visual_img02.png')] w-[332px] h-[400px] ml-[550px] absolute top-0 left-0 transition-transform duration-1000 1.2s ease-out"
        ></div>
        <div
          data-depth="1"
          className="bg-[url('/assets/image/banner/main_visual_img03.png')] w-[430px] h-[400px] -mx-[300px] my-0 absolute top-0 left-0 transition-transform duration-1000 1.2s ease-out"
        ></div>
        <div
          data-depth="1.5"
          className="bg-[url('/assets/image/banner/main_visual_img05.png')] w-[570px] h-[400px] mx-[1000px] my-0 absolute top-0 left-0 transition-transform duration-1000 1.2s ease-out"
        ></div>
      </div>
    </section>
  );
}
