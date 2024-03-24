import React from 'react'
import './ExploreOrganizations.css'
import { organizations_list } from '../../assets/assets'

const ExploreOrganizations = ({ category, setCategory })  => {

  return (
    <div className='explore-organizations' id='explore-organizations'>
      <h1>Available Organizations Supporting Sustainability</h1>
      <p className='explore-organizations-text'>Choose from an organization whom you would like to buy a discounted meal from and support the cause of sustainability</p>
      <div className="explore-organizations-list">
        {organizations_list.map((item, index) => {
          return (
            <div onClick={() => setCategory(prev => prev === item.organizations_name ? "All" : item.organizations_name)} key={index} className='explore-organizations-list-item'>
              <img className={category === item.organizations_name ? "active" : ""} src={item.organizations_image} alt="" />
              <p>{item.organizations_name}</p>
            </div>
          )
        })}
      </div>
      <hr />
    </div>
  )
}

export default ExploreOrganizations
