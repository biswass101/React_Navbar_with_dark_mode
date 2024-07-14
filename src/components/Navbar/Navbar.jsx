import React, { useState } from 'react'
import './Navbar.css'
import logo_light from '../../assets/logo-black.png'
import logo_dark from '../../assets/logo-white.png'
import search_icon_light from '../../assets/search-w.png'
import search_icon_dark from '../../assets/search-b.png'
import toggle_light from '../../assets/night.png'
import toggle_dark from '../../assets/day.png'
import ham_icom from '../../assets/hamburger-icon.png'
import dark_ham_icom from '../../assets/dak-ham.jpg'

const Navbar = ({theme, setTheme}) => {
    const toggle_mode = () => {
        console.log('clicked')
        theme == 'light'? setTheme('dark') : setTheme('light')
    }
const [navSide, setNavSide] = useState('none')
  return (
    <div className='navbar'>
        <img src={theme == 'light' ? logo_light : logo_dark} alt="" className='logo'/>

        <ul>
            <li>Home</li>
            <li>Products</li>
            <li>Features</li>
            <li>About</li>
        </ul>
        <div style={{display: navSide}} className='navSide'>
            <h3 onClick={() => setNavSide('none')} className='cancel'>X</h3>
            <div>Home</div>
            <div>Products</div>
            <div>Features</div>
            <div>About</div>
        </div>

        <div className="search-box">
            <input type="text" placeholder='Search'/>
            <img src={theme == 'light' ? search_icon_light : search_icon_dark} alt="" />
        </div>
        <img onClick={toggle_mode} src={theme == 'light' ? toggle_light : toggle_dark} alt="" className='toggle-icon'/>
        <img onClick={() => setNavSide('flex')} src={theme == 'light' ? ham_icom : dark_ham_icom} alt="" className='ham-icon'/>
    </div>
  )
}

export default Navbar