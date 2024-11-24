import React, { useContext, useState } from 'react';
import { MyContext } from './App';
import Child1 from './Child1';

function Controller() {
  const { userInfo, setUserInfo } = useContext(MyContext);

  const [inputValues, setInputValues] = useState({ name: '', balance: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserInfo(inputValues);
    setInputValues({ name: '', balance: '' });
  };

  return (
    <div>
      <h2>Controller Component</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <input
            type="text"
            name="name"
            value={inputValues.name}
            onChange={handleChange}
            placeholder="Enter Name"
            required
          />
        </div>
        
        <div className="input-group">
          <input
            type="number"
            name="balance"
            value={inputValues.balance}
            onChange={handleChange}
            placeholder="Enter Balance"
            required
          />
        </div>

        <div>
          <button type="submit">Submit</button>
        </div>
      </form>

      <Child1 />
    </div>
  );
}

export default Controller;
