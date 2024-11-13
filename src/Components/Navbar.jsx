import React from 'react'

import UserImg from '../Image/myemoji2.png'

function Navbar() {
  return (
    <>
    <nav className="navbar">
        <div className="logo">
           <p>Logo</p> 
        </div>
        <div className="searchbar">
            
            <input type="text" className='searchinputbar' />
            <img src="" alt="" className='searchicon'/>
        </div>
        <div className="userlogo">
            <img src={UserImg} alt="" />
        </div>
    </nav>
    
    </>
  )
}

export default Navbar