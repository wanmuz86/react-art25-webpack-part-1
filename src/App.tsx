import React from 'react'

import logo from './assets/logo.png';

const App = () => {
  return (
    <div>
      {/* In JSX, when call a CSS class we use className instead of class */}
        <h1 className='heading'>Hello from React + Typescript with Webpack</h1>
        <img src={logo} alt="Logo" className='logo' />
    </div>
  )
}

export default App