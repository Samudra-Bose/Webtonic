import React from 'react'

const AcceptTask = () => {
  return (
 <div className='h-full w-[300px] bg-yellow-500 p-5 rounded-xl shrink-0'>

            <div className='flex justify-between items-center'>

                <h3 className='text-sm rounded-xl bg-red-600 px-3 py-1'>High</h3>
                <h4 className='text-sm'>20 Feb 2024</h4>

            </div>
            
            <h2 className='mt-5 text-2xl font-semibold'>Make a Youtube Video</h2>
            <p className='text-sm mt-2 '>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident, totam? Nemo 
            dignissimos perferendis adipisci neque!
            </p>

            <div className='flex justify-between mt-4'>
                <button className='bg-green-500 py-1 px-2 text-sm'>Mark as Completed</button>
                <button className='bg-pink-500 py-1 px-2 text-sm'>Mark as Failed</button>
            </div>

        </div>  )
}

export default AcceptTask