import { useContext } from "react"
import { UserContext } from "./Context/UserContext"

export const HomePage = () => {
  const {user,setUser} = useContext(UserContext)
    return (
      <>
      <h2>HomePage</h2>
      <hr/>
      <div>
        {JSON.stringify(user)}
      </div>
      <button onClick={()=>{
        setUser({
          nombre:'julian',
          apellido:'castillo'
        })
      }}>enviar objeto </button>
      </>
    )
  }