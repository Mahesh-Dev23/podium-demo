
import {useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import {FaUser, FaLongArrowAltLeft, FaStamp} from 'react-icons/fa'
import { BiUserCheck, BiLeftArrowAlt } from "react-icons/bi"
import Input from '../inside/Input'

import {useSelector, useDispatch} from 'react-redux'
import {register, reset} from '../../features/auth/authSlice'
import Spinner from './Spinner'

import {toast} from 'react-toastify'
import Button from '../inside/buttons/Button'

function Register() {
    console.log("register")
    const [formData, setFormData] = useState({
        name:'',
        email:'',
        password:'',
        password2:'',
        isAdmin: false,
        company: '',
        jobTitle:'',
        description:''
    })

    const {name, email, password, password2, isAdmin, company, jobTitle, description} = formData

    //for authSlice
    const dispatch = useDispatch()
    
    //for authSlice
    const { user, isError, isSuccess, isLoading, message } = useSelector( state => state.auth)

    const navigate = useNavigate()

    useEffect(()=>{
        if(isError){
            toast.error(message)
        }

        if(isSuccess || user){
            navigate('/')
        }

        dispatch( reset())
    }, [isError, isSuccess, user, message, navigate, dispatch])

    const setFormDetails = (e, n)=>{
        
        setFormData((prevState)=>({
            ...prevState,
           [ n ] : e
        }))
    }
    
    const onSubmit = (e) => {
        e.preventDefault()
        
        if( password !== password2){
            toast.error('Passwords do not match!')
        }else{
            const userData = { name, email, password, isAdmin, company, jobTitle, description}
            dispatch(register(userData))
        }
        
    }

    if(isLoading){
        return <Spinner />
    }

    
  return (
    <div className='podium' id='reg' >

        <div className='joinCall' style={{width: "600px", margin:"auto"}}>
            <h3 className='podiumTitles'>Register</h3>
            <form onSubmit={(e) => onSubmit(e)} >
                <input 
                    type="text"
                    value={name}
                    name='name'
                    onChange={(e) => setFormDetails(e.target.value, e.target.name)} 
                    placeholder={"Enter Your Name"}
                />
                <input 
                    type="email"
                    value={email}
                    name='email'
                    onChange={(e) => setFormDetails(e.target.value, e.target.name)} 
                    placeholder={"Enter Your email"}
                />
                <div className='inputTimeSlot'>
                    <input 
                        type="password"
                        value={password}
                        name='password'
                        onChange={(e) => setFormDetails(e.target.value, e.target.name)} 
                        placeholder={"Enter Your password"}
                    />
                    <input 
                        type="password"
                        value={password2}
                        name='password2'
                        onChange={(e) => setFormDetails(e.target.value, e.target.name)} 
                        placeholder={"Confirm password"}
                    />
                </div>
                <div className='inputTimeSlot'>

                    <input 
                        type="text"
                        value={company}
                        name='company'
                        onChange={(e) => setFormDetails(e.target.value, e.target.name)} 
                        placeholder={"Organisation"}
                    />
                    <input 
                        type="text" 
                        value={jobTitle}
                        name='jobTitle'
                        onChange={(e) => setFormDetails(e.target.value, e.target.name)} 
                        placeholder={"Add job title"}
                    />
                </div>
                <div className="radio" >
               
                    <input 
                        type="checkbox"
                        value={true}
                        name='isAdmin'
                        onClick={(e) => setFormDetails(e.target.value, e.target.name)} 
                        placeholder={"Admin"}
                    />
                    
                    <label htmlFor="isAdmin"> Admin</label>
                </div>    
                        
                <textarea 
                    className = "form-input" 
                    onChange = {(e) => setFormDetails(e.target.value, e.target.name)} 
                    name={"profile"}
                    value={description} 
                    placeholder={"Brief Profile"}
                    rows="10" 
                    style={{margin:"10px 0"}}
                /> 
                
                <div className='inputTimeSlot'>
                    <div  onClick={()=>  navigate('/')}>
                        <Button icon={<BiLeftArrowAlt />} text="Back" direction="right"/>
                    </div>
                    <button  >
                        <Button icon={<BiUserCheck />} text="Submit" direction="right"/>
                    </button>
                </div>
                    
                    
            </form>
        </div>
    </div>
  )
}


export default Register