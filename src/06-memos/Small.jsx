import { memo } from "react"


export const Small =memo( ({valor}) => {
    
    console.log('soy yo otravez')
  return (
    <>
    <small>{valor}</small>
    </>
  )
})
