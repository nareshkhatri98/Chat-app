import React from 'react'
import './LeftSideBar.css'
import assets from '../../assets/assets'

const LeftSideBar = () => {
  return (
    <div className='left-Side-Bar'>
      <div className="ls-top">
        <div className="ls-Nav">
          <img src={assets.logo} alt="" className='logo' />
          <div className="menu">
            <img src={assets.menu_icon} alt="" />
            <div className="sub-menu">
              <p>Edit Profile</p>
              <hr />
              <p>Logout</p>
            </div>
          </div>
        </div>
        <div className="ls-search">
          <img src={assets.search_icon} alt="" />
          <input type="text" placeholder='search here...' />
        </div>
      </div>
      <div className="ls-list">
       {Array(12).fill().map((item, index)=>(
         <div key={index} className="friends">
         <img src={assets.profile_img} alt="" />
         <div>
           <p>Ram thapa</p>
           <span>Hello how are your?</span>
          
         </div>
       </div>
       ))}
      </div>
    </div>
  )
}

export default LeftSideBar