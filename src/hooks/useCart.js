import { useContext } from 'react'
import AppContext from '../context'

export const useCart = () => {
  const { cartItems, setCartItems } = useContext(AppContext)
  const totalCartPrice = cartItems.reduce((sum, obj) => sum + obj.price, 0)
  const totalCartPriceTax = Math.floor(totalCartPrice * 0.05)

  return { cartItems, setCartItems, totalCartPrice, totalCartPriceTax }
}
