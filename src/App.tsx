import "./App.css";
import Taskbar from "components/taskbar";
import {
  ExperienceContainer,
  ResumeContainer,
  Sidebar,
  Info,
  Skills,
} from "components/resume";
import { useRef } from "react";
import { useReactToPrint } from "react-to-print";

function App() {
  const printRef = useRef<HTMLDivElement | null>(null);
  const handlePrint = useReactToPrint({
    content: () => (printRef.current ? printRef.current : null),
  });

  return (
    <>
      <Taskbar handlePrint={handlePrint} />
      <ResumeContainer ref={printRef}>
        <Sidebar>
          <Info />
          <Skills />
        </Sidebar>
        <ExperienceContainer />
      </ResumeContainer>
    </>
  );
}

export default App;