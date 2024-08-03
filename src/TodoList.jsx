import { useState } from "react"

const TodoList = () => {
    const [ tasks, setTasks ] = useState([])
    const [ newTask, setNewTask ] = useState("") // state for input value

    const addTask = () => {
        // check if new input is not empty
        if (newTask.trim() !== "") {
            // add new task to array
            setTasks([...tasks, newTask]) 

            // clear input field
            setNewTask("")
        }
    }

  return (
    <>

        <div className="border-solid border-2 border-purple-400 m-2 bg-purple-950">
            <div className="flex flex-col justify-around mx-4 my-4">
                <div className="font-bold text-center text-white">
                    <h1>Get Things Done!</h1>
                </div>
            </div>

            <div className="flex justify-around p-2">
                <input type="text" 
                placeholder="What is the task today?" 
                className="border-solid border-2 p-2 
                border-purple-700 w-10/12" 
                required
                value={newTask} // set input value to new task
                onChange={(e) => setNewTask(e.target.value)} // update input state
                 />
                <button onClick={addTask} className="bg-purple-600 p-2">Add Task</button>
            </div>

            {/* New task */}
            <div className="p4">
                <ul className="border-solid border-2 border-purple-400 m-2 bg-purple-600">
                    {tasks.map((task, index) => (
                        <div className="border-solid border-2 m-2">
                            <li key={index} className="text-white p-4">{task}</li>
                            <button className="text-white p-2">X</button>
                        </div>   
                    ))}
                </ul>
            </div>

        </div>

    </>

  )
}

export default TodoList