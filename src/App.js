import styles from './App.module.scss'
import Drawer from './components/Drawer'
import Header from './components/Header'
import Content from './components/Content'

function App() {
  return (
    <div className={styles.wrapper}>
      <Drawer />
      <Header />
      <Content />
    </div>
  )
}

export default App
