import { useState } from "react"
import { v4 as uuidv4 } from 'uuid'

const TodoList = () => {
    const [newTask, setNewTask] = useState(""); // state for input value
    const [taskList, setTaskList] = useState([]); // state for task array/list 

    const addTask = () => {
        // check if input value is empty
        if (newTask.trim() !== "") {
            // add new task with a unique id
            const newTaskObj = { id: uuidv4(), text: newTask };
            setTaskList([...taskList, newTaskObj]);
            // clear the input field/value
            setNewTask("");
        }
    }

    const deleteTask = (id) => {
        // filter array to delete task by id
        const updatedTasks = taskList.filter((task) => task.id !== id);
        setTaskList(updatedTasks);
    }

    const fetchFromApi = async() => {
        const response = await fetch("http://localhost:5033/swagger/index.html")
        const parsedResponse = response.json()
        
    }

    return (
        <>
        
            <h1 className="text-center my-4">Todo Manager</h1>

            <div className="bg-green-500">
                <input 
                    type="text" 
                    placeholder="What are you doing today?"
                    className="p-2 w-3/4 bg-green-300"
                    value={newTask} // set the input value to be the new task entered
                    onChange={(e) => setNewTask(e.target.value)} // set the input text to be visible
                />

                <button
                    className="p-2"
                    onClick={addTask}
                >
                    Add Task
                </button>
            </div>

            {/* Added task */}
            <div>
                <ul>
                    {/* Map the newly added task to an <li> element */}
                    {taskList.map((task) => (
                        <div key={task.id} className="flex justify-between bg-green-300">
                            <li className="p-2">{task.text}</li>
                            <button onClick={() => deleteTask(task.id)} className="p-2">X</button>
                        </div>
                    ))}
                </ul>
            </div>

            fetchFromApi()
        </>
    );
}

export default TodoList;
