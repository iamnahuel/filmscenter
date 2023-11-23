import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const AppCpntext = createContext();
//minuto 23:49
const Provider = ({ children }) => {

    const [loader, setLoader] = useState(false);
    const [movieEs, setMuviees] = useState([]);
    const [page, setPage] = useState(1);
    const [movie, setMovie] = useState({})
    const navigate = useNavigate()





    const infiniteScroll = (e) => {
        e.preventDefault()
        if ((Math.ceil(window.innerHeight + document.documentElement.scrollTop) === (document.documentElement.offsetHeight)) && !loader) {
            setPage(page + 1)
        }
    }

    const getMuvieEs = async () => {
        try {
            const url = `${import.meta.env.VITE_URL}?language=es-ES&page=${page}`
            const config = {
                method: "GET",
                headers: {
                    'content-type': 'application/json',
                    'authorization': `Bearer ${import.meta.env.VITE_TOKEN}`
                },
            }

            const req = await fetch(url, config)
            if (req.status == 200) {
                const res = await req.json();
                if (movieEs.length === 0) {
                    setMuviees(res.results)
                } else {
                    const nuevoArray = movieEs.concat(res.results) // forma más legible
                    setMuviees(nuevoArray)
                }
            }
        } catch (error) {
            console.log(error);
        } finally {
            setLoader(false)
        }
    }


    const handleSeeMovie = (e, pelicula) => {
        e.preventDefault()
        setMovie(pelicula)
        navigate("/Movie")
      
    }
    useEffect(() => {
        getMuvieEs()
        window.addEventListener('scroll', infiniteScroll)
    }, [page]);





    return (
        <AppCpntext.Provider value={{
            movieEs, loader, page, handleSeeMovie,
            movie

        }}>
            {children}

        </AppCpntext.Provider>
    )
}




export const useApp = () => {
    return useContext(AppCpntext)
}

export default Provider;