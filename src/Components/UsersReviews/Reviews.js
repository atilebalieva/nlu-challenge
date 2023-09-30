import React, { useState } from 'react';
import {FaRegPlayCircle} from 'react-icons/fa';
import '../UsersReviews/reviews.css';

function Reviews({icon, name, position}) {
   const link = "https://media.geeksforgeeks.org/wp-content/uploads/20200513195558/Placement100-_-GeeksforGeeks-1.mp4";
   const [modalOpen, setModalOpen] = useState(false);
   const handleOpen = () => {
      setModalOpen(!modalOpen)
   }

   const handleClose = () =>{
      setModalOpen(!modalOpen);
   }
   return (
    <div className="reviews_container">
      <div className="review_video">
         <FaRegPlayCircle className="play_icon" onClick={handleOpen}/>
         <img src={icon} alt="icon" />
         <div className={`modal ${modalOpen ? "modal_open" : ""}`}>
             <button className="modal_close" onClick={handleClose}>×</button>
             <div className="modal_overlay"></div>
             <div className="modal_content modal_content-video">
               <iframe src={link} title="video" className="iframe_video"></iframe>
            </div>
          </div>
      </div>
      <div className="review-text">
         <p>"Lorem ipsum dolor sit orem ipsuObcaeoluptas dolorem nobis aperiam alias voluptates.</p>
         <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel, aliquid."</p>
      </div>
      <div>
         <p className="users-name">{name}</p>
         <p>{position}</p>
      </div>
    </div>
  )
}

export default Reviews;