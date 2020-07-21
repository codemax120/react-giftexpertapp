import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch']);

    return (
        <>
            <h2> GifExpertApp </h2>  
            <AddCategory setCategories={ setCategories } />
            <hr />
            <ol>
                {
                    // Nota el key no puede ser el indice y tiene que ser unico, es por cuestiones de optimizacion
                    categories.map( (category ) => (
                        <GifGrid key={category}  category={ category } /> 
                    ))
                }
            </ol>
        </>
    )
}
