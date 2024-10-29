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
import { getEditModeFromStorage, isIphone } from "lib/utils";
import { infoData } from "data/data";
import { useFont } from "@react-hooks-library/core";
import { Loading } from "components/styling";
import BottomContainer from "./components/resume/bottom";
import { Analytics } from "@vercel/analytics/react";

function App() {
  //TODO: mobile...
  // ... test android
  // ... test ipad
  // ... test macos safari
  // ... test edge
  const agentIphone = isIphone();

  const printRef = useRef<HTMLDivElement | null>(null);

  const { error: fontError, loaded: fontLoaded } = useFont(
    "Geist",
    "/fonts/Geist/GeistVF.woff2"
  );
  const handleColorPrint = useReactToPrint({
    documentTitle: "",
    copyStyles: true,
    content: () => printRef.current,
    onAfterPrint: () => {
      clearButtons();
    },
    removeAfterPrint: true,
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
      <Analytics />
      <div
        id="app-container"
        className={
          agentIphone
            ? "no-clip  relative font-geist animate duration-200 fade-in"
            : "  relative font-geist animate duration-200 fade-in"
        }
      >
        {editModeEnabled && <CornerButton handlePageEdit={handlePageEdit} />}
        <Taskbar
          handleColorPrint={handleColorPrint}
          editToggle={handleEditToggle}
        />
        <ResumeContainer className="relative" ref={printRef}>
          <Screentone className="print-only" variant="dark" gradient />
          <Sidebar>
            <Info />
            <Skills className="hidden sm:block" instance="sidebar" />
          </Sidebar>
          <ExperienceContainer>
            <Screentone />
            <Skills
              className="block sm:hidden grid grid-cols-3 gap-2"
              instance="bottom"
            />

            <BottomContainer />
          </ExperienceContainer>
        </ResumeContainer>
      </div>
      <div
        className="relative text-center text-white font-thin top-2  z-50 w-fit mx-auto p-2 rounded-sm text-xs print:hidden"
        style={{ background: "rgba(0, 0, 0, 0.7)", maxWidth: "3in" }}
        id="copyright"
      >
        Site design by <NameBold />.
        <br />
        Coding by <NameBold />.
        <br />
        <NameBold /> is a <NameBold /> company.
        <br /> All <NameBold />
        <strong>s</strong> reserved.
        <br />
        ©2024 <NameBold />.
        <br />
      </div>
    </>
  );
}

export default App;
