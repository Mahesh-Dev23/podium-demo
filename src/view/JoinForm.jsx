import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setLocalUser } from '../features/ui/uiSlice'

function JoinForm({joinedUser}) {
    const [role, setRole] = useState('')
    const [ userAct, setUserAct ] = useState('')
    const [ user, setUser ] = useState({
        name: '',
        roomId: '',
        role: role,
    })
    const allUsers = useSelector( state => state.ui.userNames)

    const dispatch = useDispatch()

    const setUserRole = () => {
    
        let names = []
        allUsers.map( res => names.push(res.name))

        if(!names) return
        if( names.includes(user.name)) {
            setRole("host")
            setUser({...user, role: "host"})
        } else{
            setRole("guest")
            setUser({...user, role: "guest"})
        }
        
    }
    

    const sendUserDetails = (e) =>{
        e.preventDefault()
        setUserRole()
    }
    
    useEffect(()=> {
        //console.log(role)
        if(user.role !== "") {
            dispatch(setLocalUser(user))
        }
    }, [role])

  return (
    
        <div className='joinCall'>
            {
                
                userAct === "" ?
                    <form onSubmit={sendUserDetails}>
                        <input 
                            type="text" 
                            placeholder='Your registered name'
                            onChange={(e) => setUser({...user, name: e.target.value})}
                        />
                        <input 
                            type="text" 
                            placeholder='Room Id received in your email'
                            onChange={(e) => setUser({...user, roomId: e.target.value})}
                        />
                        <button type='submit' className='btn'>Join</button>
                        <div className='textBtn' onClick={()=> setUserAct("")}>Register</div>
                    </form>
                    
                :
                <>
                    <div className='textBtn' onClick={()=> setUserAct("")}>Back</div>
                </>
            }
            
            <div className='itext'>This app is developed of the desktop use and best viewed on Chrome Browser with 1920 x 1080 resolution. </div>
        </div>
    
  )
}

export default JoinForm