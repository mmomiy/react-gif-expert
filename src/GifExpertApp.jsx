import { useState } from 'react';
import { AddCategory, GifGrid } from './components'; 

export const GifExpertApp = () => {
    
    const [ categories, setcategories ] = useState(['One Punch']);

    const onAddCategory = ( newCategory )=>{
        if ( categories.includes( newCategory )) return;
      
        //copia el arreglo actual y añade Candy
       setcategories([ newCategory,...categories] );
    }

  return (
    <>
        {/* titulo */}
        <h1>GifExpertApp</h1>

        {/* Input */}
        <AddCategory  
          onNewCategory = { (value) => onAddCategory(value) } 
        />

        {/* Listado de Gif */} 
        {categories.map( (category) => 
          (
            <GifGrid 
              key = { category } 
              category = {category}/>
          )
          ) 
        }
              
    </>
  )
}
