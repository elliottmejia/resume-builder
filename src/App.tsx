import "./App.css";
import Taskbar from "components/taskbar";
import {
  ExperienceContainer,
  ResumeContainer,
  Sidebar,
  Info,
  Skills,
} from "components/resume";
import { useRef, useState, useEffect } from "react";
import { useReactToPrint } from "react-to-print";
import { clearButtons } from "./lib/utils";
import Screentone from "components/styling/screentone";
import { CornerButton } from "components/ui";
import { getEditModeFromStorage } from "lib/utils";
import { infoData } from "data/data";
import { useFont } from "@react-hooks-library/core";
import { Loading } from "components/styling";
import { isDev } from "lib/utils";
import { useWindowSize } from "@react-hooks-library/core";

const dev = isDev();

function App() {
  //TODO: mobile...
  // ... print container not working on ios
  // ... test android
  // ... test ipad
  //TODO: media queries

  const printRef = useRef<HTMLDivElement | null>(null);

  const {
    error: fontError,
    loaded: fontLoaded,
    // font,
  } = useFont("Geist", "/fonts/Geist/GeistVF.woff2");

  const globalPrintSettings = {
    documentTitle: "",
    copayStyles: true,
    content: () => printRef.current,
    onAfterPrint: () => {
      clearButtons();
    },
    removeAfterPrint: true,
  };
  const handleColorPrint = useReactToPrint({
    ...globalPrintSettings,
  });

  const handleBNWPrint = useReactToPrint({
    ...globalPrintSettings,
    pageStyle: `html, body, #app-container {
      grayscale: 100%;
    }`,
  });

  const handlePageEdit = () => {
    //initiates editing
    clearButtons();
    if (!editModeEnabled) return;
    setIsEditing(!isEditing);
  };

  const [isEditing, setIsEditing] = useState(false);

  const [editModeEnabled, setEditModeEnabled] = useState(
    getEditModeFromStorage
  );

  const handleEditToggle = () => {
    //toggles edit mode existence
    localStorage.setItem("editModeEnabled", (!editModeEnabled).toString());
    setEditModeEnabled(!editModeEnabled);
  };

  const NameBold = () => <strong>{infoData.name}</strong>;

  const [delayFinished, setDelayFinished] = useState(false);

  useEffect(() => {
    //hacking the event loop a bit to ensure the font is loaded before rendering
    if (fontLoaded || fontError) {
      setTimeout(() => {
        dev && console.log("Page loaded");
        setDelayFinished(true);
      }, 1);
    }
  }, [fontLoaded, fontError]);

  if (!fontLoaded) {
    return <Loading />;
  }
  if (!delayFinished) {
    return null;
  }

  return (
    <>
      <div
        id="app-container"
        className="relative font-geist animate duration-200 fade-in "
      >
        {editModeEnabled && <CornerButton handlePageEdit={handlePageEdit} />}
        <Taskbar
          handleColorPrint={handleColorPrint}
          handleBNWPrint={handleBNWPrint}
          editToggle={handleEditToggle}
        />
        <ResumeContainer className="relative" ref={printRef}>
          <Screentone className="print-only" variant="dark" gradient />
          <Sidebar>
            <Info />
            <Skills />
          </Sidebar>
          <ExperienceContainer>
            <Screentone />
          </ExperienceContainer>
        </ResumeContainer>
      </div>
      <div
        className="relative text-center text-white font-thin top-2  z-50 w-fit mx-auto p-2 rounded-sm text-xs"
        style={{ background: "rgba(0, 0, 0, 0.7)", maxWidth: "2in" }}
        id="copyright"
      >
        Site design by <NameBold />.
        <br />
        Coding by <NameBold />.
        <br />
        <NameBold /> is a <NameBold /> company. All <NameBold />
        <strong>s</strong> reserved.
        <br />
        ©2024 <NameBold />.
        <br />
      </div>
    </>
  );
}

export default App;
