import InputField from './components/InputField';
import React, { useState } from 'react';

function App() {
  let inputParams = "text-gray-100 placeholder-gray-100 text-center mix-blend-overlay bg-gray-500 bg-opacity-50 flex shadow-inner font-sans rounded-3xl m-3 p-3 justify-center"
  const [mouseDown, setMouseDown] = useState(inputParams);
  const [mouseDownP, setMouseDownP] = useState("placeholder-gray-100 text-center mix-blend-overlay bg-gray-500 bg-opacity-50 flex shadow-inner font-sans rounded-3xl m-3 p-3 justify-center");
  const [mouseDownC, setMouseDownC] = useState("mix-blend-overlay m-auto p-5 rounded-full shadow-outter");
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function setInputValue(setVal, val) {
    val = val.trim();
    if (val.length > 12) {
      return;
    }
    setVal(val)
  }

  function setMouse(val, pass) {
    if (val) {
      setMouseDown("transition duration-1000 ease-in-out shadow-none text-gray-100 placeholder-gray-100 text-center mix-blend-overlay bg-transparent flex shadow-inner font-sans rounded-3xl m-3 p-3 justify-center")
    }
    if (pass) {
      setMouseDownP("transition duration-1000 ease-in-out shadow-none placeholder-gray-100 text-center mix-blend-overlay bg-transparent flex shadow-inner font-sans rounded-3xl m-3 p-3 justify-center")
    }

    if (val && pass) {
      setMouseDownC("transition duration-1000 ease-in-out shadow-none mix-blend-overlay m-auto p-5 rounded-full")

    }
    return;
  }


  return (
    <div onMouseDown={() => setMouse(username, password)} class="bg-green-900 bg-opacity-50 flex h-screen">
      <div class={mouseDownC}>
        <p class="text-xl underline mix-blend-overlay text-gray-100 text-center p-1">Login</p>
        <div class={mouseDown}>
          <InputField
            type='text'
            placeholder="Username"
            value={username ? username : ''}
            onChange={(username) => setInputValue(setUsername, username)}
          />
        </div>
        <div class={mouseDownP}>
          <InputField
            type='password'
            placeholder="Password"
            value={password ? password : ''}
            onChange={(password) => setInputValue(setPassword, password)}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
