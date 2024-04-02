import "./App.css";
import Taskbar from "components/taskbar";
import {
  ExperienceContainer,
  ResumeContainer,
  Sidebar,
  Info,
  Skills,
} from "components/resume";
import { useRef, useEffect } from "react";
import { useReactToPrint } from "react-to-print";

function App() {
  const printRef = useRef<HTMLDivElement | null>(null);
  const handlePrint = useReactToPrint({
    content: () => (printRef.current ? printRef.current : null),
  });

  //add event listener on window scroll that affects the filter: drop-shadow(-1px -31px 20px #000000); property of root

  //TODO: implement parallax
  // useEffect(() => {
  //   const handleScroll = () => {
  //     // Logic to change filter property based on scroll position
  //     const scrollPosition = window.scrollY;
  //     const root = document.getElementById("root");
  //     if (!root) return;
  //     root.style.backgroundPositionY = scrollPosition * 1.01 + "px";
  //   };
  //   window.addEventListener("scroll", handleScroll);
  // }, []);

  return (
    <div id="app-container">
      <Taskbar handlePrint={handlePrint} />
      <ResumeContainer ref={printRef}>
        <Sidebar>
          <Info />
          <Skills />
        </Sidebar>
        <ExperienceContainer></ExperienceContainer>
      </ResumeContainer>
    </div>
  );
}

export default App;
