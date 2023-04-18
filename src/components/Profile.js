import { useState } from "react";

const Profile = () =>{

    const [count, setCount] = useState(0);

    return(
        <div>
            <h2>Profile Component</h2>
            <h3>{count}</h3>
            <button onClick={() => {setCount(1)}}>Click Me!</button>
        </div>
    )
}

export default Profile;