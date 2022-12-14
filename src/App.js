import { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import AppContext from './context'
import axios from 'axios'
import styles from './App.module.scss'
import Drawer from './components/Drawer'
import Header from './components/Header'
import Content from './pages/Content'
import Favorites from './pages/Favorites'
import Orders from './pages/Orders'

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
      try {
        const [itemsResponse, cartItemsResponse, favoritesResponse] =
          await Promise.all([
            axios.get('https://6394ae454df9248eada9af70.mockapi.io/Products'),
            axios.get('https://6394ae454df9248eada9af70.mockapi.io/cart'),
            axios.get('https://6394ae454df9248eada9af70.mockapi.io/favourites'),
          ])

        setItemsLoading(false)

        setFavourites(favoritesResponse.data)
        setCartItems(cartItemsResponse.data)
        setProducts(itemsResponse.data)
      } catch (error) {
        alert('Ошибка при запросе данных')
      }
    }

    fetchData()
  }, [])

  const addItemToCartHandler = (obj) => {
    try {
      const findItem = cartItems.find((item) => +item.parentId === +obj.id)
      if (findItem) {
        axios.delete(
          `https://6394ae454df9248eada9af70.mockapi.io/cart/${findItem.id}`
        )
        setCartItems((prev) =>
          prev.filter((item) => +item.parentId !== +obj.id)
        )
      } else {
        axios
          .post('https://6394ae454df9248eada9af70.mockapi.io/cart', obj)
          .then((res) => setCartItems((prev) => [...prev, res.data]))
      }
    } catch (error) {
      alert('Ошибка при добавлении в корзину')
    }
  }

  const removeCardItemHandler = (id) => {
    try {
      axios.delete(`https://6394ae454df9248eada9af70.mockapi.io/cart/${id}`)
      setCartItems((prev) => prev.filter((item) => +item.id !== +id))
    } catch (error) {
      alert('Ошибка при удалении товара из корзины')
    }
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
    return cartItems.some((obj) => +id === +obj.parentId)
  }

  return (
    <AppContext.Provider
      value={{
        favourites,
        addFavourite,
        isItemAdded,
        cartItems,
        setCartItems,
      }}
    >
      <div className={styles.wrapper}>
        <Drawer
          onClickClose={() => setCartOpened(false)}
          cartItems={cartItems}
          removeCardItem={removeCardItemHandler}
          opened={cartOpened}
        />
        <Header onClickCart={() => setCartOpened(true)} cartItems={cartItems} />
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
        <Routes>
          <Route path="/orders" element={<Orders />}></Route>
        </Routes>
      </div>
    </AppContext.Provider>
  )
}

export default App
