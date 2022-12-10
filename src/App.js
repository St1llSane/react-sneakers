import { useState, useEffect } from 'react'
import styles from './App.module.scss'
import Drawer from './components/Drawer'
import Header from './components/Header'
import Content from './components/Content'

function App() {
  const [cartOpened, setCartOpened] = useState(false)
  const [products, setProducts] = useState([])
  const [cartItems, setCartItems] = useState([])

  useEffect(() => {
    fetch('https://6394ae454df9248eada9af70.mockapi.io/Products')
      .then((res) => res.json())
      .then((value) => setProducts(value))
  }, [])

  const addItemToCartHandler = (obj) => {
    setCartItems((prev) => [...prev, obj])

    console.log(products)
    console.log(cartItems)
  }

  return (
    <div className={styles.wrapper}>
      {cartOpened ? (
        <Drawer
          onClickClose={() => setCartOpened(false)}
          cartItems={cartItems}
        />
      ) : null}
      <Header onClickCart={() => setCartOpened(true)} />
      <Content products={products} addToCart={addItemToCartHandler} />
    </div>
  )
}

export default App
