import "./App.css";
import { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useFont } from "@react-hooks-library/core";
import { Loading } from "components/styling";
import { Analytics } from "@vercel/analytics/react";
import { DEFAULT_VARIANT } from "data/data";
import ResumeView from "components/ResumeView";

function App() {
  const { error: fontError, loaded: fontLoaded } = useFont(
    "Geist",
    "/fonts/Geist/GeistVF.woff2"
  );

  const [delayFinished, setDelayFinished] = useState(false);

  useEffect(() => {
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
      <Routes>
        <Route
          path="/"
          element={<Navigate to={`/${DEFAULT_VARIANT}`} replace />}
        />
        <Route path="/:variant" element={<ResumeView />} />
      </Routes>
    </>
  );
}

export default App;
