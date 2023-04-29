import React, {useEffect, useState} from 'react';


const useLogin = () =>{
    const [isloggedIn, setIsLoggedIn] = useState(true);


    useEffect(() =>{
        const logedin = () =>{
            setIsLoggedIn(true);
        };

        const logedOut = () =>{
            setIsLoggedIn(false);
        };

        window.addEventListener("click", logedin);
        window.addEventListener("click", logedOut);

        return ()=>{
            window.removeEventListener("click", logedin);
            window.removeEventListener("click", logedOut);
        }
    }, [])

    return isloggedIn;

}

export default useLogin;