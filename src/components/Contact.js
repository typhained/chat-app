import React from 'react';
import './Contact.css';

const avatarImg = "https://randomuser.me/api/portraits/women/40.jpg";
const name = "Typhaine DEMANGEON";

function Contact() {
  return (
    <div className="Contact">
        <img className="avatar" src={avatarImg} alt="avatar"/>
        <div>
            <p className="name">{name}</p>
            <div className="status">
                <div className="status-online"></div>
                <p className="status-text">Online</p>
            </div>
        </div>
      
    </div>
  );
}

export default Contact;
