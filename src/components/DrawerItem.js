import styles from './DrawerItem.module.scss'

// const data = [
//   {
//     img: 'images/sneakers/sneakers1.jpg',
//     sex: 'Мужские Кроссовки',
//     title: 'Nike Blazer Mid Suede',
//     cost: 12999,
//   },
//   {
//     img: 'images/sneakers/sneakers2.jpg',
//     sex: 'Мужские Кроссовки',
//     title: 'Nike Air Max 270',
//     cost: 12999,
//   },
//   {
//     img: 'images/sneakers/sneakers3.jpg',
//     sex: 'Мужские Кроссовки',
//     title: 'Nike Blazer Top Suede',
//     cost: 8499,
//   },
//   {
//     img: 'images/sneakers/sneakers4.jpg',
//     sex: 'Мужские Кроссовки',
//     title: 'Aka Boku Future Rider',
//     cost: 8999,
//   },
//   {
//     img: 'images/sneakers/sneakers5.jpg',
//     sex: 'Мужские Кроссовки',
//     title: 'Nike Blazer Mid Suede',
//     cost: 15199,
//   },
//   {
//     img: 'images/sneakers/sneakers6.jpg',
//     sex: 'Мужские Кроссовки',
//     title: 'Under Armour Curry 8',
//     cost: 11299,
//   },
//   {
//     img: 'images/sneakers/sneakers7.jpg',
//     sex: 'Мужские Кроссовки',
//     title: 'Nike Kyrie 7',
//     cost: 10799,
//   },
// ]

function DrawerItem({ item, removeCardItem }) {
  return (
    <div className={styles.drawer__wrapperItem}>
      <img width={70} height={70} src={item.img} alt="sneakers" />
      <div className={styles.drawer__wrapperItem_content}>
        <div>
          <p>{item.sex}</p>
          <p>{item.title}</p>
        </div>
        <p className={styles.drawer__wrapperItem_content_cost}>
          {item.price} руб.
        </p>
      </div>
      <button>
        <img
          src="/images/delete.svg"
          alt="delete"
          onClick={() => removeCardItem(item.id)}
        />
      </button>
    </div>
  )
}

export default DrawerItem
