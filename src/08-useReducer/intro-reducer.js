const initialState = [{
    id:1,
    todo:'levantarme de la cama',
    done:false
}]

const todoReducer=(state=initialState, accion={})=>{

    if(accion.type ==='[TODO] add todo'){

        return[...state, accion.payload]

    }
   
   
    return state
}

let todos = todoReducer()

const newTodo = {
    id: 2,
    todo:'tender la cama',
    done: false
}

const addTodoAction={
    type:'[TODO] add todo',
    payload: newTodo
}

todos = todoReducer(todos,addTodoAction)

console.log(todos)