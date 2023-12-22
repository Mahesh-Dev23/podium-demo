
const checkEmptySpeakers = (eventList)=> {
    
    let check = false
        let i
        return new Promise( (reject, resolve) => {

            if(eventList){
                //console.log("checkSpeakers", eventData.eventList.length )
                for(i = 1; i < eventList.length - 1; i++){
                    
                    //if(eventData.eventList && eventData.eventList[i].speakers !== "undefined") return
        
                    if(eventList && eventList[i].speakers.length === 0) {
        
                        check = false  
                        //setCount(i)
                        i = eventList.length - 1
                        //console.log(check)
                    } else{
                        check = true
                        //console.log(check)
                    }
                    
                }
            }
            resolve(check) 
        })
}
export default checkEmptySpeakers