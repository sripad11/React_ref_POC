import { v4 as uuidv4 } from "uuid";

export default function ProjectsSidebar({ projects, onAddProjectClick, onSelectProject }) {
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
        Your Projects
      </h2>
      <div>
        <button className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100" onClick={onAddProjectClick}>
          + Add Project
        </button>
      </div>
      <ul className="mt-20">
        {projects.map((project, index) => <li className="text-xl px-2 py-2 hover:bg-stone-600 hover:text-stone-100 rounded-md cursor-pointer" key={uuidv4()}
          onClick={() => onSelectProject({ 'project': project, 'index': index })}> {project.title} </li>)}
      </ul>
    </aside>
  );
}