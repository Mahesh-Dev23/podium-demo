import React, { useState, useEffect } from 'react'
import DesignView from '../inside/containers/DesignView'
import { useDesign } from '../../hooks/useDesign'



const DesignOptions = () => {

  const [ width, setWidth ] = useState(0)

  const { design, names } = useDesign( (width / 2) - 15)
  
  useEffect(()=>{
    setWidth(document.getElementById('designOptions').offsetWidth)
  },[])

  useEffect(()=>{},[width])
  
  return (
    <div className='designOptions' id='designOptions' >
            {
                design && design.map( (des, index) => 
                
                  <DesignView design ={des} key= {des.name}>
                    
                  </DesignView>
                
                )
            }
    </div>
  )
}

export default DesignOptions