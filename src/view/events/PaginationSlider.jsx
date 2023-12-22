import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import UserSlide from './UserSlide'
import UserReplace from '../events/UserReplace'
import EventTitle from '../events/EventTitle'
import UserList from '../user/UserList'

const PaginationSlider = ({arr, users}) => {

  //const { eventRun, modal } = useSelector(state => state.ui)
  const [ count, setCount ] = useState( 0 )
  //const [ finalArr, setFianlArr ] = useState(arr[count] )

//   useEffect(()=> {
//     setFianlArr(arr[count])
//   },[count])
  
//   const prevPage = () => {if( count !== 0 ) return setCount( count - 1 )}
  
//   const nextPage = () => {
//       if(!arr) return
//       if ( count === arr.length - 1 ) return setCount( 0 )
//       setCount( count + 1 )
//   }

  const slideTo = (index) => setCount( index )

  
  return (
    <div className='sliderMain' style={{width: "100%", margin:"20px 0", border: "0px solid gray"}}>
      <div className='slideControl' >
            
          { arr ? 
          <div className='silderContainer'> 
                { users === "UserSlide" && <UserSlide userArr={arr[count]} /> }
                { users === "UserReplace" && <UserReplace userArr={arr[count]} /> }
                { users === "eventSlide" && <EventTitle userArr={arr[count]} /> }  
                { users === "UserList" && <UserList userArr={arr[count]} /> } 
          </div>: ''}       
          <div className='sliderBar' style={{width: `calc(${arr.length}* 20px)`, gridTemplateColumns: `repeat(${arr.length}, 1fr)`}}>
              {
                  arr ? arr.map((value, index)=> 
                              
                      <div className='sliderdots' 
                          onClick={() => slideTo( index )}
                          style={{background: index === count ?`rgba(var(--podium1), 1)` : `rgba(var(--podium4), 0.5)`}}
                          key={`count ${index}`}>
                          <p>{  index + 1 }</p>
                      
                      </div>
                                  
                  ) : ''
              }
          </div>
      </div>
  </div>              
  )
}

export default PaginationSlider