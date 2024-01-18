import { useState } from "react";
import { NewProject } from "./components/NewProject";
import { NoProjectSelected } from "./components/NoProjectSelected";
import { Sidebar } from "./components/Sidebar";
import { SelectedProject } from "./components/SelectedProject";

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

  const selectedProject = projects.find(
    (project) => project.id === selectedProjectId
  );

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
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject],
      };
    });
  };

  const handleSelectProject = (id) => {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: id,
      };
    });
  };

  const handleDeleteProject = (id) => {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: prevState.projects.filter((project) => project.id !== id),
      };
    });
  };

  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar
        onSelectProject={handleSelectProject}
        onStartCreateProject={handleStartCreateProject}
        projects={projects}
        selectedProjectId={selectedProjectId}
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
      {selectedProjectId !== undefined && selectedProjectId !== null && (
        <SelectedProject project={selectedProject} onDelete={handleDeleteProject} />
      )}
    </main>
  );
}

export default App;
