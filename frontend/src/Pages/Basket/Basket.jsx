import React, { createContext } from 'react'
import { BasketContext } from '../../context/BasketContext';

const Basket = () => {
    const {basket, removeItem} = createContext(BasketContext)
  return (
    <div>
      <div className="foods">
              {basket.map((elem) => {
                return (
                  <div key={elem._id} className="food">
                    <div className="foodtitle">{elem.title}</div>
                    <div className="foodcontent">{elem.content}</div>
                    <div className="foodprice">{elem.price}</div>
                    <div className="actions"></div>
                        <button onClick={() => removeItem(elem)} className="addbasket">Remove</button>
                        <i className={`fa-solid fa-heart ${isWish(elem) ? "red" : ""}`}></i>
                  </div>
                );
              })}
            </div>
    </div>
  )
}

export default Basket
