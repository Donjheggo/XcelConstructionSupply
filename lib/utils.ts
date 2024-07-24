import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

// Default shadcn function for merging classnames
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Format number to peso
export const formatToPeso = (amount: number) => {
  const formatted = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "PHP",
  }).format(amount);
  return formatted;
};

