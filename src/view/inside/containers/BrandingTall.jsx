import React, {useState, useEffect} from 'react'
import {useSelector} from 'react-redux'

const BrandingTall = ({height}) => {

    const { eventData, colors } = useSelector( state => state.ui )
    const { eventToRun } = useSelector(state => state.events)
    const [ title, setTitle ] = useState([])
    const [ titleTop, steTitleTop ] = useState()
    const [ titleBase, settitleBase ] = useState( )

    useEffect(()=>{
        if(!eventData || eventData.name === undefined )return
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
                    index > title.length - 4 && base.push(res))
                    settitleBase(base)
        }
    },[title])

  return (
    <div className='brandingTall'>
       
            <img src ={"./logo192.png"} height={`${height/1.2}px`} /> 
            {
                titleTop?.map((res, index) => <h3 id= {res} key= {`${res, index}-titleTop`} style={{fontSize:`${height/2.5}px`, lineHeight:`${height/3}px`}}>{res}</h3>)
            }
            {
                titleBase?.map((res, index) => <p id= {res} key= {`${res, index}-titleBase`} style={{fontSize:`${height/4}px`, lineHeight:`${height/5.5}px`}}>{res}</p>)
            }
        
        <div>

        </div>
        {/* <div>

            <h3 >{title.filter((res, index) => 
                index < title.length - 3 && res + " "
            )}</h3>
            <p >{titleBase}</p>
        </div> */}
    </div>
  )
}

export default BrandingTall