import { useState } from 'react';
import PropTypes from 'prop-types'

export const AddCategory = ( { onNewCategory } ) => {
    
    const [inputValue, setInputValue] = useState('');

    const onInputChange = ({ target }) => {
        setInputValue( target.value );
    }

    const handleSubmit = ( event ) => {
        event.preventDefault();
        const newValue = inputValue.trim();
        if ( newValue.length <= 1 ) return;

        onNewCategory( newValue );
        setInputValue("");
    }

  return (
    <form aria-label="form" onSubmit={ handleSubmit }>
        <input
            type="text"
            placeholder="Buscar Gifs"
            value={ inputValue }
            onChange={ onInputChange }
        />
    </form>
  )
}

AddCategory.propTypes = {
    onNewCategory: PropTypes.func.isRequired
}
