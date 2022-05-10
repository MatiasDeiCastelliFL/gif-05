export const obtenerImagen= async(category)=>{
    const url=`http://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=hnhb4Rf0kgwQR0eTRd3mAhcBTPqlyEGo`;
    const respuesta = await fetch(url) ;
    const {data}= await respuesta.json();

    const DatoArreglo=data.map(img=>{
         return {
             id:img.id,
             title:img.title,
             url:img.images?.downsized_medium.url
         }
    });
    return DatoArreglo;
   
    
}