import styles from './App.module.scss'
import Drawer from './components/Drawer'
import Header from './components/Header'
import Content from './components/Content'
import { useState } from 'react'

function App() {
  const [cartOpened, setCartOpened] = useState(false)
  const [cartItems, setCartItems] = useState([])

  const addItemToCartHandler = (obj) => {
    setCartItems((prev) => [...prev, obj])

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
      <Content addToCart={addItemToCartHandler} />
    </div>
  )
}

export default App
