import { useState, createElement } from "react"

const TodoList = () => {
    const [taskAdded, settaskAdded] = useState();
    const addTask = () => {
        // create new element with task name and task delete button
        const newTask = createElement('div')
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
                <input type="text" placeholder="What is the task today?" className="border-solid border-2 p-2 border-purple-700 w-10/12" required />
                <button onClick={addTask} className="bg-purple-600 p-2">Add Task</button>
            </div>
        </div>

    </>

  )
}

export default TodoList