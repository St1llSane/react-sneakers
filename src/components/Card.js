import { useState } from 'react'
import styles from './Card.module.scss'

function Card({
  id,
  sex,
  title,
  price,
  img,
  favorited = false,
  addFavourite,
  addToCart,
}) {
  const [isProductAdded, setIsProductAdded] = useState(false)
  const [isFavourite, setIsFavourite] = useState(favorited)

  const addBtnChangeHandler = () => {
    setIsProductAdded(!isProductAdded)
  }

  const clickFavouriteHandler = () => {
    addFavourite({ id, sex, title, price, img })
    setIsFavourite(!isFavourite)
  }

  const addItemHandler = () => {
    addBtnChangeHandler()
    addToCart({ id, sex, title, price, img })
  }

  return (
    <div className={styles.card}>
      <img
        className={styles.card__heart}
        src={isFavourite ? 'images/heart-active.svg' : 'images/heart.svg'}
        alt="like"
        onClick={clickFavouriteHandler}
      />
      <div className="mb-15">
        <img className="mb-15" src={img} alt="sneakers" />
        <p>
          {sex} {title}
        </p>
      </div>
      <div
        className={`${styles.card__info} d-flex justify-between align-center`}
      >
        <div className={`${styles.card__infoCost} d-flex flex-column`}>
          <span className={`${styles.card__infoCost_text} text-uppercase`}>
            Цена:
          </span>
          <span className={styles.card__infoCost_summ}>{price} руб.</span>
        </div>
        <button className={styles.card__button} onClick={addItemHandler}>
          <img
            src={isProductAdded ? '/images/btn-checked.svg' : '/images/btn.svg'}
            alt="plus"
          />
        </button>
      </div>
    </div>
  )
}

export default Card
