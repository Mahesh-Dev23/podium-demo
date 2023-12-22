import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

export const useAuthStatus = () => {

    const [ loggedIn, setLoggedIn ] = useState(false)
    const [ checkingStatus, setCheckingStatus ] = useState(true)

    const { user } = useSelector( state => state.auth )
    
    useEffect(()=>{
        //console.log(user)
        if(user ){
            setLoggedIn(true)
            //console.log(loggedIn, 'user logged in')
        }else{
            setLoggedIn(false)
            //console.log(loggedIn, 'user not logged in')
        }
        setCheckingStatus(false)
    }, [user])
    
    return { loggedIn, checkingStatus }
}

