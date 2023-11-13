import React from "react";
import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import '../styles/movieCard.css';
import Pagination from 'react-bootstrap/Pagination';


const ListadoFilms = () => {
    const [loader, setLoader] = useState(true);
    const [movie, setMuvie] = useState();
    const [page, setPage] = useState(1);
    const [language, setLanguage] = useState("es-ES")
    const getMuvie = async () => {
        try {
            const url = `${import.meta.env.VITE_URL}?language=${language}&page=${page}`
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
                setMuvie(res.results)
                setLoader(false)
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getMuvie()
    }, [page, language]);

    //PAGINACION
    //funcion para adelantar pagination
    const handleClickNexPage = () => {
        //completar
        setPage(page + 1)
    }
    //funcion para retoceder pagination
    const handleClickRegPage = () => {
        if (page >= 2) {
            setPage(page - 1)
        }
    }

    const handleLanguajeEs = () => {
        setLanguage("es-ES")
    }
    const handleLanguajeEn = () => {
        setLanguage("en-US")
    }



    return (
        <>
            <div className="listadoFilms">
                <h1 className="titleListado">Peliculas</h1>
                <div className="languaje">
                    <button onClick={handleLanguajeEs} className="btnlanguaje">Español</button>
                    <button onClick={handleLanguajeEn} className="btnlanguaje">Ingles</button>
                </div>
                <div className="pagintation">
                    <Pagination>
                        <Pagination.Prev onClick={handleClickRegPage} />
                        {page}
                        <Pagination.Next onClick={handleClickNexPage} />
                    </Pagination>
                </div>
                <div className="films">
                    <>
                        {loader ?
                            <h5>Cargando</h5> :
                            movie?.map((movie) => (
                                console.log(movie.title),
                                <MovieCard key={movie.id} movie={movie} />
                            ))}
                    </>
                </div>

                <div className="pagintation">
                    <Pagination>
                        <Pagination.Prev onClick={handleClickRegPage} />
                        {page}
                        <Pagination.Next onClick={handleClickNexPage} />
                    </Pagination>
                </div>
            </div>
        </>
    )
}
export default ListadoFilms;