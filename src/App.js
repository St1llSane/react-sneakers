import './App.scss'
import Card from './components/Cards'
import Drawer from './components/Drawer'
import Header from './components/Header'

function App() {
  return (
    <div className="wrapper">
      <Drawer />
      <Header />
      <div className="content p-40">
        <div className="content__top d-flex justify-between align-center">
          <h1>Все кроссовки</h1>
          <div className="search d-flex align-center">
            <img src="images/search.svg" alt="Search" />
            <input type="text" placeholder="Поиск..." />
          </div>
        </div>
        <div className="sneakers">
          <Card src={"/images/sneakers/sneakers1.jpg"}></Card>
          <Card src={"/images/sneakers/sneakers2.jpg"}></Card>
          <Card src={"/images/sneakers/sneakers3.jpg"}></Card>
          <Card src={"/images/sneakers/sneakers4.jpg"}></Card>          
        </div>
      </div>
    </div>
  )
}

export default App
