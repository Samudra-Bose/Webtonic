import React from "react";
import Header from "../others/Header";
import Task_number from "../others/Task_number";
import Tasklist from "../Tasklist/Tasklist";

const Employee = ({data}) => {
  return (
    <div className="p-10 bg-[#1C1C1C] h-screen ">
      <h1>{data.id}</h1>
      <Header data={data} />
      <Task_number  data={data} />
      <Tasklist data={data} />
    </div>
  );
};

export default Employee;
