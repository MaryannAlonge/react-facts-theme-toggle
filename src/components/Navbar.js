import React from 'react'

export default function Navbar(props) {
  return (
   <nav className={props.darkMode ? "dark": ""}>
    <img src={require("../images/react-logo.png")} alt="" className='nav--icon'/>
    <h3 className='nav--logo_text'>ReactFacts</h3>
    <div className="toggler">
      <p className='toggler--light'>Light</p>
      <div className="toggler--slider" onClick={props.toggleDarkMode}>
        <div className="toggler--slider--circle"></div>

      </div>
      <p className="toggler--dark"></p>
    </div>
   </nav>
  )
}
