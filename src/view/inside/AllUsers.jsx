import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import SingleVideo from './containers/SingleVideo'

const AllUsers = ({event}) => {
    
    const users = useSelector( state => state.ui.userNames)
    const { user } = useSelector( state => state.auth )
    const [ userNames, setUserNames] = useState([])
    const [ videoRow, setVideoRow ] = useState(1)
    
    
    // div elements for videos as per speakers list length ------------------
  
    const videoRowLength = async () => {
      
      if(userNames.length === 0) return setVideoRow(1) 

      if( userNames.length > 2 ) {
        setVideoRow( Math.round( userNames.length / 2 ))
      } else{
        setVideoRow( userNames.length)
      }
    }
    

    // get speaker list sans local user and presentaion screen
    const getOtherUsers = () => {
        let newUsers = []
        users.filter( u => {
            if(!event && u.name === user.name || user.name === "presentation") return 
            newUsers.push(u)
        })
        setUserNames(newUsers)
    }

    useEffect(()=> {  getOtherUsers() },[users])

    useEffect(()=> {  
      videoRowLength() 
      //console.log(userNames)
    },[userNames])

    console.log(videoRow)
    
  return (
    <div className='allUsers' style={{gridTemplateColumns:videoRow === 1 ? `100%` : `repeat(${videoRow}, minmax(100px, 1fr))`}}>
        {
            userNames?.map( res => <SingleVideo vidId={res} key={res.name.replace(' ', '-')}/>)
        }
    </div>
  )
}

export default AllUsers