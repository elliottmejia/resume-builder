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
import { Icon } from "@iconify/react";
import Screentone from "./components/styling/screentone";

function App() {
  const printRef = useRef<HTMLDivElement | null>(null);
  const handlePrint = useReactToPrint({
    content: () => printRef.current,
    onAfterPrint: () => {
      clearButtons();
    },
  });

  //TODO: implement parallax

  const handlePageEdit = () => {
    clearButtons();
    if (!editModeEnabled) return;
    setIsEditing(!isEditing);
  };

  const [isEditing, setIsEditing] = useState(false);
  const [editModeEnabled, setEditModeEnabled] = useState(true);

  return (
    <div id="app-container" className="relative">
      {editModeEnabled && (
        <div
          id="corner-button-container"
          className="no-print z-50 animate duration-100 hover:translate-x-1 hover:-translate-y-1 absolute right-0 top-0 cursor-pointer"
          onClick={handlePageEdit}
        >
          <div
            id="corner-button"
            className="absolute right-0 top-0 w-0 h-0 z-50"
          />
          <Icon
            icon="ic:sharp-edit"
            id="edit-button"
            className="absolute right-1 top-1 z-50 h-6 w-6 text-black"
          ></Icon>
        </div>
      )}
      <Taskbar handlePrint={handlePrint} />
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
