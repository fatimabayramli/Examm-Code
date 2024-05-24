import React, { createContext } from 'react'
import UseLocal from '../hooks/UseLocal'
export const BasketContext = createContext()

const BasketProvider = ({children}) => {
    const [basket, setBasket] = UseLocal("basket", [])

    const addToBasket = (item) => {
        const index = basket.findIndex(x => x._id === item._id)
        if(index === -1) {
            setBasket([...basket, {...item}]) /// burda error ola biler
        }
        setBasket([...basket])
    }

    const removeItem = (item) => {
        setBasket(basket.filter(x => x._id !== item._id) )
    }

  const data = {
        addToBasket, removeItem, basket
    }
  return (
    <BasketContext.Provider value={data}>
        {children}
    </BasketContext.Provider>
  )
}

export default BasketProvider
