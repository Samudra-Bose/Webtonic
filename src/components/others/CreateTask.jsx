import React, { useState } from 'react'

const CreateTask = () => {

const [taskTitle, setTaskTitle] = useState('')
const [taskDescritption, setTaskDescritption] = useState('')
const [taskDate, setTaskDate] = useState('')
const [assignTo, setAssignTo] = useState('')
const [category, setCategory] = useState('')


const [task, setTask] = useState([])


const submitHandler = (e)=>{
    e.preventDefault()

    setTask({taskTitle,taskDescritption,taskDate,category,active:false,newTask:true,completed:false,failed:true})
}

  return (

  <div className="p-5 bg-[#1C1C1C] mt-5 rounded">
        <form onSubmit={(e)=>{
          submitHandler(e)
        }
      }
         className="flex  w-full   flex-wrap items-center justify-around">

  <div className="w-1/2">
      <div>

            <h3 className="text-sm text-gray-300 mb-0.5">Task Title</h3>
          <input 
          value={taskTitle}
          onChange={(e)=>{
            setTaskTitle(e.target.value)
          }} 
          className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400" placeholder="Make a UI Design" />

      </div>

      <div>

          <h3 className="text-sm text-gray-300 mb-0.5">Date</h3>
          <input
          value={taskDate}
          onChange={(e)=>{
            setTaskDate(e.target.value)
          }} 
          type='date' className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400" name="" id="" />

         </div>
          <div>

          <h3 className="text-sm text-gray-300 mb-0.5">Assign to</h3>
           <input
           value={assignTo}
           onChange={(e)=>{
            setAssignTo(e.target.value)
           }} 
           className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400" placeholder="Enter your Name" />

          </div>
          <div>

          <h3 className="text-sm text-gray-300 mb-0.5">Category</h3>
          <input 
          value={category}
          onChange={(e)=>{
            setCategory(e.target.value)
          }}
          className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400" placeholder="Design, Dev, etc" />

          </div>
        </div>
        
        <div className="w-2/5 flex flex-col items-start">

            <h3 className="text-sm text-gray-300 mb-0.5">Description</h3>
          <textarea className="w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400"></textarea>
           <button className="bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 m-full">Create Task</button>

        </div>
   
        </form>
      </div>  )
}

export default CreateTask