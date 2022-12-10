import styles from './DrawerItem.module.scss'

function DrawerItem({ item }) {
  return (
    <div className={styles.drawer__wrapperItem}>
      <img width={70} height={70} src={item.img} alt="sneakers" />
      <div className={styles.drawer__wrapperItem_content}>
        <div>
          <p>{item.sex}</p>
          <p>{item.title}</p>
        </div>
        <p className={styles.drawer__wrapperItem_content_cost}>{item.price} руб.</p>
      </div>
      <button>
        <img src="/images/delete.svg" alt="delete" />
      </button>
    </div>
  )
}

export default DrawerItem
