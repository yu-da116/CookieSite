import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Additional utilities for this project

// Function to check if an element is in viewport
export function isInViewport(element: HTMLElement): boolean {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Smooth scroll to element
export function scrollToElement(element: HTMLElement): void {
  element.scrollIntoView({ behavior: "smooth" });
}

// Format date for display (YYYY-MM-DD -> MM/DD/YYYY)
export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("ja-JP", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

// Format time (24h -> 12h format)
export function formatTime(timeString: string): string {
  const [hour, minute] = timeString.split(":");
  return `${hour}:${minute}`;
}
