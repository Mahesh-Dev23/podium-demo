import React,{useEffect, useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'

import PaginationSlider from '../events/PaginationSlider'
import pagination from '../../controllers/pagination'
import {useNavigate} from 'react-router-dom'

import Button from '../inside/buttons/Button'
import { BiLeftArrowAlt } from "react-icons/bi"
import setBackgroundColor from '../../controllers/setBackgroundColor'

const Users = () => {
    const { allUsers } = useSelector( state => state.auth )
    const { modal } = useSelector( state => state.ui )
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [ arr, setArr ] = useState([])
    

    useEffect(()=>{
        setBackgroundColor("users", false)
    },[])
    useEffect(()=> { setArr(pagination(allUsers, 5))},[allUsers])
    //console.log(allUsers)
    useEffect(()=> {
        const x = document.getElementById("users")
        if(x === null) return
        // if( modal.content.user ) return setBackgroundColor("users", true)
        // if( modal.content.user ) {
        //     x.style.backgroundColor= "rgba(15, 15,15, .8)"
        // } else {
        //     x.style.backgroundColor= "rgba(0, 215, 184, 1)"
        // }
    },[modal])

  return (
    <div className='podium' id="users">
        <div className='joinCall' style={{width: "450px", justifyContent: "stretch"}}>
            <h3 className='podiumTitles'>Users</h3>
              { 
                  allUsers &&  <PaginationSlider arr= { arr } users = {"UserList"} />
              }
            <div className='inputTimeSlot' style={{justifySelf:"center", gridTemplateColumns:'auto auto'}}>
                <div  onClick={() => navigate("/home")}>
                        <Button icon={<BiLeftArrowAlt />} text="Home" direction="right" />
                </div>
            </div>
        </div>

    </div>
  )
}

export default Users