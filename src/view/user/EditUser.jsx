import React, {useState, useEffect} from 'react'

import { useDispatch, useSelector } from 'react-redux'
import {useNavigate} from 'react-router-dom'
import { editUser } from '../../features/auth/authSlice'
import { setModal } from '../../features/ui/uiSlice'
import Button from '../inside/buttons/Button'
import { FaUserCheck, FaLongArrowAltLeft } from 'react-icons/fa'
import { BiUserCheck } from "react-icons/bi"
import Input from '../inside/Input'



const EditUser = ({user}) => {
  // const user = useSelector( state => state.auth.user)
  //console.log("user ", user)
  const [formData, setFormData] = useState({
    _id: user._id,
    name: user.name,
    email: user.email,
    password: user.password,
    //password2:'',
    isAdmin: user.isAdmin,
    company: user.company,
    jobTitle: user.jobTitle,
    description: user.description
})

const {_id, name, email, password, password2, isAdmin, company, jobTitle, description} = formData

useEffect(()=>{
  setFormData({
    _id: user._id,
    name: user.name,
    email: user.email,
    password: user.password,
    //password2:'',
    isAdmin: user.isAdmin,
    company: user.company,
    jobTitle: user.jobTitle,
    description: user.description
})
},[user])

//for authSlice
const dispatch = useDispatch()
const navigate = useNavigate()

const setFormDetails = (e, n)=>{
      
  setFormData((prevState)=>({
      ...prevState,
      [ n ] : e
  }))
}

const onSubmit = (e) => {
    e.preventDefault()
    const userData = { ...user,  name, email,  isAdmin, company, jobTitle, description }
    //console.log( "userData ", userData)
    dispatch(editUser( userData))
    dispatch( setModal( { stat: false, content: ""} ) )
}

  return (
    <div>
      <p>{`Hi ${user.name}, update your profile.`} </p>
      <section>
      <form onSubmit={onSubmit}>
            <Input 
            type="text"
            //id={name} 
            value={name}
            name='name'
            onClick={setFormDetails} 
            placeholder={"Enter Your Name"}
            />
            <Input 
            type="email"
            //id={email} 
            value={email}
            name='email'
            onClick={setFormDetails} 
            placeholder={"Enter Your email"}
            />
            
            <div className='inputTimeSlot'>
              <Input 
              type="text"
              //id={"company"} 
              value={company}
              name='company'
              onClick={setFormDetails} 
              placeholder={"Organisation"}
              />
              <Input 
              type="text"
              //id={"jobTitle"} 
              value={jobTitle}
              name='jobTitle'
              onClick={setFormDetails} 
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
            
            <button style={{justifySelf:"center"}} >
                <Button icon={<BiUserCheck />} text="Submit" direction="right"/>
            </button >
            
        </form>
      </section>

    </div>
  )
}

export default EditUser