import React from 'react'
import './ChatBox.css'
import assets from '../../assets/assets'

const ChatBox = () => {
  return (
    <div className='chat-box'>
      {/* top side */}
      <div className="chat-user">
        <img src={assets.profile_img} alt="" />
        <p>Ram thapa <img src={assets.green_dot} className='dot' alt="" /></p>
        <img src={assets.help_icon} className='help' alt="" />
      </div>

      {/* middle side */}
      <div className="chat-message">
        
        {/* for send message */}
        <div className="s-msg">
          <p className="msg">Lorem ipsum dolor sit amet consectetur .</p>
          <div>
              <img src={assets.profile_img} alt="" />
              <p>3:52 PM</p>
          </div>
        </div>
        {/* for image */}
        <div className="s-msg">
         <img src={assets.pic1} className='msg-img' alt="" />
          <div>
              <img src={assets.profile_img} alt="" />
              <p>3:52 PM</p>
          </div>
        </div>


        {/* for receive message */}
        <div className="r-msg">
          <p className="msg">Lorem ipsum dolor sit amet consectetur</p>
          <div>
              <img src={assets.profile_img} alt="" />
              <p>3:52 PM</p>
          </div>
        </div>



      </div>

      {/* button side */}
      <div className="chat-input">
        <input type="text" placeholder=' Send a message' />
        <input type="file" id='image' accept='image/png, image/jpeg' hidden />
        <label htmlFor="image">
          <img src={assets.gallery_icon} alt="" />
        </label>
        <img src={assets.send_button} alt="" />
      </div>
    </div>
  )
}

export default ChatBox