const pegination = (arr, limit) => {
    
    let arrLimit = limit
    let newArr = []
    let subArr = []
    let count = 0
    let slot = arrLimit + count
    //console.log("pagination")
    // return new Promise((resolve, reject) => {
        //const recurringArray = () => {
            for(let i= count ; i<= arr.length; i++){
                if(count === arr.length ){
                    newArr.push(subArr)
                    subArr = []
                }
                if(count <= slot - 1){
                   subArr.push(arr[i]) 
                }
                if(count === slot ){
                    
                    newArr.push(subArr)
                    subArr = []
                    subArr.push(arr[count])
                    slot = arrLimit + count
                }
                
                
                count = count + 1
                // console.log(count)
                // console.log(slot)
            }
            
        // console.log(arr.length)
        // console.log(subArr)
        // console.log(newArr)
        return newArr
}

export default pegination