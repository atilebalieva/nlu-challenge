import React from 'react';
import icon1 from '../../images/user-icon.png';
import icon2 from '../../images/user-icon-2.png';
import icon3 from '../../images/user-icon-3.png';
import Reviews from '../UsersReviews/Reviews';

function ReviewsSlider() {
   
   return (

    <div>
       <Reviews icon={icon1} name={'Damen K.'} position={manager}/>
         <Reviews icon={icon2} name={'Rosy S.'}position={manager}/>
         <Reviews icon={icon3} name={'Kim R.'}position={manager}/>
    </div>
      
    );
}

export default ReviewsSlider;