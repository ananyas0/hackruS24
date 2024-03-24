import React from 'react'
import './FoodJoints.css'
import {assets} from "../../assets/assets"

export const FoodJoints = () => {
  return (
    <div className='food-joints' id='food-joints'>
      <p>Search through Sustainable Food Joints near you!</p>
      <div className="food-joints-platforms">
      <a href='https://www.newbrunswick.com/pub/listing/restaurants_amp_eateries'>
        <img src={assets.food} alt="" />
      </a>
      </div>
    </div>
  )
}
export default FoodJoints