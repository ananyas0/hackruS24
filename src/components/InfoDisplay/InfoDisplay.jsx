import React from 'react'
import { useContext } from 'react'
import './InfoDisplay.css'
import { StoreContext } from '../../context/StoreContext'
import InfoItem from '../InfoItem/InfoItem'

const InfoDisplay = ({category}) => {

    const {info_list}= useContext(StoreContext)
  return (
    <div className ='info-display' ide='info-display'>
        <h2>Current Options</h2>
        <div className="info-display-list">
            {info_list.map((item,index)=>{
                if (category="All" || category===item.category) {
                    return <InfoItem key={index} id={item._id} name = {item.name} description={item.description} cuisine={item.cuisine} image={item.image} />
                }
            })}
        </div>
      
    </div>
  )
}

export default InfoDisplay
