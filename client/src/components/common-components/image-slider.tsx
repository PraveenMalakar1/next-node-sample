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
  const [direction, setDirection] = useState<"next" | "prev">("next");

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
      setIsAnimating(false);
      setCurrentIndex(slides.length - 2);
    } else if (currentIndex === slides.length - 1) {
      // If we're at the cloned first slide (last index), jump to the real first slide without animation
      setIsAnimating(false);
      setCurrentIndex(1);
    } else {
      setIsAnimating(false);
    }
  }, [currentIndex, slides.length]);

  // Auto-slide every 2 seconds
  useEffect(() => {
    if (slides.length <= 1) return;

    const interval = setInterval(() => {
      if (!isAnimating) {
        nextSlide();
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [slides, isAnimating]);

  // Effect to handle transition end
  useEffect(() => {
    if (isAnimating) {
      const timer = setTimeout(handleSlideTransitionEnd, 500);
      return () => clearTimeout(timer);
    }
  }, [isAnimating, handleSlideTransitionEnd]);

  const goToPrevious = () => {
    if (isAnimating || slides.length <= 1) return;
    setDirection("prev");
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => prevIndex - 1);
  };

  const nextSlide = () => {
    if (isAnimating || slides.length <= 1) return;
    setDirection("next");
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  const goToSlide = (slideIndex: number) => {
    if (isAnimating || slides.length <= 1) return;
    // Convert the visible index (0-based) to the actual index in our slides array (which has clones)
    const actualIndex = slideIndex + 1;

    if (actualIndex === currentIndex) return;

    setDirection(actualIndex > currentIndex ? "next" : "prev");
    setIsAnimating(true);
    setCurrentIndex(actualIndex);
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
      <div
        className="absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-white/70 rounded-full p-1 cursor-pointer hover:bg-white"
        onClick={goToPrevious}
      >
        {"<"}
      </div>

      {/* Right Arrow */}
      <div
        className="absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-white/70 rounded-full p-1 cursor-pointer hover:bg-white"
        onClick={nextSlide}
      >
        {">"}
      </div>

      {/* Images with animation */}
      <div className="relative w-full h-full">
        {slides.map((image, index) => (
          <div
            key={index}
            className={`absolute top-0 left-0 w-full h-full transition-all duration-500 ease-in-out ${
              index === currentIndex
                ? "opacity-100 z-10 translate-x-0 scale-100"
                : "opacity-0 z-0 scale-95 " +
                  (index < currentIndex
                    ? "-translate-x-full"
                    : "translate-x-full")
            }`}
          >
            <Image
              src={image || "/placeholder.svg"}
              alt={`${alt} - Image ${index}`}
              fill
              className="object-cover"
              priority={index === currentIndex}
            />
          </div>
        ))}
      </div>

      {/* Dots - showing only for the actual images (not the clones) */}
      <div className="absolute bottom-2 left-0 right-0 flex justify-center space-x-2 z-20">
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
