import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { copyToClipboard } from "./clipboardFunctions";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
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

export function isIos() {
  return /iPad|iPhone|iPod/.test(navigator.userAgent);
}

export function isIphone() {
  return /iPhone|iPod/.test(navigator.userAgent);
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
  clearButtons();
  copyToClipboard(text);
}

  export const getEditModeFromStorage = (): boolean => {
    return localStorage.getItem("editModeEnabled") === "true";
  };
