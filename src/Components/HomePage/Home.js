import React from "react";
import UserForm from "../UserForm/UserForm";
import Slider from "../Sliders/Slider";
import "../HomePage/home.css";
import "../../media.css";
import Reviews from "../UsersReviews/Reviews";
// import AdminPage from "../AdminPage/AdminPage";

function Home() {
  return (
    <div>
      <Slider />
      <div className="main_info container">
        <div className="main_info_block">
          <div className="main_info_text">
          <h1>Design. Manufacture. Deliver</h1>
          <p>National  Louis University is an inclusive, innovate community providing educational opportunities that inspire and empower all learners as they prepare for and advance in meaningful lives and  productive careers.</p>
          </div>
          <h2>Everyones deserves an education  that helps them <span>reach  their potential</span>.</h2>
        </div>
        <UserForm />
        <Reviews/>
        {/* <AdminPage/> */}
      </div>
    </div>
  );
}

export default Home;
