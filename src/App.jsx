import { useState } from "react";
import { NewProject } from "./components/NewProject";
import { NoProjectSelected } from "./components/NoProjectSelected";
import { Sidebar } from "./components/Sidebar";

/*
 *  selectedProjectId explanation
 *  undefined -> no project selected and not creating a new project
 *  null -> creating a new project
 */
function App() {
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: [],
  });

  const { selectedProjectId, projects } = projectState;

  function handleStartCreateProject() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  }

  function handleBackToNeutralState() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
      };
    });
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar onStartCreateProject={handleStartCreateProject} projects={projects} />
      {selectedProjectId === null && (
        <NewProject onBackToNeutralState={handleBackToNeutralState} />
      )}
      {selectedProjectId === undefined && (
        <NoProjectSelected onStartCreateProject={handleStartCreateProject} />
      )}
    </main>
  );
}

export default App;
