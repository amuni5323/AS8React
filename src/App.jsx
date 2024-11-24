import React, { createContext, useState } from 'react';
import Controller from './Controller';


export const MyContext = createContext();

function App() {
  const [userInfo, setUserInfo] = useState({ name: '', balance: '' });

  return (
    <MyContext.Provider value={{ userInfo, setUserInfo }}>
      <div className="App">
        <Controller />
      </div>
    </MyContext.Provider>
  );
}

export default App;
