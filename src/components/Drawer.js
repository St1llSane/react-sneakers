import axios from 'axios'
import { useState } from 'react'
import { useCart } from '../hooks/useCart'
import Info from '../pages/Info'
import styles from './Drawer.module.scss'
import DrawerItem from './DrawerItem'

// const delay = new Promise((resolve) => setTimeout(resolve, 1000))

function Drawer({ onClickClose, removeCardItem }) {
  const { cartItems, setCartItems, totalCartPrice, totalCartPriceTax } =
    useCart()
  const [isOrderComplete, setIsOrderComplete] = useState(false)
  const [orderId, setOrderId] = useState(null)

  // const totalCartPriceTax = (totalCartPrice - totalCartPrice * 0.95).toFixed(2)

  const onSendOrder = async () => {
    try {
      const { data } = await axios.post(
        'https://6394ae454df9248eada9af70.mockapi.io/orders',
        { items: cartItems }
      )
      setOrderId(data.id)
      setIsOrderComplete(true)
      setCartItems([])

      // for (let i = 0; i < cartItems.length; i++) {
      //   const item = cartItems[i]
      //   await axios.delete(
      //     `https://6394ae454df9248eada9af70.mockapi.io/cart/${item.id}`
      //   )
      //   await delay()
      // }
    } catch (eror) {
      alert('Ошибка при создании заказа')
    }
  }

  return (
    <div className={styles.fade}>
      <div className={styles.drawer}>
        <h1>
          Корзина
          <img src="/images/delete.svg" alt="Close" onClick={onClickClose} />
        </h1>
        <div className={styles.drawer__wrapper}>
          {cartItems.length > 0 ? (
            cartItems.map((item, i) => {
              return (
                <DrawerItem
                  item={item}
                  key={i}
                  removeCardItem={removeCardItem}
                />
              )
            })
          ) : (
            <Info
              img={
                isOrderComplete
                  ? 'images/order-complete.jpg'
                  : 'images/cart-empty.jpg'
              }
              width={isOrderComplete ? '83px' : '150px'}
              title={
                isOrderComplete
                  ? `Заказ ${orderId} оформлен!`
                  : 'Корзина пуста :('
              }
            />
          )}
        </div>
        <div className={styles.drawer__bottom}>
          <ul>
            <li>
              <p>Итого:</p>
              <div></div>
              <span>{totalCartPrice} руб.</span>
            </li>
            <li>
              <p>Налог 5%: </p>
              <div></div>
              <span>{totalCartPriceTax} руб.</span>
            </li>
          </ul>
          <button
            className={styles.greenButton}
            disabled={!cartItems.length}
            onClick={onSendOrder}
          >
            Оформить заказ
          </button>
        </div>
      </div>
    </div>
  )
}

export default Drawer
