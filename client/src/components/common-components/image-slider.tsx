"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

interface ImageSliderProps {
  images: string[];
  alt: string;
}

export default function ImageSlider({ images, alt }: ImageSliderProps) {
  const [slides, setSlides] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(1); // Start at index 1 (first real slide)
  const [isAnimating, setIsAnimating] = useState(false);
  const [nextIndex, setNextIndex] = useState<number | null>(null);

  // Create the infinite slider array with cloned first and last slides
  useEffect(() => {
    if (images.length > 0) {
      // Add the last slide to the beginning and the first slide to the end
      const infiniteSlides = [
        images[images.length - 1], // Last slide cloned to the beginning
        ...images,
        images[0], // First slide cloned to the end
      ];
      setSlides(infiniteSlides);
    }
  }, [images]);

  // Handle the infinite loop transition
  const handleSlideTransitionEnd = useCallback(() => {
    if (currentIndex === 0) {
      // If we're at the cloned last slide (index 0), jump to the real last slide without animation
      setCurrentIndex(slides.length - 2);
    } else if (currentIndex === slides.length - 1) {
      // If we're at the cloned first slide (last index), jump to the real first slide without animation
      setCurrentIndex(1);
    }
    setIsAnimating(false);
    setNextIndex(null);
  }, [currentIndex, slides.length]);

  // Auto-slide every 2 seconds
  // useEffect(() => {
  //   if (slides.length <= 1) return;

  //   const interval = setInterval(() => {
  //     if (!isAnimating) {
  //       nextSlide();
  //     }
  //   }, 2000);

  //   return () => clearInterval(interval);
  // }, [slides, isAnimating]);

  // Effect to handle transition end
  useEffect(() => {
    if (isAnimating && nextIndex !== null) {
      const timer = setTimeout(() => {
        setCurrentIndex(nextIndex);
        setTimeout(handleSlideTransitionEnd, 50);
      }, 500); // Match this with the CSS transition duration
      return () => clearTimeout(timer);
    }
  }, [isAnimating, nextIndex, handleSlideTransitionEnd]);

  const goToPrevious = () => {
    if (isAnimating || slides.length <= 1) return;
    setIsAnimating(true);
    const prevIndex = currentIndex - 1;
    setNextIndex(prevIndex);
  };

  const nextSlide = () => {
    if (isAnimating || slides.length <= 1) return;
    setIsAnimating(true);
    const next = currentIndex + 1;
    setNextIndex(next);
  };

  const goToSlide = (slideIndex: number) => {
    if (isAnimating || slides.length <= 1) return;
    // Convert the visible index (0-based) to the actual index in our slides array (which has clones)
    const actualIndex = slideIndex + 1;

    if (actualIndex === currentIndex) return;

    setIsAnimating(true);
    setNextIndex(actualIndex);
  };

  // If no slides, show placeholder
  if (slides.length === 0) {
    return (
      <div className="relative w-full h-full bg-gray-200 flex items-center justify-center">
        <p className="text-gray-500">Loading images...</p>
      </div>
    );
  }

  return (
    <div className="relative w-full h-full overflow-hidden">
      {/* Left Arrow */}
      <span
        className="absolute left-2 top-1/2 -translate-y-1/2 z-200 rounded-full p-1 cursor-pointer text-white text-2xl"
        onClick={goToPrevious}
      >
        {"<"}
      </span>

      {/* Right Arrow */}
      <span
        className="absolute right-2 top-1/2 -translate-y-1/2 z-200 rounded-full p-1 cursor-pointer text-white text-2xl"
        onClick={nextSlide}
      >
        {">"}
      </span>

      {/* Images with fade animation */}
      <div className="relative w-full h-full">
        {slides.map((image, index) => {
          // Determine if this slide should be visible
          const isActive = index === currentIndex;
          const isNext = nextIndex !== null && index === nextIndex;

          return (
            <div
              key={index}
              className={`absolute top-0 left-0 w-full h-full transition-all duration-500 ease-in-out ${
                isActive && !isAnimating
                  ? "opacity-100 z-10"
                  : isNext
                  ? "opacity-0 z-20" // Next slide starts invisible but on top
                  : "opacity-0 z-0"
              } ${isAnimating && isActive ? "opacity-0" : ""} ${
                isAnimating && isNext ? "opacity-100" : ""
              }`}
            >
              <Image
                src={image || "/placeholder.svg"}
                alt={`${alt} - Image ${index}`}
                fill
                className="object-cover"
                priority={isActive || isNext}
              />
            </div>
          );
        })}
      </div>

      {/* Dots - showing only for the actual images (not the clones) */}
      <div className="absolute bottom-2 left-0 right-0 flex justify-center space-x-2 z-200">
        {images.map((_, index) => (
          <div
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 w-2 rounded-full cursor-pointer transition-all duration-300 ${
              // Convert the currentIndex to the visible index (accounting for the clone at the beginning)
              (currentIndex - 1 + images.length) % images.length === index
                ? "bg-white scale-125"
                : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
