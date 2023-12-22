import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setColors } from '../../features/ui/uiSlice'

const ColorOptions = () => {
    const colors = useSelector( state => state.ui.colorScheme)
    
    const dispatch = useDispatch()

    const selectColors = (e) => {
        //console.log(e)
        const selectedcolors = {'name': colors[e].name, 
                      'brandingDark': colors[e].brandingDark,
                      'branding1': colors[e].branding1,
                      'branding2': colors[e].branding2,
                      'branding3': colors[e].branding3,
                      'brandingLight': colors[e].brandingLight}
      //console.log(r)
      dispatch(setColors(selectedcolors))
      }  

  return (
    <div className="colorOptions" style={{gridTemplateColumns: 'repeat(3, 1fr)'}}>
          {
            colors.map((col, index) => <div className='colorScheme' onClick={() => selectColors(index)} key={col.name}>
              {/* {col.name} */}
              <div className='colorPallate' style={{background: `rgb(${col.brandingDark})`}}>
                <div className="colorRect" style={{background: `rgb(${col.brandingLight})`}}></div>
                <div className="colorRect" style={{background: `rgb(${col.branding1})`}}></div>
                <div className="colorRect" style={{background: `rgb(${col.branding2})`}}></div>
                <div className="colorRect" style={{background: `rgb(${col.branding3})`}}></div>
                
              </div>
            </div>)
          }

        </div>
  )
}

export default ColorOptions