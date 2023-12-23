
import {useState, useEffect, useCallback} from 'react'

import { useSelector, useDispatch } from 'react-redux'
import {login,  getAllUsers} from '../../features/auth/authSlice'
import { setEvent } from '../../features/ui/uiSlice'

import { BiLockOpen, BiUserPlus } from "react-icons/bi"

import Spinner from './Spinner'
import {useNavigate} from 'react-router-dom'
import Button from '../inside/buttons/Button';
import setBackgroundColor from '../../controllers/setBackgroundColor'

import Itext from '../inside/containers/Itext'


function Login() {
    
    const [formData, setFormData] = useState({
        email:'',
        password:''
    })


    const {email, password} = formData
    

    //for authSlice
    const dispatch = useDispatch()
    
    const { user, allUsers, isError, isSuccess, isLoading, message } = useSelector( state => state.auth )
    // const { packageJson } = useSelector( state => state.ui )
    

    const navigate = useNavigate()

    const [ openButtonText, setOpenButtonText ] = useState(false) 

    useEffect(()=> {  
        dispatch(setEvent({})) 
        // dispatch(getPackageDetails()) 
        setBackgroundColor("login", false)
        setOpenButtonText(true)
    },[])

    useEffect(()=>{
        if(isError && user !== null){
            //toast.error(message)
        }

        if(isSuccess || user){
            //console.log("success")
            
            dispatch(getAllUsers())
            if(!user)return
            if(user.isAdmin) return navigate('/home')
            if(!user.isAdmin) return navigate('/event')
            
        }

       // dispatch(reset())
    }, [isError, isSuccess, user, message, navigate, dispatch])

    useEffect(()=> {
         
        
        if( email ) return setBackgroundColor("login", true)
        
        
    },[email])
    const setFormDetails = useCallback((e, n)=>{
        
        setFormData((prevState)=>({
            ...prevState,
           [ n ] : e
        }))
    })
    
    

    const onSubmit = (e) => {
        e.preventDefault()

        const userData = {  email, password }
        dispatch(login(userData))
        
    }

   

    if(isLoading){
        //console.log("pending")
        return <Spinner />
    }

    // console.log(packageJson?.data?.package.version)

  return (
    
        

        <div className='joinCall' >
            
            
            <form onSubmit={onSubmit} className="loginform">
                <input 
                    type="email" 
                    placeholder='Your registered email'
                    value={email}
                    name='email'
                    onChange={(e) => setFormDetails( e.target.value, e.target.name)}
                />
                <input 
                    type="password"
                    id={password} 
                    value={password}
                    name='password'
                    placeholder='Password'
                    onChange={(e) => setFormDetails(e.target.value, e.target.name)}
                />
                <div className='inputTimeSlot'>
                    <div  onClick={()=>  navigate('/reg')} style={{justifySelf:"end"}}>
                        <Button icon={<BiUserPlus />} text="Register" direction="left" openText={openButtonText}/>
                    </div>
                    <button type='submit' >
                        <Button icon={<BiLockOpen />} text="Join" direction="right" openText={openButtonText}/>
                    </button>
                    
                </div>
            </form>
            <Itext 
                text="You can register with email and password of your choice with admin checked so you can create events. Or you can login as email: 'durgesh-shah@gmail.com' and pass: 'ds1234'"
            />
           
        </div>
        
    
    
  )
}

export default Login