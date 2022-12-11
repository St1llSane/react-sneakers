import { useState, useEffect } from 'react'
import axios from 'axios'
import styles from './App.module.scss'
import Drawer from './components/Drawer'
import Header from './components/Header'
import Content from './Home/Content'
import { Route, Routes } from 'react-router-dom'
import Favorites from './Home/Favorites'

function App() {
  const [cartOpened, setCartOpened] = useState(false)
  const [products, setProducts] = useState([])
  const [favourites, setFavourites] = useState([])
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

    axios
      .get('https://6394ae454df9248eada9af70.mockapi.io/favourites')
      .then((res) => setFavourites(res.data))
  }, [])

  const addItemToCartHandler = (obj) => {
    axios
      .post('https://6394ae454df9248eada9af70.mockapi.io/cart', obj)
      .then((res) => setCartItems((prev) => [...prev, res.data]))
  }

  const removeCardItemHandler = (id) => {
    axios.delete(`https://6394ae454df9248eada9af70.mockapi.io/cart/${id}`)
    setCartItems((prev) => prev.filter((item) => item.id !== id))
  }

  const addFavourite = async (obj) => {
    try {
      if (favourites.find((favObj) => favObj.id === obj.id)) {
        axios.delete(
          `https://6394ae454df9248eada9af70.mockapi.io/favourites/${obj.id}`
        )
        // setFavourites((prev) => prev.filter((item) => item.id !== obj.id))
      } else {
        const { data } = await axios.post(
          'https://6394ae454df9248eada9af70.mockapi.io/favourites',
          obj
        )
        setFavourites((prev) => [...prev, data])
      }
    } catch (error) {
      alert('Не удалось добавить в избранное')
      console.log(error)
    }
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
      <Routes>
        <Route
          path="/"
          element={
            <Content
              products={products}
              addFavourite={addFavourite}
              addToCart={addItemToCartHandler}
              searchInputValue={searchInputValue}
              setSearchInputValue={setSearchInputValue}
              searchInputHandler={searchInputHandler}
            />
          }
        ></Route>
      </Routes>
      <Routes>
        <Route
          path="/favorites"
          element={
            <Favorites
              products={favourites}
              setFavourites={setFavourites}
              addFavourite={addFavourite}
            />
          }
        ></Route>
      </Routes>
    </div>
  )
}

export default App
