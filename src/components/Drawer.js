import styles from './Drawer.module.scss'

function Drawer() {
  return (
    <div style={{ display: 'none' }} className={styles.fade}>
      <div className={styles.drawer}>
        <h1>
          Корзина <img src="/images/delete.svg" alt="delete" />
        </h1>
        <div className={styles.drawer__wrapper}>
          <div className={styles.drawer__wrapperItem}>
            <img
              width={70}
              height={70}
              src="/images/sneakers/sneakers1.jpg"
              alt="sneakers"
            />
            <div className={styles.drawer__wrapperItem_content}>
              <div>
                <p>Мужские Кроссовки</p>
                <p>Nike Air Max 270</p>
              </div>
              <p className={styles.drawer__wrapperItem_content_cost}>
                12 999 руб.
              </p>
            </div>
            <button>
              <img src="/images/delete.svg" alt="delete" />
            </button>
          </div>
          <div className={styles.drawer__wrapperItem}>
            <img
              width={70}
              height={70}
              src="/images/sneakers/sneakers2.jpg"
              alt="sneakers"
            />
            <div className={styles.drawer__wrapperItem_content}>
              <div>
                <p>Мужские Кроссовки</p>
                <p>Nike Air Max 270</p>
              </div>
              <p className={styles.drawer__wrapperItem_content_cost}>
                12 999 руб.
              </p>
            </div>
            <button>
              <img src="/images/delete.svg" alt="delete" />
            </button>
          </div>
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
