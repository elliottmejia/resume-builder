import "./App.css";
import Taskbar from "components/taskbar";
import {
  ExperienceContainer,
  ResumeContainer,
  Sidebar,
  Info,
  Skills,
} from "components/resume";

function App() {
  return (
    <>
      <Taskbar />
      <ResumeContainer>
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
