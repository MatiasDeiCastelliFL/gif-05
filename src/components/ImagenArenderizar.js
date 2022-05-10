// import {React,useState,useEffect} from 'react'
import React from "react";
import { useRenderizarImagen } from "../hooks/useRenderizarImagen";
import ImagenesLista from './ImagenesLista';

export const ImagenArenderizar = ({ category }) => {


    const { date:images, loadin } = useRenderizarImagen(category);

    return (
        <>
            <h3>{category}</h3>
            {loadin  && <p>Loading</p>}
            <div className='card-grid'>
            
                {images.map(img => (
                    <ImagenesLista
                        key={img.id}
                        {...img} />
                ))}

            </div>
        </>
    )
}

