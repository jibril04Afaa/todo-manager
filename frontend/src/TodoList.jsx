import { useState } from "react"


const TodoList = () => {
    const [ tasks, setTasks ] = useState([]) // state for list of tasks
    const [ newTask, setNewTask ] = useState("") // state for new task (input value)

    const addTask = () => {
        // check if input value is empty
        if (newTask.trim() !== "") {
            // add new task to list of tasks with spread operator
            setTasks([...tasks, newTask])
            // clear the input value field
            setNewTask("")
        }
    }

  return (
    <>
        <div className="border-solid border-2 border-purple-600 p-4">
        <h1 className="text-center font-bold">Get Things Done! </h1>

            <div className="flex justify-between p-2">
                <input 
                type="text" 
                placeholder="What is the task today?"
                className="w-9/12 border-solid border-2 border-purple-600" 
                value={newTask} // set the input value to be the new task
                onChange={(e) => setNewTask(e.target.value)} // make the input text visible
                />

                <button 
                onClick={addTask}
                className="p-2 border-solid border-2 border-purple-600 bg-purple-500">
                    Add Task
                </button>
            </div>
        </div>

        {/* New Task */}

        <div className="border-solid border-2 border-purple-500 my-4">
            <ul>
                {/* map task into li element and give an index as the key */}
                {tasks.map((newTask, index) => 
                <div className="flex justify-between m-2">
                    <li key={index} className="p-2">{newTask}</li>
                    <button className="text-lg">X</button>
                </div>
                )}

                
            </ul>
        </div>
    </>


    
  )
}

export default TodoList