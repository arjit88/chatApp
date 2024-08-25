import React from "react";
import "./ChatBox.css";
import assets from "../../assets/assets";

const ChatBox = () => {
  return (
    <div>
      <div className="chat-box">
        <div className="chat-user">
          <img src={assets.profile_img} alt="profile_img" />
          <p>
            Jane Doe{" "}
            <img className="dot" src={assets.green_dot} alt="green_dot" />
          </p>
          <img src={assets.help_icon} className="help" alt="help_icon" />
        </div>

        <div className="chat-msg">
          <div className="s-msg">
            <p className="msg">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </p>
            <div>
              <img src={assets.profile_img} alt="profile_img" />
              <p>19:54</p>
            </div>
          </div>

          <div className="s-msg">
            <img className="msg-img" src={assets.pic1} alt="pic1" />
            <div>
              <img src={assets.profile_img} alt="profile_img" />
              <p>19:54</p>
            </div>
          </div>

          <div className="r-msg">
            <p className="msg">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </p>
            <div>
              <img src={assets.profile_img} alt="profile_img" />
              <p>19:54</p>
            </div>
          </div>
        </div>

        <div className="chat-input">
          <input type="text" placeholder="Send a message" />
          <input type="file" id="image" accept="image/png, image/jpeg" hidden />
          <label htmlFor="image">
            <img src={assets.gallery_icon} alt="gallery_icon" />
          </label>
          <img src={assets.send_button} alt="send_button" />
        </div>
      </div>
    </div>
  );
};

export default ChatBox;
