const allSpeakers = (eventList) => {
    //console.log(eventList)
    let allSpeakers = []
    let newSpeaker = []
    

    return new Promise(( resolve, reject) => {
       
        
        for(let i = 1; i < eventList.length - 1; i++){
            
            if(eventList && eventList[i].speakers !== "undefined") return

                eventList[i].speakers.filter( res => {
                                  
                    if( newSpeaker.length > 0 && newSpeaker.includes(res.name) ) return
                        newSpeaker.push(res.name)
                        allSpeakers.push(res)
                    
                })
            
            
        }
        //console.log(allSpeakers)
        resolve(allSpeakers)
        
    })
    
}

export default allSpeakers