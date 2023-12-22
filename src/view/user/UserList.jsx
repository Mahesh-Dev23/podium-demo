import React from 'react'

import User from './User'

const UserList = ({userArr}) => {
  return (
    userArr &&
    
        <div className='eventpanel' >
            {
                userArr.map( user => <User user={user}/>)
            }
            
        </div>
    
  )
}

export default UserList