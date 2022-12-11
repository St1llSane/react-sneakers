import { useState, useEffect } from 'react'
import axios from 'axios'
import styles from './App.module.scss'
import Drawer from './components/Drawer'
import Header from './components/Header'
import Content from './components/Content'

function App() {
  const [cartOpened, setCartOpened] = useState(false)
  const [products, setProducts] = useState([])
  const [cartItems, setCartItems] = useState([])
  const [searchInputValue, setSearchInputValue] = useState('')

  useEffect(() => {
    // fetch('https://6394ae454df9248eada9af70.mockapi.io/Products')
    //   .then((res) => res.json())
    //   .then((value) => setProducts(value))

    axios
      .get('https://6394ae454df9248eada9af70.mockapi.io/Products')
      .then((res) => setProducts(res.data))

    axios
      .get('https://6394ae454df9248eada9af70.mockapi.io/cart')
      .then((res) => setCartItems(res.data))
  }, [])

  const addItemToCartHandler = (obj) => {
    axios.post('https://6394ae454df9248eada9af70.mockapi.io/cart', obj)
    setCartItems((prev) => [...prev, obj])
  }

  const removeCardItemHandler = (id) => {
    axios.delete(`https://6394ae454df9248eada9af70.mockapi.io/cart/${id}`)
    setCartItems((prev) => prev.filter((item) => item.id !== id))
  }

  const searchInputHandler = (e) => {
    setSearchInputValue(e.target.value)
  }

  return (
    <div className={styles.wrapper}>
      {cartOpened ? (
        <Drawer
          onClickClose={() => setCartOpened(false)}
          cartItems={cartItems}
          removeCardItem={removeCardItemHandler}
        />
      ) : null}
      <Header onClickCart={() => setCartOpened(true)} />
      <Content
        products={products}
        addToCart={addItemToCartHandler}
        searchInputValue={searchInputValue}
        setSearchInputValue={setSearchInputValue}
        searchInputHandler={searchInputHandler}
      />
    </div>
  )
}

export default App
