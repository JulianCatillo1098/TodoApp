


export const todoReducer = (initialState = [], accion) => {
    
    switch (accion.type) {
    case "agregar un nuevo objeto":
      return [...initialState, accion.payload] ;

    case "eliminar un objeto":
    return initialState.filter(objeto => objeto.id !== accion.payload)
    
    case "tachar la descripcion de un  objeto":
        return initialState.map(objeto=>{
            if(objeto.id === accion.payload){
                return {
                    ...objeto,
                    done: !objeto.done
                }
            }
            return objeto
        })


    default:
      return initialState;
  }


};
