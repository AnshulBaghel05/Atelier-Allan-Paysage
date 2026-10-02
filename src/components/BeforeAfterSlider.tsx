import React, { useState, useRef, useCallback } from 'react';
import { ChevronsLeftRight } from 'lucide-react';

interface BeforeAfterSliderProps {
  beforeImage?: string;
  afterImage: string;
  title: string;
  heightClass?: string;
}

export const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({
  beforeImage,
  afterImage,
  title,
  heightClass = 'h-72 sm:h-96 md:h-[420px]',
}) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length > 0) {
      handleMove(e.touches[0].clientX);
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      handleMove(e.clientX);
    }
  };

  // If no before image, just show clean single image with badge
  if (!beforeImage) {
    return (
      <div className={`relative w-full ${heightClass} overflow-hidden rounded-xl bg-stone-100 shadow-sm border border-stone-200/80`}>
        <img
          src={afterImage}
          alt={title}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-md text-white text-xs px-2.5 py-1 rounded">
          Réalisation terminée
        </div>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className={`relative w-full ${heightClass} overflow-hidden rounded-xl select-none shadow-sm border border-stone-200/80 cursor-ew-resize`}
      onMouseDown={() => setIsDragging(true)}
      onMouseUp={() => setIsDragging(false)}
      onMouseLeave={() => setIsDragging(false)}
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
    >
      {/* Background: AFTER Image */}
      <img
        src={afterImage}
        alt={`${title} - Après travaux`}
        referrerPolicy="no-referrer"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
      />
      <span className="absolute top-4 right-4 z-10 bg-[#1E3A2B]/85 backdrop-blur-sm text-emerald-100 text-xs font-semibold px-2.5 py-1 rounded shadow-sm">
        Après travaux
      </span>

      {/* Foreground: BEFORE Image (clipped by width percentage) */}
      <div
        className="absolute inset-0 overflow-hidden pointer-events-none"
        style={{ width: `${sliderPosition}%` }}
      >
        <img
          src={beforeImage}
          alt={`${title} - Avant travaux`}
          referrerPolicy="no-referrer"
          className="absolute inset-0 w-full h-full object-cover max-w-none"
          style={{
            width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100%',
            height: '100%',
          }}
        />
        <span className="absolute top-4 left-4 z-10 bg-black/75 backdrop-blur-sm text-stone-200 text-xs font-semibold px-2.5 py-1 rounded shadow-sm">
          Avant
        </span>
      </div>

      {/* Slider dividing line */}
      <div
        className="absolute top-0 bottom-0 z-20 w-0.5 bg-white shadow-[0_0_10px_rgba(0,0,0,0.5)] pointer-events-none"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-white text-stone-800 shadow-lg flex items-center justify-center border border-stone-200">
          <ChevronsLeftRight className="w-4 h-4 text-stone-700" />
        </div>
      </div>

      {/* Instruction indicator */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-10 bg-black/60 backdrop-blur-sm text-stone-200 text-[11px] px-3 py-1 rounded-full pointer-events-none tracking-wide">
        Glissez pour comparer Avant / Après
      </div>
    </div>
  );
};
