import { useParams, Navigate } from "react-router-dom";
import { useRef, useState } from "react";
import { clearButtons, getEditModeFromStorage, isIphone } from "lib/utils";
import { resumeConfig, DEFAULT_VARIANT } from "data/data";
import { pdf } from "@react-pdf/renderer";
import ResumePDF from "components/resume-pdf";
import Taskbar from "components/taskbar";
import {
  ExperienceContainer,
  ResumeContainer,
  Sidebar,
  Info,
  Skills,
} from "components/resume";
import Screentone from "components/styling/screentone";
import { CornerButton } from "components/ui";
import BottomContainer from "components/resume/bottom";

const ResumeView = () => {
  const { variant } = useParams<{ variant: string }>();
  const config = variant ? resumeConfig[variant] : undefined;

  if (!config) {
    return <Navigate to={`/${DEFAULT_VARIANT}`} replace />;
  }

  const agentIphone = isIphone();
  const printRef = useRef<HTMLDivElement | null>(null);

  const handleDownload = async () => {
    const filename = `${config.info.name.replace(/\s+/g, "_")}_Resume.pdf`;
    const blob = await pdf(<ResumePDF />).toBlob();
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    link.click();
    URL.revokeObjectURL(url);
  };

  const [isEditing, setIsEditing] = useState(false);
  const [editModeEnabled, setEditModeEnabled] = useState(
    getEditModeFromStorage
  );

  const handlePageEdit = () => {
    clearButtons();
    if (!editModeEnabled) return;
    setIsEditing(!isEditing);
  };

  const handleEditToggle = () => {
    localStorage.setItem("editModeEnabled", (!editModeEnabled).toString());
    setEditModeEnabled(!editModeEnabled);
  };

  return (
    <>
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
          handleDownload={handleDownload}
          editToggle={handleEditToggle}
          hostedDomain={config.hostedDomain}
        />
        <ResumeContainer className="relative" ref={printRef}>
          <Sidebar>
            <Info data={config.info} />
            <Skills
              className="hidden sm:block"
              instance="sidebar"
              skillsData={config.skills}
              certData={config.certifications}
              currentProjects={config.currentProjects}
            />
          </Sidebar>
          <ExperienceContainer experienceData={config.experience}>
            <Screentone />
            <Skills
              className="sm:hidden grid grid-cols-3 gap-2"
              instance="bottom"
              skillsData={config.skills}
              certData={config.certifications}
            />
            <BottomContainer
              eduData={config.education}
              certData={config.certifications}
            />
          </ExperienceContainer>
        </ResumeContainer>
      </div>
    </>
  );
};

export default ResumeView;
