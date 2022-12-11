import styles from './Drawer.module.scss'
import DrawerItem from './DrawerItem'

function Drawer({ onClickClose, cartItems, removeCardItem }) {
  return (
    <div className={styles.fade}>
      <div className={styles.drawer}>
        <h1>
          Корзина{' '}
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
            <div className={styles.drawer__wrapper_empty}>
              <img width={180} src="images/cart-empty.jpg" alt="Empty" />
              <h4>{`Корзина пуста :(`}</h4>
            </div>
          )}
        </div>
        <div className={styles.drawer__bottom}>
          <ul>
            <li>
              <p>Итого:</p>
              <div></div>
              <span>21 498 руб.</span>
            </li>
            <li>
              <p>Налог 5%: </p>
              <div></div>
              <span>1074 руб.</span>
            </li>
          </ul>
          <button className={styles.greenButton} disabled={!cartItems.length}>
            Оформить заказ
          </button>
        </div>
      </div>
    </div>
  )
}

export default Drawer
