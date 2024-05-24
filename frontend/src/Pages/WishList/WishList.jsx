import React, { useContext } from "react";
import { WishListContext } from "../../context/WishListContext";

const WishList = () => {
    const {wish, isWish, addToWish} = useContext(WishListContext)
  return (
    <div>
      <div className="foods">
              {wish.map((elem) => {
                return (
                  <div key={elem._id} className="food">
                    <div className="foodtitle">{elem.title}</div>
                    <div className="foodcontent">{elem.content}</div>
                    <div className="foodprice">{elem.price}</div>
                    <div className="actions"></div>
                        <button onClick={() => removeItem(elem)} className="addbasket">Remove</button>
                        <i onClick={()=>addToWish(elem)} className={`fa-solid fa-heart ${isWish(elem) ? "red" : ""}`}></i>
                  </div>
                );
              })}
            </div>
    </div>
  );
};

export default WishList;
