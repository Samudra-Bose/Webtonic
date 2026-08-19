import React, { useState } from "react";

const Login = ({handleLogin}) => {

  // console.log(handleLogin)


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submithandler = (e) => {
    e.preventDefault();
    
    handleLogin(email,password)

    console.log("Email is", email);
    console.log("Password is", password);

    setEmail("");
    setPassword("");
  };

  return (
    <div
      className="
    flex 
    bg-black 
    items-center 
    justify-center 
                h-screen 
                w-screen"
    >
      <div
        className="border-2  
        border-cyan-600      p-20  
        rounded-xl"
      >
        <form
          onSubmit={(e) => {
            submithandler(e);
          }}
          className="flex 
            flex-col gap-4 
            items-center 
            justify-center"
        >
          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
            className="border-2 border-cyan-600 
                px-4 py-5 text-xl text-white outline-none bg-transparent rounded-full placeholder:text-gray-300"
            type="text"
            placeholder="Enter your email"
          />

          <input
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            required
            className="border-2 border-cyan-600 
                  px-4 
                  py-5 text-xl text-white outline-none 
                  bg-transparent rounded-full placeholder:text-gray-300"
            type="password"
            placeholder="Enter your password"
          />

          <button className="mt-5 bg-cyan-600 px-4 py-5 text-xl text-white outline-none rounded-3xl ">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
