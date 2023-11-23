import React from "react";
import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import '../styles/movieCard.css';
import { useApp } from "../contex";


const ListadoFilms = () => {
const {loader, movieEs} = useApp()


    return (
        <>
            <div className="listadoFilms">

                <div className="films">
                    {loader ?
                        <h5>Cargando</h5> :
                        movieEs?.map((movie) => (
                            <MovieCard key={movie.id} movie={movie} />
                        ))}
                </div>
            </div>
        </>
    )
}
export default ListadoFilms;