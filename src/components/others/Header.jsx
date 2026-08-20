import React from "react";

const Header = ({data}) => {
  console.log(data)
  
  return (
    <div className="flex items-end justify-between">
      <h1 className="text-white text-xxl ">
        Hello <br />
        <span className="text-2xl font-semibold text-white">{data.firstName} 👍</span>
      </h1>
      <button className="bg-red-600 text-lg font-medium text-white px-5 py-2 rounded">
        LogOut
      </button>

    </div>
  );
};

export default Header;
