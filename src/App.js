import InputField from './components/InputField';
import React, { useState } from 'react';
import './App.css';

function App() {
  const [state, setState] = useState('');

  function setInputValue(val) {
    val = val.trim();
    if (val.length > 12) {
      return;
    }
    setState(val)
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>login</p>
        <InputField
          type='text'
          placeholder="Username"
          value={state ? state : ''}
          onChange={(state) => setInputValue(state)}
        />

      </header>
    </div>
  );
}

export default App;
