import React, { createContext } from "react";
import UseLocal from "../hooks/UseLocal";
export const WishListContext = createContext();

const WishListProvider = ({ children }) => {
  const [wish, setWish] = UseLocal("wish", []);

  const addToWish = (item) => {
    const index = wish.findIndex((x) => x._id === item._id);
    if (index === -1) {
      setWish([...wish, item]);
      return;
      /// burda error ola biler
    } else {
      remove(item);
    }
  };

  const remove = (item) => {
    setWish([...wish.filter((x) => x._id !== item._id)]);
  };

  const isWish = (item) => {
    return wish.findIndex((x) => x._id === item._id) === -1 ? false : true;
  };
  const data = {
    addToWish,
    remove,
    wish,
    isWish
  };
  return (
    <WishListContext.Provider value={data}>{children}</WishListContext.Provider>
  );
};

export default WishListProvider;
