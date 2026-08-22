import React from "react";
import Header from "../others/Header";
import CreateTask from "../others/CreateTask";
import AllTask from "../others/AllTask";

export const Admin = (props) => {
  return <div className="h-screen w-full p-7 ">
    <Header changeUser={props.changeUser}/>
    <CreateTask />
    <AllTask/>
  </div>
};
