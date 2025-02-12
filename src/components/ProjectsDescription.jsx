import { useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function ProjectsDescription({ projectAndIndex, onUpdateTask, onDeleteProject }) {

    let project = projectAndIndex.project;
    let projectIndex = projectAndIndex.index;

    const inputRef = useRef(null);
    function handleAddTask() {
        if (inputRef.current.value === '') {
            alert('Task message cant be empty');
            return
        }
        if (!project.tasks) {
            project.tasks = []
        }
        project.tasks = [...project.tasks, inputRef.current.value];
        inputRef.current.value = '';
        onUpdateTask(project, projectIndex);
    }

    function deleteTask(taskIndex) {
        project.tasks = project.tasks.filter((task, index) => index != taskIndex);
        onUpdateTask(project, projectIndex);
    }
    return (
        <>
            <div className="px-8 py-16 flex-10 w-[500px]">
                <div className="flex justify-between">
                    <h2 className="pt-2 font-bold md:text-xl"> {project.title} </h2>
                    <button className="p-2 bg-gray-200" onClick={() => {
                        onDeleteProject(project, projectIndex)
                    }}> Delete </button>
                </div>
                <p className="mt-10 border-b-2 pb-5"> {project.description} </p>
                <h1 className="text-xl mt-10 font-bold"> Tasks </h1>
                <input ref={inputRef} type="text" className="mt-10 border-2 border-blue-500" />
                <button className="ml-5" onClick={handleAddTask}> Add Task</button>
                <ul className="mt-10">
                    {project.tasks ? project.tasks.map((task, taskIndex) => {
                        return (<li key={uuidv4()} className="px-5 py-3 bg-gray-100 mb-5 flex justify-between">
                            <text className="p-2">{task} </text>
                            <button className="bg-gray-200 p-2" onClick={() => deleteTask(taskIndex)}> Clear </button></li>);
                    }) : null}
                </ul>
            </div>
        </>
    )
}