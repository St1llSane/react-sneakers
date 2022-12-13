import Card from '../components/Card'
import styles from './Content.module.scss'

function Content({
  products,
  addFavourite,
  isProductAdded,
  addToCart,
  searchInputValue,
  setSearchInputValue,
  searchInputHandler,
  itemsLoading,
}) {

  const filterSearchCards = (products) => {
    return products.filter((product) =>
      product.title.toLowerCase().includes(searchInputValue.toLowerCase())
    )
  }

  const renderItems = () => {
    return (itemsLoading ? [...Array(7)] : filterSearchCards(products)).map(
      (product, i) => (
        <Card
          {...product}
          addFavourite={(obj) => addFavourite(obj)}
          isProductAdded={isProductAdded}
          addToCart={(obj) => addToCart(obj)}
          isLoaded={itemsLoading}
          key={i}
        />
      )
    )
  }

  return (
    <div className={`${styles.content} p-40`}>
      <div
        className={`${styles.content__top} d-flex justify-between align-center`}
      >
        <h1>Все кроссовки</h1>
        <div className={`${styles.search} d-flex align-center`}>
          <img src="images/search.svg" alt="Search" />
          <input
            type="text"
            placeholder="Поиск..."
            value={searchInputValue}
            onChange={searchInputHandler}
          />
          {searchInputValue && (
            <img
              src="/images/delete.svg"
              alt="Clear"
              onClick={() => setSearchInputValue('')}
            />
          )}
        </div>
      </div>
      <div className={styles.sneakers}>{renderItems()}</div>
    </div>
  )
}

export default Content
