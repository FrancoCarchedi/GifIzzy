import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ({ setCategories }) => {

  const [inputValue, setInputValue] = useState('');

  //Permite que podamos escribir en el input
  const handleInputChange = ( e ) => {
    setInputValue( e.target.value );
  }

  //Maneja el manejo de formularios para cuando se apreta el Enter y se hace un submit
  const handleSubmit = ( e ) => {
    e.preventDefault();

    if ( inputValue.trim().length > 0 ) {
      setCategories( cats => [ inputValue ] );
      setInputValue('');
    }

  }

  return (
    <div>
        <form onSubmit={ handleSubmit } className="d-flex">
          <input className="form-control"  type="text" value={ inputValue } onChange={ handleInputChange } placeholder="Busca los gifs que más te gusten" ></input>
          <button type="button" className='btn btn-dark' onClick={ handleSubmit }>Buscar</button>
        </form>
    </div>
  )
}

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired
}