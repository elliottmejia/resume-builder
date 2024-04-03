import "./App.css";
import Taskbar from "components/taskbar";
import {
  ExperienceContainer,
  ResumeContainer,
  Sidebar,
  Info,
  Skills,
} from "components/resume";
import { useRef, useEffect, useState } from "react";
import { useReactToPrint } from "react-to-print";
import { clearButtons } from "./lib/utils";
import Screentone from "components/styling/screentone";
import { CornerButton } from "components/ui";
import { getEditModeFromStorage } from "lib/utils";

function App() {
  const printRef = useRef<HTMLDivElement | null>(null);

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

  return (
    <div id="app-container" className="relative">
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
  );
}

export default App;
