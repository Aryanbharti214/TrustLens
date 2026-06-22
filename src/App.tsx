import React from "react";
import { WorkflowProvider, useWorkflow } from "./context/WorkflowContext";
import LandingPage from "./screens/LandingPage";

const AppContent: React.FC = () => {
  const { user, loading } = useWorkflow();

  console.log("loading =", loading);
  console.log("user =", user);

  const [showLanding, setShowLanding] = React.useState(true);

  const enterApp = () => {
    console.log("ENTER_APP received");
    setShowLanding(false);
  };

  if (loading) {
    return (
      <div
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        Loading...
      </div>
    );
  }

  if (showLanding) {
    return <LandingPage onEnterApp={enterApp} />;
  }

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "24px",
        fontWeight: "bold",
      }}
    >
      Landing Closed Successfully
    </div>
  );
};

function App() {
  return (
    <WorkflowProvider>
      <AppContent />
    </WorkflowProvider>
  );
}

export default App;