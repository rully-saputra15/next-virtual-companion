import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export function stripHtml(content: string): string {
  return content.replace(/```html\n?/g, '').replace(/```/g, '').trim();
}