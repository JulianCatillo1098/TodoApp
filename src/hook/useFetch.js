import React, { useEffect, useState } from 'react'




export const useFetch = (url) => {

    const [stadosHook, setStadosHook] = useState({
        data:null,
        isLoading:true,
        hasError: null
    })

    

    const getURL=async()=>{
        
        setStadosHook({
            ...stadosHook,
            data: null,
            isLoading: true
        })

        const respueta =await fetch (url)
        const data = await respueta.json()

        setStadosHook({
            data: data,
            isLoading: false,
            hasError:null
        })
    }

    useEffect(() => {
      getURL()
    }, [url])
    

  return {
    data: stadosHook.data,
    isLoading: stadosHook.isLoading,
    hasError: stadosHook.hasError,
  }
}
