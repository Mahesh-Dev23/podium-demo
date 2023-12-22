import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {setColors} from '../../features/ui/uiSlice'
import { useDesign } from '../../hooks/useDesign'
import DesignView from './containers/DesignView'
import Lights from '../backgrounds/Lights'
import Circles from '../backgrounds/Circles'
import Conical from '../backgrounds/Conical'
import Hero from '../backgrounds/Hero'
import Trio from '../backgrounds/Trio'
import ColorOptions from '../live/ColorOptions'

const SelectDesign = () => {
    //const design = useSelector( state => state.ui.design)
    const colors = useSelector( state => state.ui.colorScheme)

    const [ width, setWidth ] = useState(0)

    const { design, names } = useDesign( (width / 3) - 80 )
    
    useEffect(()=>{
      setWidth(document.getElementById('selectDesign').offsetWidth)
    },[])
    
    const dispatch = useDispatch()

    useEffect(()=>{},[width])

    
  return (
    <div className='selectDesign' id='selectDesign'>
        <div className='designOptions' style={{gridTemplateColumns: 'repeat(3, 1fr)'}}>
            {
                design && design.map( (des, index) => 
                
                  <DesignView design ={des} key= {des.name}>
                    
                  </DesignView>
                
                )
            }
        </div>
        <ColorOptions />
        
    </div>
  )
}

export default SelectDesign