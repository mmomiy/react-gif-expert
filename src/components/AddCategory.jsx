import { useState } from 'react'


export const AddCategory = ({ onNewCategory }) => {
     
  const [inputValue , setinputValue] = useState('');

  const onInputChange = ( {target} ) =>{ 
    setinputValue( target.value );
  }

  const onSubmit = ( event ) => { 
    event.preventDefault();
    //console.log(inputValue);
    if ( inputValue.trim().length <= 1) return;
    
    //setCategories( categories => [ inputValue,...categories] );
    onNewCategory( inputValue.trim() );
    
    setinputValue('');
  }

  return (
    //otra forma, xq solo toma el argumento que recibe y lo envia
    //<form onSubmit={ (event) => onSubmit(event) }>
    <form onSubmit={  onSubmit }>
       <input 
        type= "text"
        placeholder="Buscar gifs"
        value={ inputValue }
        onChange={ (event) => onInputChange(event) }
        />
    </form>
   
  )
}
