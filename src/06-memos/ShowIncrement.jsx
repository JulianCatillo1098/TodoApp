import React, { memo } from 'react'

export const ShowIncrement =React.memo( ({elIncremento}) => {
    console.log('holaaa')
    return (
    <>
    <button
    className='btn btn-primary'
    onClick={()=> elIncremento(5)}
    >
        INCREMENTAR 
    </button>
    </>
  )
})
