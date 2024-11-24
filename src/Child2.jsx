import React, { useContext } from 'react';
import { MyContext } from './App';
import Display from './Display';

const Child2 = () => {
  const { userInfo } = useContext(MyContext); 

  return (
    <div>
      <h4>Child2 Component</h4>
     <Display />
    </div>
  );
};

export default Child2;
