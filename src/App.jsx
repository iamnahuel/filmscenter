import { useState } from 'react'
import ListadoFilms from './components/listadoFilms'
import MenuFilms from './components/menuFilms'
import Header from './components/Header'
import Footer from './components/Footer'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <MenuFilms />
      <ListadoFilms />
      <Footer />
    </>
  )
}

export default App
