

const updateEvent = (event, name, value) => {
    
    let newEvent = []
    let list
    newEvent = event
    if( name === "eventList"){
        newEvent = {...newEvent, [name]  : value.map( res => res)}
    }else if( name === "newEventList" ){
        newEvent = {...newEvent, [name]  : value.other.map( res => res)}
    }else{
        newEvent = {...newEvent, [name]  : value}
    }
        
    
    return newEvent
    
    
    
}

//module.exports = updateEvent
export default updateEvent