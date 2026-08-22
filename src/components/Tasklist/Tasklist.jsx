import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

const Tasklist = ({data}) => {
  return (
    <div id='tasklist' className='flex flex-nowrap overflow-x-auto items-center justify-start gap-5  h-[55%] w-full mt-10 py-5 '>
        
        {data.tasks.map((e)=>{

        if(e.active){
            return <AcceptTask key={e.id} data={e} />
        }
        if(e.newTask){
            return <NewTask key={e.id}  data={e}/>
        }
        if(e.completed){
            return <CompleteTask key={e.id} data={e}/>
        }
        if(e.failed){
            return <FailedTask key={e.id} data={e}/>
        }

})}
        
    </div>
  )
}

export default Tasklist