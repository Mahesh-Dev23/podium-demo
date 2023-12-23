import React, {useState, useEffect} from 'react'
import { getPackageDetails } from '../../../features/ui/uiSlice'
import { useSelector, useDispatch } from 'react-redux'
import Img from './Img'


const PodiumPackage = () => {
  const dispatch = useDispatch()
  const { packageJson } = useSelector( state => state.ui )

  useEffect(()=>{
    dispatch (getPackageDetails())
  },[])

  return (
    <div className='podiumPackage'>
        <Img src="podium-logo-plain.png" alt="podium-logo"/>
        {/* <p>{packageJson?.package.description}</p>
        <p className='itext'>{packageJson?.package.version}</p> */}
    </div>
)
}

export default PodiumPackage