import React, { useState } from 'react'

function ToDoList() {
    const [job,setJob]= useState('');
    const [jobs,setJobs]= useState(()=>{
     //const stogeJobs= JSON.parse(localStorage.getItem('jobs') ?? [])   ;
     //console.log(stogeJobs)
        //return stogeJobs;   
    } )
    const handleSubmit =()=>{
        setJobs(prev =>{
            const newJobs=[...prev,job];
            const jsonJobs= JSON.stringify(newJobs);
            localStorage.setItem('jobs', jsonJobs);
            return newJobs
        })
        setJob('')
    }
  
  return (
    
    <div>
        <div>ToDoList</div>
        <input value={job} onChange={e=>e.target.value}/>
        <button onClick={handleSubmit}> Add</button>
   
    </div>
  )
}

export default ToDoList