import Card from './Card'
import styles from './Content.module.scss'

const cards = [
  {
    sex: 'Мужские Кроссовки',
    name: 'Nike Air Max 270',
    price: 12999,
    img: '/images/sneakers/sneakers1.jpg',
  },
  {
    sex: 'Мужские Кроссовки',
    name: 'Nike Blazer Mid Suede',
    price: 15699,
    img: '/images/sneakers/sneakers2.jpg',
  },
  {
    sex: 'Мужские Кроссовки',
    name: 'Nike Blazer Mid Suede',
    price: 8999,
    img: '/images/sneakers/sneakers3.jpg',
  },
  {
    sex: 'Кроссовки Puma X',
    name: 'Aka Boku Future Rider',
    price: 9499,
    img: '/images/sneakers/sneakers4.jpg',
  },
]

function Content() {
  return (
    <div className={`${styles.content} p-40`}>
      <div
        className={`${styles.content__top} d-flex justify-between align-center`}
      >
        <h1>Все кроссовки</h1>
        <div className={`${styles.search} d-flex align-center`}>
          <img src="images/search.svg" alt="Search" />
          <input type="text" placeholder="Поиск..." />
        </div>
      </div>
      <div className={`${styles.sneakers}`}>
        {cards.map((card, i) => (
          <Card
            img={card.img}
            sex={card.sex}
            title={card.name}
            price={card.price}
            key={i}
          />
        ))}
      </div>
    </div>
  )
}

export default Content
