//@ts-nocheck

interface Clipboard {
  copy: (text: string) => void;
}

const Clipboard: Clipboard = (function (
  window,
  document,
  navigator
): Clipboard {
  if (typeof window === "undefined") {
    return null;
  }
  //eslint-disable-next-line @typescript-eslint/no-explicit-any
  let textArea: any;

  function isOS() {
    return navigator?.userAgent.match(/ipad|iphone/i);
  }

  function createTextArea(text: string) {
    textArea = document?.createElement("textArea");
    textArea.value = text;
    document?.body.appendChild(textArea);
  }

  function selectText() {
    let range, selection;

    if (isOS()) {
      range = document?.createRange();
      range?.selectNodeContents(textArea);
      selection = window?.getSelection();
      selection?.removeAllRanges();
      range && selection?.addRange(range);
      textArea.setSelectionRange(0, 999999);
    } else {
      textArea.select();
    }
  }

  function copyToClipboard() {
    document?.execCommand("copy");
    document?.body.removeChild(textArea);
  }

  const copy = function (text: string) {
    createTextArea(text);
    selectText();
    copyToClipboard();
  };

  return {
    copy: copy,
  };
})(
  typeof window !== "undefined" ? window : undefined,
  typeof document !== "undefined" ? document : undefined,
  typeof navigator !== "undefined" ? navigator : undefined
);

export const copyToClipboard = (textToCopy: string | undefined) => {
  Clipboard.copy(textToCopy ?? "");
};
