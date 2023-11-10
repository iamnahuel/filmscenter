import React from "react";
import { useEffect, useState } from "react";
import { useFetch } from "./useFetch";


const ListadoFilms = () => {

    const { data, loading, error } = useFetch("https://pokeapi.co/api/v2/pokemon/");
    console.log(data);
    return (
        <>
            <div>
                <h3>Listado Peliculas</h3>
                <ul>
                    {error && <li>Error: {error}</li>}
                    {loading ?
                        <h5>Cargando</h5> :
                        data?.map(({ name, url }) => (
                            <li key={url}>{name}</li>
                        ))}


                </ul>
            </div>
        </>
    )
}
export default ListadoFilms;