import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

  //llamada al custom hook
  const { data:images } = useFetchGifs( category );

  return (
    <div>
        <p> Mostrando resultados de: <strong> { category } </strong></p>
        
        <div className='grid'>
            {
              images.map( img => (
                <GifGridItem 
                key= { img.id }
                {...img}
                />
              ))
            }
        </div> 

    </div>
  )
}
