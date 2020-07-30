import React from 'react';
import './Contact.css';

const avatarImg = "https://randomuser.me/api/portraits/women/40.jpg";
const name = "Typhaine DEMANGEON";
const isOnline = true;

function Contact() {
  return (
    <div className="Contact">
        <img className="avatar" src={avatarImg}/>
        <div>
            <p className="name">{name}</p>
            <div className="status">
                <p className="status-online"></p>
            </div>
        </div>
      
    </div>
  );
}

export default Contact;
