const deleteSpeaker = ( currentSpeakers, name ) => {
    
    console.log("currentSpeakers")
    return new Promise( (resolve, reject) => {
        let speakers = []
        
        currentSpeakers.filter( res => 
            {if(res.name !== name){
            speakers.push(res)
            }})
            //console.log(speakers)
        resolve(speakers)     
    })
}
export default deleteSpeaker