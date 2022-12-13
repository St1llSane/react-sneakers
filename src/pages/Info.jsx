import styles from './Info.module.scss'

function Info({img, width, title}) {
  return (
    <div className={styles.drawer__wrapper_empty}>
      <img width={width} src={img} alt="Empty" />
      <h4>{title}</h4>
    </div>
  )
}

export default Info
