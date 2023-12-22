import React, {Components} from 'react'
import Lights from '../backgrounds/Lights'
import Circles from '../backgrounds/Circles'
import Conical from '../backgrounds/Conical'
import Hero from '../backgrounds/Hero'
import Trio from '../backgrounds/Trio'

const AllDesigns = ({selectedDesign}) => {
    console.log(selectedDesign)
    
    var MyComponent 
    if(selectedDesign) {
        MyComponent = selectedDesign ;
    }
    
    
 
  return ( 
  //<TagName/>
    // <div>
    // if (typeof selectedDesign !== "undefined") {
    //     return React.createElement( selectedDesign )
    // }
    //React.createElement( SelectedDesign.charAt(0).toUpperCase() + SelectedDesign.slice(1) )
    selectedDesign ? <MyComponent/> : <></>
    //         selectedDesign
    //         :
    //         <>
    //         <Lights /> 
    //         <Circles />
    //         <Conical />
    //         <Hero />
    //         <Trio /> 
    //         </>
         
    // </div>
  )
}

export default AllDesigns
