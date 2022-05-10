import React, { useState } from "react";
import PropTypes from 'prop-types'




function AddCategory({setCategoria}) {
  const [inputValue, setinputValue] = useState("");

  const CambiarTexto = (e) => {
    setinputValue(e.target.value);
  };

  const EnviarFormulario=(e)=>{
      e.preventDefault();
    if(inputValue.trim().length>2){
      setCategoria(cats=>[inputValue,...cats]);
      setinputValue("");
    }
    
  }
  return (
    <form onSubmit={EnviarFormulario}>
      <input
        type="text"
        placeholder="Ingrese una categoria"
        value={inputValue}
        onChange={CambiarTexto}
      ></input>
     
    </form>
  );
}


AddCategory.propTypes = {
  setCategoria:PropTypes.func.isRequired
}

export default AddCategory;
