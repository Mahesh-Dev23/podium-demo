
import React, { useState, useEffect} from 'react'

import { useSelector, useDispatch } from 'react-redux'

const AddPanelist = ({ allUsers, getpanelist }) => {

    const [ panelist, setpanelist ] = useState([])
    
    const dispatch = useDispatch()
    let newName = true
    let newPanelist = {}

  const addTopanel = (e) =>{
    
    let newPanelistArray = []

    if( panelist.length === 0) return setpanelist( [e] )

    if( panelist.length > 0) {

        panelist.filter( res => {
            if( res.name === e.name && res.jobTitle === e.jobTitle ) {
                 newName = false
            }else if( res.name !== e.name ) { newPanelistArray.push( res )}
                
        })
        //console.log(newName)
        if( newName === true ) {
            setpanelist( prevState => [ ...prevState, e])
        }
        if( newName === false ) {
            setpanelist( newPanelistArray )
        }
    }
    
    
  }
  //console.log(newPanelist)

  useEffect(()=>{
    getpanelist(panelist)
  },[panelist])

  return (
    <div >
        <form className='addPanelist'>
          
          { allUsers.map( (res, index) => 
            <div  key= {res.name + index} className='addPanelistItem'>
            <input 
                type={"checkbox"} 
                name= "panelist"
                value={res.name}
                onChange={ e => addTopanel({["name"]: res.name, ["jobTitle"]: res.jobTitle, ["isAdmin"]: res.isAdmin})}
            /> 
            <label className="form-input-label">
              {res.name}
            </label>
          </div>
            
          )}

          
        </form>
        
    </div>
  )
}

export default AddPanelist