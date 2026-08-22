import React from "react";
import Header from "../others/Header";
import Task_number from "../others/Task_number";
import Tasklist from "../Tasklist/Tasklist";

const Employee = (props) => {
  return (
    <div className="p-10 bg-[#1C1C1C] h-screen ">
      {/* <h1>{data.id}</h1> */}


      <Header changeUser={props.changeUser} data={props.data} />
      <Task_number  data={props.data} />
      <Tasklist data={props.data} />
    </div>
  );
};

export default Employee;
