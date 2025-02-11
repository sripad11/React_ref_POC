import { useRef } from "react";
import NewProject from "./components/NewProject";
import ProjectsSidebar from "./components/ProjectsSidebar";

function App() {

  const newProjectRef = useRef(null);

  let projects = [];

  function handleAddProjectClick() {
    newProjectRef.current.showModal();
  }

  function handleAddProjectOnSubmit(projectData) {
    projects = [...projects, projectData];
    let form = newProjectRef.current.querySelector('form');
    form.reset();
    newProjectRef.current.close();
  }

  function handleAddProjectOnClose() {
    newProjectRef.current.close();
  }

  return (
    <>
      <NewProject ref={newProjectRef} onHandleSubmit={handleAddProjectOnSubmit} onHandleClose={handleAddProjectOnClose}/>
      <ProjectsSidebar handleAddProjectClick={handleAddProjectClick} />
    </>
  );
}

export default App;
