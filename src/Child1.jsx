import React, { useContext } from 'react';
import { MyContext } from './App';
import Child2 from './Child2';

const Child1 = () => {
  const { userInfo } = useContext(MyContext); 

  return (
    <div>
      <h3>Child1 Component</h3>
      <Child2 />
    </div>
  );
};

export default Child1;
