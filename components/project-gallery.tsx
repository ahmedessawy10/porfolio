"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import type { GalleryImage } from "@/lib/projects-data";

/* ─────────────────────────────────────────────────────────────
   Lightbox
───────────────────────────────────────────────────────────── */
function Lightbox({
  images,
  startIndex,
  onClose,
}: {
  images: GalleryImage[];
  startIndex: number;
  onClose: () => void;
}) {
  const [current, setCurrent] = useState(startIndex);

  const prev = useCallback(
    () => setCurrent((i) => (i - 1 + images.length) % images.length),
    [images.length]
  );
  const next = useCallback(
    () => setCurrent((i) => (i + 1) % images.length),
    [images.length]
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose, prev, next]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md"
      onClick={onClose}
    >
      {/* Close */}
      <button
        onClick={onClose}
        className="absolute top-5 right-5 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-10"
      >
        <X className="h-5 w-5" />
      </button>

      {/* Prev */}
      {images.length > 1 && (
        <button
          onClick={(e) => { e.stopPropagation(); prev(); }}
          className="absolute left-4 md:left-10 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-10"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
      )}

      {/* Image */}
      <motion.div
        key={current}
        initial={{ opacity: 0, scale: 0.94 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.2 }}
        className="flex flex-col items-center gap-4 px-16"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={images[current].src}
          alt={images[current].caption}
          width={780}
          height={1688}
          sizes="(max-width: 768px) 90vw, 600px"
          unoptimized={images[current].src.endsWith(".svg")}
          priority
          className={`rounded-2xl object-contain shadow-2xl ${
            images[current].src.endsWith(".svg")
              ? "max-h-[60vh] max-w-[60vh] w-auto"
              : "max-h-[78vh] max-w-sm w-auto"
          }`}
        />
        <p className="text-white/70 text-sm font-medium">{images[current].caption}</p>
        <div className="flex flex-col items-center gap-2">
          <span className="text-white/40 text-xs">{current + 1} / {images.length}</span>
          <div className="flex gap-1.5 flex-wrap justify-center max-w-xs">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`rounded-full transition-all duration-200 ${
                  i === current
                    ? "w-5 h-1.5 bg-primary"
                    : "w-1.5 h-1.5 bg-white/30 hover:bg-white/60"
                }`}
              />
            ))}
          </div>
        </div>
      </motion.div>

      {/* Next */}
      {images.length > 1 && (
        <button
          onClick={(e) => { e.stopPropagation(); next(); }}
          className="absolute right-4 md:right-10 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-10"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      )}
    </motion.div>
  );
}

/* ─────────────────────────────────────────────────────────────
   Infinite auto-scroll carousel
   – duplicates slides so the loop is seamless
   – uses requestAnimationFrame for smooth pixel-by-pixel scroll
   – pauses on hover
   – arrows jump by one card width
───────────────────────────────────────────────────────────── */
const CARD_W   = 180;   // px — portrait card width
const CARD_GAP = 16;    // px — gap between cards
const SPEED    = 2;     // px per frame  (~120 px/s at 60 fps)

export function ProjectGallery({ images }: { images: GalleryImage[] }) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const trackRef   = useRef<HTMLDivElement>(null);
  const rafRef     = useRef<number>(0);
  const pausedRef  = useRef(false);   // hover pause flag
  const posRef     = useRef(0);       // current scroll position (px)

  /* total width of ONE set of slides */
  const setWidth = images.length * (CARD_W + CARD_GAP);

  /* ── auto-scroll loop ── */
  useEffect(() => {
    if (!trackRef.current || images.length === 0) return;

    const tick = () => {
      if (!pausedRef.current && trackRef.current) {
        posRef.current += SPEED;
        // when we've scrolled one full set, snap back silently
        if (posRef.current >= setWidth) {
          posRef.current -= setWidth;
        }
        trackRef.current.scrollLeft = posRef.current;
      }
      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [setWidth, images.length]);

  /* ── manual arrow jump ── */
  const jump = (dir: "left" | "right") => {
    const step = CARD_W + CARD_GAP;
    posRef.current = Math.max(0, posRef.current + (dir === "right" ? step : -step));
    if (trackRef.current) trackRef.current.scrollLeft = posRef.current;
  };

  if (!images || images.length === 0) return null;

  /* duplicate slides for seamless infinite loop */
  const slides = [...images, ...images];

  return (
    <>
      <div
        className="relative group/carousel overflow-hidden"
        onMouseEnter={() => { pausedRef.current = true; }}
        onMouseLeave={() => { pausedRef.current = false; }}
      >
        {/* fade edges */}
        <div className="absolute left-0 top-0 bottom-4 w-12 bg-linear-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-4 w-12 bg-linear-to-l from-background to-transparent z-10 pointer-events-none" />

        {/* left arrow */}
        <button
          onClick={() => jump("left")}
          className="absolute left-2 top-[45%] -translate-y-1/2 z-20 p-2.5 rounded-full bg-background/80 backdrop-blur border border-border text-foreground hover:text-primary hover:border-primary shadow-lg transition-all duration-200 opacity-0 group-hover/carousel:opacity-100"
          aria-label="Previous"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>

        {/* scrollable track — overflow hidden + no scrollbar */}
        <div
          ref={trackRef}
          className="flex gap-4 overflow-x-hidden pb-4 no-scrollbar"
          style={{ cursor: "grab" }}
        >
          {slides.map((img, i) => {
            /* the real index maps back into original images array */
            const realIdx = i % images.length;
            return (
              <button
                key={i}
                onClick={() => setLightboxIndex(realIdx)}
                className="flex-none flex flex-col items-center gap-2.5 cursor-zoom-in group/card"
                style={{ width: CARD_W }}
                tabIndex={i < images.length ? 0 : -1}
                aria-hidden={i >= images.length}
              >
                {/* frame — portrait ratio for phone screens, square SVGs fit via contain */}
                <div
                  className="relative w-full overflow-hidden rounded-2xl border border-border bg-muted/30 shadow-md group-hover/card:shadow-[0_8px_30px_rgba(0,212,255,0.25)] group-hover/card:border-primary/40 transition-all duration-300 flex items-center justify-center"
                  style={{ height: Math.round(CARD_W * (852 / 393)) }}
                >
                  <Image
                    src={img.src}
                    alt={img.caption}
                    width={360}
                    height={780}
                    sizes="180px"
                    loading="lazy"
                    unoptimized={img.src.endsWith(".svg")}
                    className={`w-full h-full transition-transform duration-500 group-hover/card:scale-105 ${
                      img.src.endsWith(".svg")
                        ? "object-contain p-3"
                        : "object-cover object-top"
                    }`}
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).style.opacity = "0";
                    }}
                    draggable={false}
                  />
                  {/* top shine */}
                  <div className="absolute inset-x-0 top-0 h-12 bg-linear-to-b from-white/5 to-transparent pointer-events-none" />
                </div>

                {/* caption */}
                <span className="text-xs text-muted-foreground text-center leading-tight group-hover/card:text-primary transition-colors duration-200 select-none">
                  {img.caption}
                </span>
              </button>
            );
          })}
        </div>

        {/* right arrow */}
        <button
          onClick={() => jump("right")}
          className="absolute right-2 top-[45%] -translate-y-1/2 z-20 p-2.5 rounded-full bg-background/80 backdrop-blur border border-border text-foreground hover:text-primary hover:border-primary shadow-lg transition-all duration-200 opacity-0 group-hover/carousel:opacity-100"
          aria-label="Next"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <Lightbox
            images={images}
            startIndex={lightboxIndex}
            onClose={() => setLightboxIndex(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
