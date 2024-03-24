import React from 'react'
import { useState, useContext } from 'react';
import './home.css'
import Header from '../../components/Header/Header'
import ExploreOrganizations from '../../components/ExploreOrganizations/ExploreOrganizations';
import InfoDisplay from '../../components/InfoDisplay/InfoDisplay';
import FoodJoints from '../../components/FoodJoints/FoodJoints';
const Home = () => {

        const [category,setCategory] = useState("All");

  return (
    <div>
        <Header/>
        <ExploreOrganizations category={category} setCategory={setCategory}/>
        <InfoDisplay category={category}/>
        <FoodJoints/>
    </div>
  )
}

export default Home
