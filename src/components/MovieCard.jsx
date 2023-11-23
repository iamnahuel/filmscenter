import React from "react";
import { Link } from 'react-router-dom'
import { useApp } from "../contex";
import '../styles/movieCard.css';

import { useEffect } from 'react'
//import { Link } from "react-router-dom"

const MovieCard = ({ movie }) => { //LA FUNCION de COMPONENTES NO PUEDE SER ASINCRONA 
    const { title, overview, poster_path, vote_average, vote_count, release_date, id } = movie
    const realStar = Math.round(vote_average / 2)

    const { handleSeeMovie } = useApp()


    return (
        <button className="btn-movie" onClick={(e) => handleSeeMovie(e, movie)}>
            <article className='moviecard'>
                <div className="moviecard-image">
                    <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={`Poster ${title}`} />
                </div>
                <div className='moviecard-description'>
                    <h3>{title}</h3>

                    <p>
                        {overview}
                    </p>

                    <span className="moviecard-vote">
                        ⭐ {realStar}/5
                    </span>


                </div>

            </article>
        </button>
    )
}




export default MovieCard;