const secondCounter = async () => {
    //console.log("time")
    let count = 0
    //let timeUp = Math.floor(time)
    let miliSeconds = 1
    return new Promise((resolve, reject) => {

        const counter = () => { 

            // if(count < 0 || timeUp  < 1) return 

            // if( count === timeUp ) {
                
            // } 

            count = count + 1
            
                resolve(count)

                clearTimeout(counter)    
            //console.log("second ", count)
        }
        
        setTimeout( counter, 1000)
    
    })
    
}

export default secondCounter