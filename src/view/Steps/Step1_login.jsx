import React from 'react'
import PodiumPackage from '../inside/containers/PodiumPackage'
import Login from '../user/Login'
import Usp from '../inside/containers/Usp'
import Itext from '../inside/containers/Itext'

const Step1_login = () => {
  return (
    <div className='podium' id="login">
        <div> </div>

        <div className='loginPanel'>
            <PodiumPackage />
            <div className='twoPanels'>
                <Usp />
                <Login />
            </div>
            <Itext text="This app is developed for the desktop use and best viewed on Chrome Browser with 1920 x 1080 resolution." />
            
        </div>

        <div></div>
        
    </div>
  )
}

export default Step1_login