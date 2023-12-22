import React,{useEffect, useState} from 'react'
import Logo from './Logo'
import EventBrandingTitle from './EventBrandingTitle'




const Branding = () => {
  //console.log("branding")

  // const users = useSelector( state => state.ui.userNames)
  // const localUser = useSelector( state => state.ui.localUser)
  // const colors = useSelector( state => state.ui.colors)
  // const colorScheme = useSelector( state => state.ui.colorScheme)

  //const [ color, setColor ] = useState()

  // const changeColorScheme = () => {
    
  //   const r = document.querySelector(':root');
  //   // const colors = {'brandingDark': color.scarlet.brandingDark, 
  //   //                 'branding1': color.scarlet.branding1,
  //   //                 'branding2': color.scarlet.branding2,
  //   //                 'branding3': color.scarlet.branding3,
  //   //                 'brandingLight': color.scarlet.brandingLight}
  //   // //console.log(r)
  //   // dispatch(setColors(colors))
  //   r.style.setProperty('--brandingDark', colors.brandingDark);
  //   r.style.setProperty('--branding1', colors.branding1);
  //   r.style.setProperty('--branding2', colors.branding2);
  //   r.style.setProperty('--branding3', colors.branding3);
  //   r.style.setProperty('--brandingLight', colors.brandingLight);
  // }

  // setting admin role and initial color scheme 
  // useEffect(()=> {
  //   if(!users ) return
  //   if(users[0].name === localUser.name) {
      
  //     // dispatch(setColors({ 'name': colorScheme[0].name,
  //     //           'brandingDark': colorScheme[0].brandingDark, 
  //     //           'branding1': colorScheme[0].branding1,
  //     //           'branding2': colorScheme[0].branding2,
  //     //           'branding3': colorScheme[0].branding3,
  //     //           'brandingLight': colorScheme[0].brandingLight}))
  //   } 
  // },[])

  // setting selected color scheme
  // useEffect(()=>{ changeColorScheme() },[colors])

  //const dispatch = useDispatch()
  // const changeTheme = () => {
  //   //console.log(color)  
  //   dispatch(setModal(true))
  // }
  //console.log(colorScheme[0]) 
  //console.log(colors) 
  return (
    <div className='branding'>
        <Logo />
        <EventBrandingTitle />
        
        
    </div>
  )
}

export default Branding