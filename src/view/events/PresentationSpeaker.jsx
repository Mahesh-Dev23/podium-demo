import React,{ useState, useEffect} from 'react'
import { FaTimes, FaChartBar } from 'react-icons/fa'
import { BiX, BiSlideshow } from "react-icons/bi"
import Speaker from './Speaker'
import AddUser from '../inside/buttons/AddUser'

import { useSelector, useDispatch } from 'react-redux'
import updateEvent from '../../controllers/updateEvent'
import { setEvent, setModal } from '../../features/ui/uiSlice'
import { useUpdateDeleteSpeakers } from '../../hooks/useUpdateDeleteSpeakers'


const PresentationSpeaker = ({currentSpeakers}) => {

    const {eventData, eventRun} = useSelector(state => state.ui)
    const dispatch = useDispatch()

    const [ currentUserNames, setCurrentUserNames ] = useState([])
    const [ speakers, setSpeakers ] = useState([])
    //const [ newEventList, setNewEventList ] = useState([])
    const [ selectOne, setSelectOne ] = useState('')
    const  newEventList  =  useUpdateDeleteSpeakers(speakers, selectOne, eventData, eventRun)
    //console.log(selectOne)

    useEffect(()=>{
      setSpeakers(eventData.eventList[eventRun.eventSlot].speakers)
    },[eventData])

    useEffect(()=> {  
        let names = []
        
        speakers?.length > 0 && speakers.map( (res) =>{ names.push(res.name) })
        setCurrentUserNames(names)

    },[speakers])

    

    useEffect(()=>{
        
        if( selectOne === '' && newEventList === undefined || newEventList.length === 0)return
        console.log(newEventList)
        const updateThisEvent = updateEvent(eventData, "eventList", newEventList)
        //       //console.log(updateThisEvent)
        dispatch(setEvent(updateThisEvent))
        setSpeakers(newEventList[eventRun.eventSlot].speakers)
      },[selectOne])
    
    

    const changeSpeaker = (e) => {
        let i = 0
        console.log(e)
        //console.log(currentSpeakers)
        
        if(currentUserNames.length === 0 )return
        dispatch(setModal({stat:true, content:`speakers ${ currentUserNames.indexOf(e) }`}))
      }

    
      

  return (
    <div > 
    <div  className='editUsers' style={{gridTemplateColumns:  `repeat(2, minmax(100px, 1fr))`}}>

        { !speakers || speakers?.length === 0 ?
          <AddUser /> 
          :  
          <div style={{position:"relative"}}>
            <div className='slideTitle' 
                key={speakers[0].name.replace(' ', '-')} 
                onClick={()=> changeSpeaker(speakers[0].name)}
                style={{padding: "10px"}}
            >
              <Speaker user={speakers[0]} name={false}/>
            </div>
            <div  className="userDelete" onClick={()=> setSelectOne(speakers[0].name)}>< BiX /></div>
          </div>  
        }

        <div className=' slideTitle slideUser' style={{ alignSelf:"stretch", padding: "10px"}}> 
          <div className="user userSelected">
            <BiSlideshow />
          </div> 
                    
          <div>
            <p> Seperate User should </p><p>log in as Presentor</p>
          </div>
        </div>    
    </div>  
  </div>
  )
}

export default PresentationSpeaker