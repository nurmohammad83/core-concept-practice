import React from 'react';
import './App.css'
import BlogOne from './Blog/Blog1/BlogOne';
import BlogTwo from './Blog/Blog2/BlogTwo';
import BlogThree from './Blog/Blog3/BlogThree';
// import Mobile from './Mobile/Mobile';
import Todos from './Todos/Todos';
const App = () => {
  return (
    <div>
      <h2>Welcome to Practice Section</h2>
      <article className='blog'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore dolorum officiis fugiat. Tempore provident quibusdam eius, tenetur laboriosam repellat officia?
        <p style={{color:'red',backgroundColor:'black'}}>This is paragarph</p>
        <Todos></Todos>
        <BlogOne></BlogOne>
        {/* <Mobile></Mobile> */}
        <BlogTwo></BlogTwo>
        <BlogThree></BlogThree>
      </article>
    </div>
  );
};

export default App;

