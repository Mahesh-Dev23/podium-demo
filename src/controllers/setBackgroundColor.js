const setBackgroundColor = (backgroundId, condition) => {

    const x = document.getElementById(backgroundId)

    if(x === null) return

    if( !condition ) {
        x.style.backgroundColor =  "rgba(240, 240, 240, .7)"
    } else{
        x.style.backgroundColor =  "rgba(0, 215, 184, .4)"
    }

}

export default setBackgroundColor