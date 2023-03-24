import { useContext } from "react"
import { UserContext } from "./Context/UserContext"

export const LoginPage = () => {
 const {user} = useContext(UserContext)
    return  (
      <>
      <h2>LoginPage</h2>
      <hr/>
      <div>
        {JSON.stringify(user)}
      </div>
      </>
    )
  }