function Card({ src }) {
  return (
    <div className="card">
      <img className="card__heart" src="images/heart-active.svg" alt="like" />
      <div className="mb-15">
        <img className="mb-15" src={src} alt="sneakers" />
        <div>
          <p>Мужские Кроссовки</p>
          <p> Nike Blazer Mid Suede</p>
        </div>
      </div>
      <div className="card__info d-flex justify-between align-center">
        <div className="card__info-cost d-flex flex-column ">
          <span className="card__info-cost_text text-uppercase">Цена:</span>
          <span className="card__info-cost_summ">12 999 руб.</span>
        </div>
        <button className="card__button">
          <img src="/images/btn-checked.svg" alt="plus" />
        </button>
      </div>
    </div>
  )
}

export default Card
