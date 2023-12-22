const checkEmpty = (eventList) => {
    

      let i 
      let moveOn = false
      for( i = 1; i < eventList.lenght; i++ ){
        if(eventList[i].speaker.length === 0 ) return moveOn = false
        return moveOn = true
      }
}

export default checkEmpty