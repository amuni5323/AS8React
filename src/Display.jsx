import React, { useContext } from 'react';
import { MyContext } from './App';

const Display = () => {
  const { userInfo } = useContext(MyContext); 

  return (
    <div>
      <h5>Display Component</h5>
      <p>Name: {userInfo.name}</p>
      <p>Balance: {userInfo.balance}</p>
    </div>
  );
};

export default Display;
