import React, { useContext, useEffect , useState } from "react";
import Login from "./components/auth/Login";
import Employee from "./components/Dashboard/Employee";
import { Admin } from "./components/Dashboard/Admin";
import { getLocalStorage, setLocalStorage } from "./utils/LocalStorage";
import { AuthContext } from "./context/AuthProvider";

const App = () => {


const [user, setUser] = useState(null)
const [loggedInUserData, setLoggedInUserData] = useState(null)
const authData = useContext(AuthContext)  


useEffect(() => {
  const loggedInUser = localStorage.getItem('loggedInUser')
  
  if(loggedInUser){
    const userData = JSON.parse(loggedInUser)
    setUser(userData.role)
    setLoggedInUserData(userData.data)
  }
}, [])






const handleLogin=(email,password)=>{

  if(authData && authData.admin.find((e)=> email == e.email && password == e.password)){
    setUser('admin')
    localStorage.setItem('loggedInUser', JSON.stringify({role:'admin',}))
    // console.log(user);
    
  }
  else if(authData){
    const employee = authData.employees.find((e)=> email==e.email && e.password == password)
    if(employee){
      setUser('employee')
      setLoggedInUserData(employee)
      localStorage.setItem('loggedInUser', JSON.stringify({role:'employee' , data:employee}))

    }
  }
  else{
    alert("Invalid Credentials")
  }
}




  return (
    <div className="bg-black">
      {!user ? <Login handleLogin={handleLogin} /> : ''}
      {user === "admin" ? <Admin  changeUser={setUser} /> : (user == "employee" ? <Employee changeUser={setUser} data={loggedInUserData} /> : null) }
    </div>
  );
};

export default App;
