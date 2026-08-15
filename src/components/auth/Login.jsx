import React from 'react'

const Login = () => {
  return (
    <div className='flex items-center justify-center h-screen w-screen'>
        <div className='border-2 border-red-600 p-20'>
            <form className='flex flex-col items-center justify-center'>

                <input className='border-2 border-cyan-600 px-4 py-5 text-xl text-black outline-none bg-transparent rounded-full placeholder:text-white' type="text" placeholder='Enter your email' />

                <input className='border-2 border-cyan-600 px-4 py-5 text-xl text-black outline-none bg-transparent rounded-full placeholder:text-white' type="password" placeholder='Enter your password' />
                
                
                <button className=' bg-cyan-600 px-4 py-5 text-xl text-white outline-none rounded-full '>Login</button>
            </form>

        </div>

    </div>
  )
}

export default Login