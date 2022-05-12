import React from 'react'

export const GifGridItem = ( {id, title, url} ) => {

  return (
    <div className="grid-item">
      <img src={ url } alt={ title } className='img-fluid'/>
      {/* <div className='card-body'>
        <p className='card-text'> { title } </p>
      </div> */}
    </div>
  )
}
