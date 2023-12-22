import React, {useState, useEffect} from 'react'
import {useSelector} from 'react-redux'

const BrandingCenter = ({height}) => {
    const { eventData, colors } = useSelector( state => state.ui )
    const { eventToRun } = useSelector(state => state.events)
    const [ title, setTitle ] = useState([])
    const [ titleBase, settitleBase ] = useState( )
    const [ titleTop, steTitleTop ] = useState()
    
    

    useEffect(()=>{
        if(!eventData)return
        setTitle(eventData?.name.split(" "))
    },[eventData])

    useEffect(()=>{
        let top = []
        if(title){
            title.filter((res, index) => 
                    index < title.length - 3 && top.push(res ))
                    steTitleTop(top)
        let base = []
        title.filter((res, index) => 
                index > title.length - 4 && base.push(res + " "))
                settitleBase(base)
        }                
    },[title])

  return (
    <div className='brandingCenter'>
        <img src ={"./logo192.png"}  /> 
        <div>
            <h3 style={{fontSize:`${height/2.5}px`, lineHeight:`${height/3}px`}}>
            {
                titleTop?.map((res) => `${res} `)
            }
            </h3>

            {/* <h3 >{title.filter((res, index) => 
                index < title.length - 3 && res + " "
            )}</h3> */}
            <p style={{fontSize:`${height/4.5}px`, lineHeight:`${height/3}px`}}>{titleBase}</p>
        </div>
    </div>
  )
}

export default BrandingCenter