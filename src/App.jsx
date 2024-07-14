
import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import { useLocalStorage } from './hooks/useLocalStorage'


function App() {
  const[theme, setTheme] = useLocalStorage('theme', 'light')
  return (
    <div className={`container ${theme}`}>
        <Navbar theme = {theme} setTheme = {setTheme}/>
    </div>
  )
}

export default App
