import { twMerge } from "tailwind-merge";
import { type ClassValue, clsx } from "clsx";
import type { AnyObject } from "./types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function isObjectEmpty(object: AnyObject): boolean {
  return Object.keys(object).length === 0;
}
