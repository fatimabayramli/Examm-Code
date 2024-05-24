import React, { useContext, useEffect, useState } from "react";
import { PiBowlFood } from "react-icons/pi";
import axios from "axios";
import "./Menu.scss";
import { BasketContext } from "../../context/BasketContext";
import { WishListContext } from "../../context/WishListContext";

const Menu = () => {
  const [data, setData] = useState([]);
    const {addToBasket, removeItem} = useContext(BasketContext)
    const {isWish, addToWish} = useContext(WishListContext)


  useEffect(() => {
    axios
      .get("http://localhost:5000/api/foods")
      .then((res) => {
        setData(res.data);
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []); // bu hisse yuz faiz error verecek

  return (
    <div>
      <div className="menu">
        <div className="menu-container">
          <div className="menuu">
           <div className="menu-top">
           <div className="menuicon">
              <PiBowlFood />
            </div>
            <div className="menutitle">
              <p>----------</p>
              <h3>Our Menu</h3>
              <p>----------</p>
            </div>
           </div>
            <div className="foods">
              {data.map((elem) => {
                return (
                  <div key={elem._id} className="food">
                    <div className="foodtitle">{elem.title}</div>
                    <div className="foodcontent">{elem.content}</div>
                    <div className="foodprice">{elem.price}</div>
                    <div className="actions"></div>
                        <button onClick={() => addToBasket(elem)} className="addbasket">Add to Cart</button>
                        <button onClick={() => removeItem(elem)} className="delete"></button>
                        <i onClick={()=> addToWish()} className={`fa-solid fa-heart ${isWish(elem) ? "red" : ""}`}></i>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
