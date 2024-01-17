import axios from 'axios'

const API_URL = 'https://podium-backend.vercel.app/api/events/'

// create an event 
const createEvent = async ( eventData, token)=>{
    //console.log("Creating Event")
    console.log(token)
    const config = {
        headers: {
            authorization : `Bearer ${token}`
        }
    }
    console.log("service ", eventData)
    const response = await axios.post(API_URL, eventData, config)

    return response.data
}

// get all events
const getAllEvents = async ( token)=>{
    const config = {
        headers: {
            authorization : `Bearer ${token}`
        }
    }

    const response = await axios.get(API_URL, config)

    return response.data
}

// get one event
const getOneEvent = async ( eventId, token)=>{
    const config = {
        headers: {
            authorization : `Bearer ${token}`
        }
    }
    const response = await axios.get(API_URL + eventId, config)

    return response.data
    //console.log("response ", response.data)
}

// get one by name for visitors
const getOne = async ( eventName )=>{
    const response = await axios.get( API_URL + 'name/'+ eventName )
    return response.data
}

// edit event
const editEventService = async (  updateEvent, token)=>{
    const config = {
        headers: {
            authorization : `Bearer ${token}`
        }
    }

    const response = await axios.put(API_URL + updateEvent._id, updateEvent, config)

    return response.data
    //console.log("response ", response.data)
}

// delete event
const deleteEvent = async ( eventId, token)=>{
    const config = {
        headers: {
            authorization : `Bearer ${token}`
        }
    }
    
    const response = await axios.delete(API_URL + eventId, config)

    return response.data
    //console.log("response ", response.data)
}

// run event
const runEvent = async ( eventRunDetails )=>{
    
    //console.log("service ", eventRunDetails) //done
    const response = await axios.post(API_URL + "run", eventRunDetails)
    return response.data
}
const eventService = { createEvent, getAllEvents, getOneEvent, editEventService, deleteEvent, runEvent, getOne }
export default eventService