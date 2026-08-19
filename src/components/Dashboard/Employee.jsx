import React from "react";
import Header from "../others/Header";
import Task_number from "../others/Task_number";
import Tasklist from "../Tasklist/Tasklist";

const Employee = () => {
  return (
    <div className="p-10 bg-[#1C1C1C] h-screen ">
      <Header />
      <Task_number />
      <Tasklist />
    </div>
  );
};

export default Employee;
