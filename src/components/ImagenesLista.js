import React from 'react'

const ImagenesLista = ({id,title,url}) => {
    
  return (
    <div className='card animate__backInUp'>
        
            <img src={url} alt='Imagen no encontrada'/>
            <p>{title}</p>
        
    </div>
  )
}

export default ImagenesLista