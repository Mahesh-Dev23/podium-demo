import React from 'react'
import TextOpenTime from './TextOpenTime'
import { useSelector } from 'react-redux'

const Loader = ({caption}) => {
  const designName = useSelector( state => state.ui.selectedDesign )
  return (
    <div className='welcome'>
      <div className={`loader  ${designName}`}></div>
      <TextOpenTime text={caption}/>
    </div>
  )
}

export default Loader