import React from "react";

const Header = (props) => {
  // console.log(data)
  
const logOutUser = ()=>{
   localStorage.setItem("loggedInUser","")
   props.changeUser('')
  //  window.location.reload();
}



  return (
    <div className="flex items-end justify-between">
      <h1 className="text-white text-xxl ">
        Hello <br />
        <span className="text-2xl font-semibold text-white"> 👍</span>
      </h1>
      <button onClick={logOutUser}
      className="bg-red-600 text-lg font-medium text-white px-5 py-2 rounded">
        LogOut
      </button>

    </div>
  );
};

export default Header;
