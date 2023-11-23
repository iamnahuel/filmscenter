import ListadoFilms from './components/ListadoFilms'
import Header from './components/Header'
import Footer from './components/Footer'
import Movie from './components/Movie'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import Provider, { } from './contex'

function App() {
  return (

    <>
      <BrowserRouter>
        <Provider>
          <Header />
          <Routes>
            <Route exact path='/' element={<ListadoFilms />} />
            <Route path='/Movie' element={<Movie />} />
          </Routes>
          <Footer />
        </Provider>
      </BrowserRouter>

    </>
  )
}

export default App
