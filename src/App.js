import InputField from './components/InputField';
import React, { useState } from 'react';

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function setInputValue(setVal, val) {
    val = val.trim();
    if (val.length > 12) {
      return;
    }
    setVal(val)
  }

  return (
    <div class="bg-blue-900 bg-opacity-50 flex h-screen">
      <div class="mix-blend-overlay m-auto p-5 rounded-full shadow-outter">
        <p class="mix-blend-overlay text-gray-100 text-center p-1">login</p>
        <div class="text-gray-100">
          <InputField
            type='text'
            placeholder="Username"
            value={username ? username : ''}
            onChange={(username) => setInputValue(setUsername, username)}
          />
        </div>
        <div class="">
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
