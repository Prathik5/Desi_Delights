import { useContext } from "react"
import userContext from "../utils/userContext"

const Footer = () => {

  const {user} = useContext(userContext);

    return(
      <div className="bg-black">
      <h1 className="font-bold text-white"> This site is developed by {user.name} - {user.email}</h1>
        {/* <h2 className="text-white">Footer</h2> */}
      </div>
    )
  }

export default Footer