"use client";

import { useState, useRef, useCallback } from "react";
import Image from "next/image";
import { MoveHorizontal } from "lucide-react";
import { cn } from "@/lib/utils";

export interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
  className?: string;
}

/**
 * Interactive before/after drag slider for treatment results.
 * Client Component — requires pointer position tracking.
 * Built without external slider deps to keep bundle size minimal.
 */
export default function BeforeAfterSlider({
  beforeImage,
  afterImage,
  beforeLabel = "Sebelum",
  afterLabel = "Sesudah",
  className,
}: BeforeAfterSliderProps) {
  const [position, setPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const updatePosition = useCallback((clientX: number) => {
    const container = containerRef.current;
    if (!container) return;
    const rect = container.getBoundingClientRect();
    const x = Math.min(Math.max(clientX - rect.left, 0), rect.width);
    setPosition((x / rect.width) * 100);
  }, []);

  const handlePointerDown = () => {
    isDragging.current = true;
  };
  const handlePointerUp = () => {
    isDragging.current = false;
  };
  const handlePointerMove = (e: React.PointerEvent) => {
    if (isDragging.current) updatePosition(e.clientX);
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative aspect-[4/5] w-full select-none overflow-hidden rounded-brand-lg shadow-card",
        className
      )}
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
      onPointerLeave={handlePointerUp}
      onPointerMove={handlePointerMove}
    >
      {/* After image (full background) */}
      <Image
        src={afterImage}
        alt={afterLabel}
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        className="object-cover"
      />
      <span className="absolute right-4 top-4 rounded-full bg-gold px-3 py-1 font-inter text-xs font-semibold text-white">
        {afterLabel}
      </span>

      {/* Before image (clipped) */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ width: `${position}%` }}
      >
        <Image
          src={beforeImage}
          alt={beforeLabel}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
        />
        <span className="absolute left-4 top-4 rounded-full bg-brand-black/80 px-3 py-1 font-inter text-xs font-semibold text-white">
          {beforeLabel}
        </span>
      </div>

      {/* Drag handle */}
      <div
        className="absolute inset-y-0 z-10 flex w-1 cursor-ew-resize items-center justify-center bg-white"
        style={{ left: `${position}%`, transform: "translateX(-50%)" }}
      >
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-luxury">
          <MoveHorizontal size={18} className="text-gold-700" />
        </div>
      </div>

      {/* Accessible range input fallback for keyboard users */}
      <input
        type="range"
        min={0}
        max={100}
        value={position}
        onChange={(e) => setPosition(Number(e.target.value))}
        aria-label="Geser untuk membandingkan sebelum dan sesudah"
        className="absolute inset-x-0 bottom-3 z-20 mx-auto w-3/4 opacity-0 focus:opacity-100"
      />
    </div>
  );
}
