import Card from './Card'
import styles from './Content.module.scss'

function Content({ products, isProductAdded, addToCart }) {
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
        {products.map((product, i) => (
          <Card
            img={product.img}
            sex={product.sex}
            title={product.name}
            price={product.price}
            isProductAdded={isProductAdded}
            addToCart={(obj) => addToCart(obj)}
            key={i}
          />
        ))}
      </div>
    </div>
  )
}

export default Content
