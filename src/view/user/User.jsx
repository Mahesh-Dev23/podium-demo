import React from 'react'
import { FaUser, FaPen, FaTrash } from "react-icons/fa"
import { BiUser, BiPencil, BiTrash } from "react-icons/bi"
import { useSelector, useDispatch } from 'react-redux'
import { setModal } from '../../features/ui/uiSlice'

const User = ({user}) => {
  const dispatch = useDispatch()

  const userEdits = (e) => {
    // dispatch( singleEvent( e ) )
    dispatch( setModal({stat: true, content: {user: "user", edit: e}}) )
  }

  const userDelete = (e) => {
    dispatch( setModal({stat: true, content: {user: "delete", edit: e}}) )
  }

  return (
    <div className='card' key={user._id} >

      <div className='slideUser' >
        
          <div className="user"><BiUser /></div>
          <div>
              <p><span>{user?.name}</span></p>
              <p>{user?.jobTitle}</p>
          </div>
      </div>
      <div className="editBlock">
          <div  className=' btn-round' 
                 onClick={() => userEdits(user)}
                >
            <BiPencil />
          </div>
          <div  className=' btn-round' 
                onClick={() => userDelete(user)}
                >
            <BiTrash />
          </div>
      </div> 
    </div>
  )
}

export default User