import React from "react";

const Task_number = ({data}) => {
  return (
    <div className="flex justify-between mt-10 gap-7 ">

      <div className="rounded-xl w-full py-6 px-9 bg-yellow-700">

        <h2 className="text-3xl font-semibold"> {data.taskCounts.newTask} </h2>
        <h3 className="text-xl font-medium">New Task</h3>
        
      </div>


      <div className="rounded-xl w-full py-6 px-9 bg-red-700">

        <h2 className="text-3xl font-semibold">{data.taskCounts.completed}</h2>
        <h3 className="text-xl font-medium">Completed Task</h3>
        
      </div>


      <div className="rounded-xl w-full py-6 px-9 bg-cyan-700">

        <h2 className="text-3xl font-semibold">{data.taskCounts.active}</h2>
        <h3 className="text-xl font-medium">Accepted Task</h3>
        
      </div>


      <div className="rounded-xl w-full py-6 px-9 bg-purple-700">

        <h2 className="text-3xl font-semibold">{data.taskCounts.failed}</h2>
        <h3 className="text-xl font-medium">Failed Task</h3>
        
      </div>



    </div>
  );
};

export default Task_number;
