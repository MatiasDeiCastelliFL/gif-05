import React, { useState } from 'react'
import AddCategory from './components/AddCategory';
import { ImagenArenderizar } from './components/ImagenArenderizar';


function GifExpertApp() {
    

    const [categoria,setCategoria]=useState(['One Piece']);
    const AgregarElemento = ()=>{
        // forma1
        // setCategoria(categoria.concat('bleach'));

        // forma2
        // setCategoria([...categoria, 'HuntexHunter']);
        // Forma3
            // setCategoria(['HuntexHunter',...categoria]);
    }
    return (
    <div>
        <h2>GifExpertApp </h2>

        <hr/>
        
        <button onClick={AgregarElemento}>Agregar Categoria</button>
        <AddCategory setCategoria={setCategoria}/>
            <ol>
                {
                    categoria.map(category => <ImagenArenderizar
                        key={category}
                        category={category}
                    /> 
                    )
                }
            </ol>
           
        

        
    </div>
    
  )
}

export default GifExpertApp