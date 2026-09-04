import { useParams, Navigate } from "react-router-dom";
import { useRef, useState, useLayoutEffect } from "react";
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
import { CornerButton } from "components/ui";
import BottomContainer from "components/resume/bottom";

const ResumeView = () => {
  const { variant } = useParams<{ variant: string }>();
  const config = variant ? resumeConfig[variant] : undefined;

  const agentIphone = isIphone();
  const printRef = useRef<HTMLDivElement | null>(null);
  const appContainerRef = useRef<HTMLDivElement | null>(null);
  const experienceRef = useRef<HTMLDivElement | null>(null);
  const [taskbarOffset, setTaskbarOffset] = useState<number | undefined>(
    undefined
  );
  const [isEditing, setIsEditing] = useState(false);
  const [editModeEnabled, setEditModeEnabled] = useState(
    getEditModeFromStorage
  );

  useLayoutEffect(() => {
    const appContainerEl = appContainerRef.current;
    const experienceEl = experienceRef.current;
    if (!appContainerEl || !experienceEl) return;

    const desktopQuery = window.matchMedia("(min-width: 640px)");

    const update = () => {
      if (!desktopQuery.matches) {
        setTaskbarOffset(undefined);
        return;
      }
      const paddingLeft = parseFloat(
        getComputedStyle(experienceEl).paddingLeft || "0"
      );
      const offset =
        experienceEl.getBoundingClientRect().left -
        appContainerEl.getBoundingClientRect().left +
        paddingLeft;
      setTaskbarOffset(offset);
    };

    update();
    const resizeObserver = new ResizeObserver(update);
    resizeObserver.observe(appContainerEl);
    resizeObserver.observe(experienceEl);
    desktopQuery.addEventListener("change", update);

    return () => {
      resizeObserver.disconnect();
      desktopQuery.removeEventListener("change", update);
    };
  }, [config]);

  if (!config) {
    return <Navigate to={`/${DEFAULT_VARIANT}`} replace />;
  }

  const handleDownload = async () => {
    const filename = `${config.info.name.replace(/\s+/g, "_")}_Resume_${variant}.pdf`;
    const isCV = variant !== DEFAULT_VARIANT;
    const blob = await pdf(<ResumePDF config={config} unlimitBullets={isCV} />).toBlob();
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    link.click();
    URL.revokeObjectURL(url);
  };

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
        ref={appContainerRef}
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
          alignLeft={taskbarOffset}
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
          <ExperienceContainer
            ref={experienceRef}
            experienceData={config.experience}
          >
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
