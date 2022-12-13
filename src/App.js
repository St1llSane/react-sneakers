import { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import AppContext from './context'
import axios from 'axios'
import styles from './App.module.scss'
import Drawer from './components/Drawer'
import Header from './components/Header'
import Content from './pages/Content'
import Favorites from './pages/Favorites'

function App() {
  const [cartOpened, setCartOpened] = useState(false)
  const [products, setProducts] = useState([])
  const [favourites, setFavourites] = useState([])
  const [cartItems, setCartItems] = useState([])
  const [searchInputValue, setSearchInputValue] = useState('')
  const [itemsLoading, setItemsLoading] = useState(true)

  useEffect(() => {
    // fetch('https://6394ae454df9248eada9af70.mockapi.io/Products')
    //   .then((res) => res.json())
    //   .then((value) => setProducts(value))

    async function fetchData() {
      const itemsResponse = await axios.get(
        'https://6394ae454df9248eada9af70.mockapi.io/Products'
      )
      const cartItemsResponse = await axios.get(
        'https://6394ae454df9248eada9af70.mockapi.io/cart'
      )
      const favoritesResponse = await axios.get(
        'https://6394ae454df9248eada9af70.mockapi.io/favourites'
      )

      setItemsLoading(false)

      setFavourites(favoritesResponse.data)
      setCartItems(cartItemsResponse.data)
      setProducts(itemsResponse.data)
    }

    fetchData()
  }, [])

  const addItemToCartHandler = (obj) => {
    if (cartItems.find((item) => +item.id === +obj.id)) {
      axios.delete(`https://6394ae454df9248eada9af70.mockapi.io/cart/${obj.id}`)
      setCartItems((prev) => prev.filter((item) => +item.id !== +obj.id))
    } else {
      axios
        .post('https://6394ae454df9248eada9af70.mockapi.io/cart', obj)
        .then((res) => setCartItems((prev) => [...prev, res.data]))
    }
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
        setFavourites((prev) => prev.filter((item) => +item.id !== +obj.id))
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

  const isItemAdded = (id) => {
    return cartItems.some((obj) => +id === +obj.id)
  }

  return (
    <AppContext.Provider
      value={{ favourites, addFavourite, isItemAdded, setCartItems }}
    >
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
                cartItems={cartItems}
                products={products}
                addFavourite={addFavourite}
                addToCart={addItemToCartHandler}
                searchInputValue={searchInputValue}
                setSearchInputValue={setSearchInputValue}
                searchInputHandler={searchInputHandler}
                itemsLoading={itemsLoading}
              />
            }
          ></Route>
        </Routes>
        <Routes>
          <Route path="/favorites" element={<Favorites />}></Route>
        </Routes>
      </div>
    </AppContext.Provider>
  )
}

export default App
