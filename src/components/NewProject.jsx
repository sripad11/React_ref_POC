import { forwardRef } from "react";

const NewProject = forwardRef(({ onHandleSubmit, onHandleClose }, ref) => {

    // function handleSubmit(event) {
    //     event.preventDefault();
    //     const newProjectData = new FormData(event.target);
    //     onSubmit(newProjectData);
    // }
    return (
        <>
            <dialog className="backdrop:bg-black/50" ref={ref}>
                <form className="px-10 py-5 w-[400px]" onSubmit={(event) => {
                    event.preventDefault();
                    const formData = new FormData(event.target);
                    const projectData = Object.fromEntries(formData.entries());
                    onHandleSubmit(projectData);
                }}>
                    <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b pb-2 text-center">Add Project</h2>
                    <label htmlFor="title" className="block text-gray-700 font-medium mb-2">Title</label>
                    <input type="text" id="title" name="title" placeholder="Enter title"
                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none mb-4" required/>


                    <label htmlFor="description" className="block text-gray-700 font-medium mb-2">Description</label>
                    <textarea id="description" name="description" placeholder="Enter description"
                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none mb-4 h-32" required></textarea>
                    <div className="flex justify-center gap-5">
                        <button type="submit"
                            className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition">
                            Submit
                        </button>
                        <button onClick={onHandleClose}
                            className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition">
                            Close
                        </button>
                    </div>
                </form>
            </dialog>
        </>
    )
})

export default NewProject;