const time = async (time, uspPoint ) => {
    let count = 0
    
    // console.log(uspPoint, " / ", time)
    return new Promise((resolve, reject) => {

        const counter = () => { 

            if(count < 0 || time  < 1) return 

            if( count === time ) {
                clearInterval(counter)
                // console.log("timeUp ", count)
                resolve(uspPoint + 1 )
            } 

            count = count + 1
            // console.log("count 18", count)
        }
        
    //     //console.log("timeUp ", count)
        setInterval( counter,  1000)
        
         
     })
}

export default time