import React, {useState, useEffect} from 'react'
import { FaCog, FaLock, FaPalette, FaUserEdit, FaExpand, FaCompress } from 'react-icons/fa'
import { BiHelpCircle, BiSmile, BiExpand, BiExitFullscreen, BiVideo, BiPalette, BiUser, BiHomeAlt } from "react-icons/bi"
import { setModal, setAdnimUI, setLogout } from '../../../features/ui/uiSlice'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { logout, reset  } from '../../../features/auth/authSlice'
import Button from './Button'


const AdminUI = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const adminView = useSelector(state => state.ui.adminUI)
    const { eventData } = useSelector(state => state.ui)
    const { user } = useSelector(state => state.auth )
    const [ settings, setSettings ] = useState(false)
    
    const [getView, setGetView] = useState("View event")
    // const [views, setView ] = useState("View attendance")
    //console.log(user)
    const openSettings = () => {
        // setSettings(true)
        setTimeout(() => setSettings(false), 3000)
         
    }
    //console.log(settings)
    // useEffect(()=>{},[settings])
    
    const changeIt = (e ) => {
        if( e === "Change Design") return changeTheme()
        if( e === "View attendance" || e === "View event") return changeView()
        console.log(e)
    }

    const changeTheme = () => {
        dispatch(setModal({stat: true, content: "design"}))
    }


    const changeView = () => {
        if(adminView.viewMode === "View attendance") {
          dispatch(setAdnimUI({...adminView, viewMode:"View event"})) 
          setGetView( "View attendance" )
        } else{
          dispatch(setAdnimUI({...adminView, viewMode:"View attendance"}))  
          setGetView( "View event" )
        }
        
        
    }  

    
    const onLogout = () => {
        dispatch(logout())
        dispatch(reset())
        dispatch(setModal({stat: false, content: ""}))
        // const logoutMessage = {stat:true, content:'logged out!'}
        dispatch(setLogout({stat:true, content:'logged out!'}))
        
        // console.log("admin logout ", logoutMessage)
        navigate('/logout')
    }
    

    return (
        user ?
        <div className='adminUI' >
            {  user.name ? <p>{`Welcome `}<span>{user.name.split(" ", 1)}</span>{`!`}</p> : null}
                        
            {
                user.isAdmin && eventData.status !== "run" &&
                <div className='settings'>
                    
                    <p>{` Edit: `}</p>
                    <div  onClick={()=>  navigate("/design")} >
                        <Button icon={<BiPalette />} text="Design" direction="left"/>
                    </div>
                    <div  onClick={()=> navigate("/edit-event")} >
                        <Button icon={<BiVideo />} text="Event" direction="left"/>
                    </div>
                    <div  onClick={()=> navigate("/users")} >
                        <Button icon={<BiUser />} text="User" direction="left"/>
                    </div>
                </div>
            }
                        
            
            <div className='settings' style={{ gridAutoColumns:"repeat(4, minmax(30px 130px))", justifySelf:"end", justifyItems:"end"}}>
                { user.isAdmin && eventData &&
                            
                    <div  onClick={()=>  changeIt(adminView.viewMode)} style={{justifySelf: "end"}}>
                        <Button icon={adminView.viewMode === "View event" ? <BiExitFullscreen/> : <BiExpand />} text="View" direction="left"/>
                    </div>
                            
                }
                
                <div  onClick={()=>  navigate("home")} style={{justifySelf: "end"}}>
                    <Button icon={<BiHomeAlt />} text="Home" direction="left"/>
                </div>                            
                <div  onClick={ ()=> navigate("/help")} style={{justifySelf: "end"}}>
                    <Button icon={<BiHelpCircle />} text="Help" direction="left"/>
                </div>   
                <div  onClick={  onLogout} style={{justifySelf: "end"}}>
                    <Button icon={<BiSmile />} text="Logout" direction="left"/>
                </div> 
            </div>
                
        </div>
        :
        <div className='adminUI' >
        </div>
    )
}

export default AdminUI