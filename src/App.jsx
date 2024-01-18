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

  const handleStartCreateProject = () => {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  };

  const handleBackToNeutralState = () => {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
      };
    });
  };

  const handleSaveProject = (newProject) => {
    newProject = {
      ...newProject,
      id: Math.random().toString(),
    };

    setProjectState((prevState) => {
      return {
        ...prevState,
        projects: [...prevState.projects, newProject],
      };
    });

    
  };

  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar
        onStartCreateProject={handleStartCreateProject}
        projects={projects}
      />
      {selectedProjectId === null && (
        <NewProject
          onSaveProject={handleSaveProject}
          onBackToNeutralState={handleBackToNeutralState}
        />
      )}
      {selectedProjectId === undefined && (
        <NoProjectSelected onStartCreateProject={handleStartCreateProject} />
      )}
    </main>
  );
}

export default App;
