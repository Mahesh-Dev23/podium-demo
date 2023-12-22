import React from 'react'
import {FaTimes} from 'react-icons/fa'

const Alert = () => {
    const closeModal = () => {
        // dispatch(setModal({stat:false, content: ''}))
    }
  return (
    <div className='alert'>
        <button onClick={closeModal} className="btn modalbtn"><FaTimes /></button>
    </div>
  )
}

export default Alert