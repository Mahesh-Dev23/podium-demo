import React, { useState, useEffect } from 'react'

import Circles from '../view/backgrounds/Circles'
import Lights from '../view/backgrounds/Lights'
import Conical from '../view/backgrounds/Conical'
import Hero from '../view/backgrounds/Hero'
import Trio from '../view/backgrounds/Trio'

export const useDesign = ( width, branding ) => {

    
    // console.log( width )
    
    
    let names = []
    let align = ''
    
    const [design, setDesign] = useState()

    useEffect(()=>{
        setDesign(
            [
                { name:"Circles", module: <Circles width={width} height={(width/16)*9} branding={branding} />, align:"center"},
                { name:"Conical", module: <Conical width={width} height={(width/16)*9} branding={branding} />, align:"center" },
                { name:"Hero", module: <Hero width={width} height={(width/16)*9} branding={branding} />, align:"end" },
                { name:"Lights", module: <Lights width={width} height={(width/16)*9} branding={branding} />, align:"center" },
                { name:"Trio", module: <Trio width={width} height={(width/16)*9} branding={branding} />, align:"center" }
                ]
        )
    },[width])    

   
    if(design){
       design.map( res => names.push(res.name)) 
    }
    

    
    
    return { design, names }  
}