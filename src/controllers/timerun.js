const timerun = async (time, timeSlot) => {
    let count = 0
    let runtime = 10 
    let timeUp = Math.floor(time)
    let miliSeconds = 1
    //console.log(timeUp, " / ", time)
    return new Promise((resolve, reject) => {

        const counter = () => { 

            if(count < 0 || timeUp  < 1) return 

            if( count === timeUp ) {
                clearInterval(counter)
                //console.log("timeUp ", timeUp)
                resolve(count)
            } 

            count = count + 1
            
        }
        
        //console.log("timeUp ", count)
        setInterval( counter, timeSlot ? timeSlot : 10)
    
         
    })
}

export default timerun