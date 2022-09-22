import React, { useEffect, useState } from 'react';
import Todo from '../User InterFace/User';
import "./Todos.css"
const Todos = () => {
    const [fine,setTodos]=useState([])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then(res=> res.json())
        .then(data=>setTodos(data))
    },[])
    return (
        <>
            <h1>Id: {fine.length}</h1>
        <div className='alltodo'>
            {
                fine.map(todo=> <Todo user={todo}></Todo>)
            }
        </div>
        </>
    );
};

export default Todos;