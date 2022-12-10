import styles from './Drawer.module.scss'
import DrawerItem from './DrawerItem'

function Drawer({ onClickClose, cartItems }) {
  return (
    <div className={styles.fade}>
      <div className={styles.drawer}>
        <h1>
          Корзина{' '}
          <img src="/images/delete.svg" alt="Close" onClick={onClickClose} />
        </h1>
        <div className={styles.drawer__wrapper}>
          {cartItems.map((item, i) => {
            return <DrawerItem item={item} key={i} />
          })}
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
          <button className={styles.greenButton}>Оформить заказ</button>
        </div>
      </div>
    </div>
  )
}

export default Drawer
