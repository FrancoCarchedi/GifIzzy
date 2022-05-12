import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid'

export const GifExpertApp = () => {

  const [categories, setCategories] = useState([''])

  //const handleAdd = () => {
  //  setCategories( [...categories, 'Bulma'] )
  //}


  return (
    <div className="container" >
        <h2>GifIzzy</h2>
        <AddCategory setCategories={ setCategories }></AddCategory>
        <hr></hr>

        <ol>
          {
            categories.map( category => 
              <GifGrid
                key={ category }
                category={ category }></GifGrid>
            )
          }
        </ol>
    </div>
  )
}
