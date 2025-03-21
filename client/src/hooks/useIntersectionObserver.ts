import { useState, useEffect, RefObject } from "react";

interface IntersectionObserverOptions {
  root?: Element | null;
  rootMargin?: string;
  threshold?: number | number[];
}

export function useIntersectionObserver(
  elementRef: RefObject<Element>,
  options: IntersectionObserverOptions = {
    threshold: 0,
    root: null,
    rootMargin: "0px",
  }
) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [hasIntersected, setHasIntersected] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
        if (entry.isIntersecting && !hasIntersected) {
          setHasIntersected(true);
        }
      },
      {
        threshold: options.threshold || 0,
        root: options.root || null,
        rootMargin: options.rootMargin || "0px",
      }
    );

    const element = elementRef.current;
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [elementRef, options.threshold, options.root, options.rootMargin, hasIntersected]);

  return { isIntersecting, hasIntersected };
}
