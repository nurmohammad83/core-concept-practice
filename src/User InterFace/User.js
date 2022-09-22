import React from 'react';
import "./User.css"
const Todo = (props) => {
    const {id,userId,completed,title}=props.user
console.log(props.user);
    return (
        <div className='user'>
           <h1>Id No: {id}</h1>
            <p>{title}</p>
            <h3>User Id: {userId}</h3>
            <h5>{completed}</h5>
        </div>
    );
};

export default Todo;