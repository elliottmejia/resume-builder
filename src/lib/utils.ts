import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function isDev() {
  return (import.meta.env.DEV = true);
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


export const clearButtons = () => {
  const buttons = Array.from(
    document.getElementsByClassName("taskbar-buttons")
  );
  buttons?.forEach((button: Element) => {
    (button as HTMLButtonElement).blur();
  });
};

export function clipboardCopy(text: string) {
  return () => {
    TODO: "make this work, add a toast";
    clearButtons();

    navigator.clipboard.writeText(text);
  };
}

  export const getEditModeFromStorage = (): boolean => {
    return localStorage.getItem("editModeEnabled") === "true";
  };
