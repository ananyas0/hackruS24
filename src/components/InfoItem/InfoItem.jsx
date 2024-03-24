import React, { useContext} from 'react'
import './InfoItem.css'
import assets from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext'
const InfoItem = ({id,name,cuisine,description,image}) => {

    const{cartItems, addToCart, removeFromCart} = useContext(StoreContext);


  return (
    <div className='info-item'>
        <div className="info-item-img-container">
            <img className='info-item-image' src={image} alt="" />
            {!cartItems[id]
            ?<img className= 'add' onClick={()=>addToCart(id)} src={assets.plus} alt="" />
            :<div className='info-item-counter'>
                <img onClick={()=>removeFromCart(id)} src={assets.minus} alt="" />
                <p>{cartItems[id]}</p>
                <img onClick={()=>addToCart(id)} src={assets.plus} alt="" />
            </div>
            }
        </div>
      <div className="info-item-more">
        <div className="info-item-name-rating">
            <p>{name}</p>
            <img src={assets.rating} alt =""/>
        </div>
        <p className="info-item-desc">{description}</p>
        <p className="info-item-cuisine">{cuisine}</p>
      </div>
    </div>
  )
}

export default InfoItem
