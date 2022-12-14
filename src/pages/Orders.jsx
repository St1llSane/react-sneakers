import axios from 'axios'
import { useContext } from 'react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Card from '../components/Card'
import AppContext from '../context'
import style from './Content.module.scss'
import styles from './Favorites.module.scss'

function Orders() {
  const {} = useContext(AppContext)
  const [orders, setOrders] = useState([])
  const [itemsLoading, setItemsLoading] = useState(true)

  useEffect(() => {
    try {
      async function orders() {
        const { data } = await axios.get(
          'https://6394ae454df9248eada9af70.mockapi.io/orders'
        )
        // console.log(data.reduce((prev, obj) => [...prev, ...obj.items], []))
        setOrders(data.map((obj) => obj.items).flat())
        setItemsLoading(false)
      }
      orders()
    } catch (error) {
      alert('Ошибка')
    }
  }, [])

  return (
    <div className={`${styles.favorites} p-40`}>
      <div className={styles.favoritesTop}>
        <Link to="/" exact="true">
          <img src="images/back-btn.svg" width={35} alt="Back" title="Back" />
        </Link>
        <h2>Мои заказы</h2>
      </div>
      <div className={style.sneakers}>
        {(itemsLoading ? [...Array(7)] : orders).map((product, i) => (
          <Card {...product} isLoaded={itemsLoading} key={i} />
        ))}
      </div>
    </div>
  )
}

export default Orders
