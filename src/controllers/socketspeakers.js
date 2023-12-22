const socketAddSpeakers = ( newSocketSpeaker, socketUser ) => {
  // console.log(newSocketSpeaker)
  // console.log(socketUser.length)
    let speakers = []

    return new Promise( (resolve, reject ) => {
        if(newSocketSpeaker === "") return
        if(socketUser.length > 0){
          socketUser.map( res => speakers.push(res))
        }
        if( speakers.includes(newSocketSpeaker)) return
        speakers.push(newSocketSpeaker)
        // console.log(speakers)
        resolve(speakers) 
    })

    
  }

export default socketAddSpeakers  