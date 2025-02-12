import { useRef, useState } from "react";
import NewProject from "./components/NewProject";
import ProjectsSidebar from "./components/ProjectsSidebar";
import ProjectsDescription from "./components/ProjectsDescription";

function App() {

  const newProjectRef = useRef(null);
  const [projects, setProjects] = useState([]);
  const [currentProjectAndIndex, setCurrentProject] = useState(null);

  function handleAddProjectClick() {
    newProjectRef.current.showModal();
  }

  function handleAddProjectOnSubmit(projectData) {
    setProjects((prevProjects) => [...prevProjects, projectData]);
    let form = newProjectRef.current.querySelector('form');
    form.reset();
    newProjectRef.current.close();
  }

  function handleAddProjectOnClose() {
    newProjectRef.current.close();
  }

  function handleSelectProject(selectedProjectAndIndex) {
    setCurrentProject(selectedProjectAndIndex);
  }

  function handleAddTask(projectNew, index) {
    setProjects((prevProjects) => prevProjects.map((project, i1) => index === i1 ? projectNew : project));
  }

  function handleDeleteProject(project, index) {
    setProjects((prevProjects) => prevProjects.filter((p1, currIndex) => currIndex != index));
    setCurrentProject(null);
  }

  return (
    <>
      <NewProject ref={newProjectRef} onHandleSubmit={handleAddProjectOnSubmit} onHandleClose={handleAddProjectOnClose} />
      <div className="flex gap-20">
        <ProjectsSidebar projects={projects} onAddProjectClick={handleAddProjectClick} onSelectProject={handleSelectProject} />
        {currentProjectAndIndex ? <ProjectsDescription onUpdateTask={handleAddTask} projectAndIndex={currentProjectAndIndex} onDeleteProject={handleDeleteProject}/> : null}
      </div>
    </>
  );
}

export default App;
