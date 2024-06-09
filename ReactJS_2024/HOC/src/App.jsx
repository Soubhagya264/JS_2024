/*eslint-disable*/

import { useState } from 'react'
import './App.css'
import Auth from './Components/Auth';
import Dashboard from './Components/Dashboard';

function App() {
  const AuthDash = Auth(Dashboard);
  return (
    <>
      <AuthDash />
    </>
  )
}

export default App
