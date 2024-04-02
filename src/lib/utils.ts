import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function isDev() {
  return import.meta.env.MODE === "development";
}

export function isProd() {
  return import.meta.env.MODE === "production";
}

export function isTest() {
  return import.meta.env.MODE === "test";
}

export function uuid() {
  return Math.random().toString(36).substring(2) + Date.now().toString(36);
}

export function clipboardCopy(text: string) {
  return () => {
    navigator.clipboard.writeText(text);
    TODO: "make this work, add a toast";
  };
}