"use client";
import React, {
  useEffect,
  useState,
  createContext,
  type JSX,
} from "react";
import {
  IconArrowNarrowLeft,
  IconArrowNarrowRight,

} from "@tabler/icons-react";
import { cn } from "../../lib/utils";
import {  motion } from "motion/react";
import { ExternalLink, Github } from "lucide-react";

interface CarouselProps {
  items: JSX.Element[];
  initialScroll?: number;
}


type Card = {
  src: string;
  title: string;
  category: string;
  github?: string;
  live?: string;
  techStack?: string[];
};

export const CarouselContext = createContext<{
  onCardClose: (index: number) => void;
  currentIndex: number;
}>({
  onCardClose: () => {},
  currentIndex: 0,
});

export const Carousel = ({ items, initialScroll = 0 }: CarouselProps) => {
  const carouselRef = React.useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = React.useState(false);
  const [canScrollRight, setCanScrollRight] = React.useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = initialScroll;
      checkScrollability();
    }
  }, [initialScroll]);

  const checkScrollability = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
    }
  };

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  const handleCardClose = (index: number) => {
    if (carouselRef.current) {
      const cardWidth = isMobile() ? 230 : 384; // (md:w-96)
      const gap = isMobile() ? 4 : 8;
      const scrollPosition = (cardWidth + gap) * (index + 1);
      carouselRef.current.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      });
      setCurrentIndex(index);
    }
  };

  const isMobile = () => {
    return window && window.innerWidth < 768;
  };

  return (
    <CarouselContext.Provider
      value={{ onCardClose: handleCardClose, currentIndex }}
    >
      <div className="relative w-full">
        <div
          className="flex w-full overflow-x-scroll overscroll-x-auto scroll-smooth py-10 [scrollbar-width:none] md:py-20"
          ref={carouselRef}
          onScroll={checkScrollability}
        >
          <div
            className={cn(
              "absolute right-0 z-[1000] h-auto w-[5%] overflow-hidden bg-gradient-to-l",
            )}
          ></div>

          <div
            className={cn(
              "flex flex-row justify-start gap-4 pl-4",
              "mx-auto max-w-7xl",
            )}
          >
            {items.map((item, index) => (
              <motion.div
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.5,
                    delay: 0.2 * index,
                    ease: "easeOut",
                  },
                }}
                key={"card" + index}
                className="rounded-3xl last:pr-[5%] md:last:pr-[33%]"
              >
                {item}
              </motion.div>
            ))}
          </div>
        </div>
        <div className="mr-10 flex justify-end gap-2">
          <button
            className="relative z-40 flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 disabled:opacity-50"
            onClick={scrollLeft}
            disabled={!canScrollLeft}
          >
            <IconArrowNarrowLeft className="h-6 w-6 text-gray-500" />
          </button>
          <button
            className="relative z-40 flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 disabled:opacity-50"
            onClick={scrollRight}
            disabled={!canScrollRight}
          >
            <IconArrowNarrowRight className="h-6 w-6 text-gray-500" />
          </button>
        </div>
      </div>
    </CarouselContext.Provider>
  );
};

export const Card = ({
  card,
  layout = false,
}: {
  card: Card;
  index: number;
  layout?: boolean;
}) => {
  return (
    <motion.div
      layoutId={layout ? `card-${card.title}` : undefined}
      className="group relative z-10 flex h-60 w-90 flex-col justify-between overflow-hidden bg-gray-100 md:h-[25rem] md:w-150 dark:bg-neutral-900"
    >
      {/* Background Image */}
      <BlurImage
        src={card.src}
        alt={card.title}
        fill
        className="absolute inset-0 z-0 object-cover"
      />

      {/* Gradient overlay to improve text readability */}
      <div className="absolute inset-0 z-10 group-hover:bg-black/40" />

      {/* Top Content: Title & Category */}
      <div className="relative z-20 p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <p className="text-lg font-medium text-white">{card.category}</p>
        <p className="mt-1 text-3xl font-bold text-white">{card.title}</p>
      </div>

      {/* Top Right Buttons */}
      <div className="absolute top-4 right-4 z-30 flex gap-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        {card.github && (
          <a
            href={card.github}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-white/80 p-2 text-xs font-medium text-black backdrop-blur-md hover:bg-white/90 transition"
          >
            <Github className="h-4 w-4" />
          </a>
        )}
        {card.live && (
          <a
            href={card.live}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-white/80 p-2 text-xs font-medium text-black backdrop-blur-md hover:bg-white/90 transition"
          >
            <ExternalLink className="h-4 w-4" />
          </a>
        )}
      </div>

      {/* Bottom Tech Stack */}
      {card.techStack && card.techStack.length > 0 && (
        <div className="z-20 mt-auto flex flex-wrap gap-2 p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          {card.techStack.map((tech, idx) => (
            <span
              key={idx}
              className="rounded-full bg-white/80 px-2 py-1 text-md font-semibold text-gray-800 backdrop-blur-md dark:bg-white/20 dark:text-white"
            >
              {tech}
            </span>
          ))}
        </div>
      )}
    </motion.div>
  );
};


export const BlurImage = ({
  height,
  width,
  src,
  className,
  alt,
  ...rest
}: {
  height?: number;
  width?: number;
  src: string;
  className?: string;
  alt?: string;
  fill?: boolean;
  [key: string]: any;
}) => {
  const [isLoading, setLoading] = useState(true);
  return (
    <img
      className={cn(
        "h-full w-full transition duration-300",
        isLoading ? "blur-sm" : "blur-0",
        className,
      )}
      onLoad={() => setLoading(false)}
      src={src as string}
      width={width}
      height={height}
      loading="lazy"
      decoding="async"
      alt={alt ? alt : "Background of a beautiful view"}
      {...rest}
    />
  );
};
