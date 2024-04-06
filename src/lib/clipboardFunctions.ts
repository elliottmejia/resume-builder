import { isIos } from "lib/utils";

interface Clipboard {
  copy: (text: string) => void;
}

const Clipboard: Clipboard = (function (window, document): Clipboard {
  if (document === undefined)
    console.error("document undefined @ clipboardFunctions ln:8");

  if (typeof window === "undefined") {
    console.error("window undefined");
    return null;
  }
  //eslint-disable-next-line @typescript-eslint/no-explicit-any
  let textArea: any;

  function createTextArea(text: string) {
    if (!document) {
      console.error("document undefined @ clipboardFunctions ln:18");
      return;
    }
    textArea = document?.createElement("textArea");
    textArea.value = text;
    document?.body.appendChild(textArea);
  }

  function selectText() {
    let range, selection;

    if (isIos()) {
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
  typeof document !== "undefined" ? document : undefined
);

export const copyToClipboard = (textToCopy: string | undefined) => {
  Clipboard.copy(textToCopy ?? "");
};
