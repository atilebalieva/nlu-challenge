import React, { useEffect, useState } from 'react';
import icon1 from '../../images/user-icon.png';
import icon2 from '../../images/user-icon-2.png';
import icon3 from '../../images/user-icon-3.png';
import {FaRegStar} from 'react-icons/fa';
import {FaRegPlayCircle} from 'react-icons/fa';
import '../UsersReviews/reviews.css';

function Reviews() {
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
         <img src={icon1} alt="icon1" />
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
         <p className="users-name">Client-1</p>
         <div>
            <FaRegStar className="star_icon"/>
            <FaRegStar className="star_icon"/>
            <FaRegStar className="star_icon"/>
            <FaRegStar className="star_icon"/>
            <FaRegStar className="star_icon"/>
         </div>
      </div>
    </div>
  )
}

export default Reviews