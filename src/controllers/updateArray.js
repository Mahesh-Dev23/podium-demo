const updateArray = (user, msg, CurrentArray) => {
    let newArray = []
    let time = Date.now()
    let newElem = {name:user, msg, time}

    // console.log("CurrentArray ", CurrentArray)
    return new Promise( (resolve, reject ) => {
        
        if(CurrentArray.length > 0){
            CurrentArray.map( res => newArray.push(res))
            newArray.push(newElem)
        }else{
            newArray.push(newElem)
        }
        
        // newArray.push(newElem)
        //  console.log("newArray ", newArray)
        resolve(newArray) 
    })

}
export default updateArray