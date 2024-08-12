import React, { useState } from 'react';

export function Theem() {
  const [darkTheme, setDarkTheme] = useState(false);
  
  const toggleTheme = () => {
    setDarkTheme(prevTheme => !prevTheme);
  };

  const change = {
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    transition: 'background-color 0.5s ease',
    backgroundColor: darkTheme ? '#333' : '#fff',
    color: darkTheme ? '#fff' : '#000',
  };

  const buttonStyle = {
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
    border: 'none',
    borderRadius: '5px',
    backgroundColor: '#007bff',
    color: '#fff',
    transition: 'background-color 0.3s ease',
  };

  return (
    <div style={change}>
      <button style={buttonStyle} onClick={toggleTheme}>
        Switch Theme
      </button>
    </div>
  );
}
