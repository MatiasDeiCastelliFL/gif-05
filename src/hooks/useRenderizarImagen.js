import  { useEffect, useState } from 'react'
import { obtenerImagen } from '../components/helpers/obtenerImagenes';




export const useRenderizarImagen = (category) => {
 
    const [state, setstate] = useState({
        date:[],
        loadin:true
    });

    useEffect(()=>{
        obtenerImagen(category).then(img=>{
                setstate({
                    date:img,
                    loadin:false
                });
        });
        
    });
    return state
}
