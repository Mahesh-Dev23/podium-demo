import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

import eventService from './eventService'


const initialState = {
    events:[],
    event: {},
    eventToRun: {},
    isError: false,
    isSuccess: false,
    isLoading: false,
    message:''

}

// create new event

export const createNewEvent = createAsyncThunk( 'events/create', 
    async ( eventData, thunkAPI)  => {
        
        try{
            //console.log("slice ", eventData)
            const token = thunkAPI.getState().auth.user.token
            //console.log(token)
            return await eventService.createEvent( eventData, token )
        }catch (error){
            const message = (error.response && error.response.data && error.response.data.message ) || error.message || error.toString()
            return thunkAPI.rejectWithValue(message)
        }

})

// Get All events

export const getAllEvents = createAsyncThunk( 'events/getAll', 
    async ( _, thunkAPI)  => {

        try{
            const token = thunkAPI.getState().auth.user.token
            return await eventService.getAllEvents( token )
        }catch (error){
            const message = (error.response && error.response.data && error.response.data.message ) || error.message || error.toString()
            return thunkAPI.rejectWithValue(message)
        }

})

// Get Singal event

export const singleEvent = createAsyncThunk( 'events/get', 
    async ( eventId, thunkAPI)  => {
        
        try{
            const token = thunkAPI.getState().auth.user.token
            return await eventService.getOneEvent( eventId, token )
        }catch (error){
            const message = (error.response && error.response.data && error.response.data.message ) || error.message || error.toString()
            return thunkAPI.rejectWithValue(message)
        }

})

// Get Singal event without token for visitors

export const oneEvent = createAsyncThunk( 'events/getOne', 
    async ( eventName )  => {
        // console.log("slice oneEvent", eventName)
        try{
            //const token = thunkAPI.getState().auth.user.token
            return await eventService.getOne( eventName )
        }catch (error){
            const message = (error.response && error.response.data && error.response.data.message ) || error.message || error.toString()
            //return thunkAPI.rejectWithValue(message)
        }

})

// Edit Singal event

export const editEvent = createAsyncThunk( 'events/put', 
    async ( updateEvent,   thunkAPI)  => {
        //console.log("slice ", updateEvent)
        try{
            const token = thunkAPI.getState().auth.user.token
            //console.log("token ",  updated)
            return await eventService.editEventService( updateEvent, token )
        }catch (error){
            const message = (error.response && error.response.data && error.response.data.message ) || error.message || error.toString()
            return thunkAPI.rejectWithValue(message)
            
        }

})

// Delete event

export const deleteEvent = createAsyncThunk( 'events/delete', 
    async ( eventId, thunkAPI)  => {
        
        try{
            const token = thunkAPI.getState().auth.user.token
            return await eventService.deleteEvent( eventId, token )
        }catch (error){
            const message = (error.response && error.response.data && error.response.data.message ) || error.message || error.toString()
            return thunkAPI.rejectWithValue(message)
        }

})

//Create event detail to run the event

export const eventForRun = createAsyncThunk( 'events/eventRun',
    async( eventRunDetails, thunkAPI ) => {
        //   console.log("slice ", eventRunDetails) // done
        try{
            const token = thunkAPI.getState().auth.user.token
            return await eventService.runEvent( eventRunDetails )
        }catch (error){
            const message = (error.response && error.response.data && error.response.data.message ) || error.message || error.toString()
            return thunkAPI.rejectWithValue(message)
        }
    }

)

export const eventSlice = createSlice({
    name: 'eventName',
    initialState,
    reducers: {
        reset : (state)=> initialState
    },
    extraReducers: (builder)=> {
        builder
        .addCase( createNewEvent.pending, (state)=>{
            state.isLoading = true
        })
        .addCase(createNewEvent.fulfilled, (state)=>{
            state.isLoading = false
            state.isSuccess = true
        })
        .addCase(createNewEvent.rejected, (state, action)=>{
            state.isLoading = false
            state.isError = true
            state.message = action.payload
        })
        .addCase( getAllEvents.pending, (state)=>{
            state.isLoading = true
        })
        .addCase( getAllEvents.fulfilled, (state, action)=>{
            state.isLoading = false
            state.isSuccess = true
            state.events = action.payload
        })
        .addCase( getAllEvents.rejected, (state, action)=>{
            state.isLoading = false
            state.isError = true
            state.message = action.payload
        })
        .addCase( singleEvent.pending, (state)=>{
            state.isLoading = true
        })
        .addCase( singleEvent.fulfilled, (state, action)=>{
            state.isLoading = false
            state.isSuccess = true
            state.event = action.payload
        })
        .addCase( singleEvent.rejected, (state, action)=>{
            state.isLoading = false
            state.isError = true
            state.message = action.payload
        })
        .addCase( oneEvent.pending, (state)=>{
            state.isLoading = true
        })
        .addCase( oneEvent.fulfilled, (state, action)=>{
            state.isLoading = false
            state.isSuccess = true
            state.eventToRun = action.payload
        })
        .addCase( oneEvent.rejected, (state, action)=>{
            state.isLoading = false
            state.isError = true
            state.message = action.payload
        })
        .addCase( editEvent.pending, (state)=>{
            state.isLoading = true
        })
        .addCase( editEvent.fulfilled, (state, action)=>{
            state.isLoading = false
            state.isSuccess = true
            state.event = action.payload
        })
        .addCase( editEvent.rejected, (state, action)=>{
            state.isLoading = false
            state.isSuccess = false
            state.isError = true
            state.message = action.payload
        })
        .addCase( deleteEvent.pending, (state)=>{
            state.isLoading = true
        })
        .addCase( deleteEvent.fulfilled, (state)=>{
            state.isLoading = false
            state.isSuccess = true
            
        })
        .addCase( deleteEvent.rejected, (state, action)=>{
            state.isLoading = false
            state.isError = true
            state.message = action.payload
        })
        .addCase( eventForRun.pending, (state)=>{
            state.isLoading = true
        })
        .addCase( eventForRun.fulfilled, (state, action)=>{
            state.isLoading = false
            state.isSuccess = true
            state.eventToRun = action.payload
            //console.log("payload ", action.payload)
        })
        .addCase( eventForRun.rejected, (state, action)=>{
            state.isLoading = false
            state.isError = true
            state.message = action.payload
        })
    }

})

export const {reset} = eventSlice.actions

export default eventSlice.reducer

