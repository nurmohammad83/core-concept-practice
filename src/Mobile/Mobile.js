import React, { useState } from 'react';
import './Mobile.css'
const Mobile = () => {
    const [count,setCount]= useState(100)
    console.log(count);
    const decrecces= ()=>setCount(count - 10);
    if(count <= 0){
     return   alert('Rechareg')
    
    }
    return (
        <div className='mobile'>
           <h1> Recharge Your Down Battery : {count}</h1>
           <button onClick={decrecces}>Battery Down</button>
        </div>
    );
};

export default Mobile;