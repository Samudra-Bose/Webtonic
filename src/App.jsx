import React, { useEffect , useState } from "react";
import Login from "./components/auth/Login";
import Employee from "./components/Dashboard/Employee";
import { Admin } from "./components/Dashboard/Admin";
import { getLocalStorage, setLocalStorage } from "./utils/LocalStorage";

const App = () => {


const [user, setUser] = useState(null)

const handleLogin=(email,password)=>{

  if(email=="admin@me.com" && password =="123"){
    setUser('admin')
    console.log(user);
    
  }
  else if(email=="user@me.com" && password=="123"){
    setUser('employee')
    console.log(user)
  }
  else{
    alert("Invalid Credentials")
  }
}


  return (
    <div className="bg-black">
      {!user ? <Login handleLogin={handleLogin} /> : ''}
      {user == 'admin' ? <Admin /> : "" }
      {user == 'employee' ? <Employee /> : "" }

    </div>
  );
};

export default App;
