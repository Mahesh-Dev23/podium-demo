import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
const API_PACKAGE = '/api/users/package'

const initialState = {
    packageJson:null,
    time: 0,
    eventData :{"_id":"",
                "name":"Event Name",
                "date":"",
                "time":"",
                "eventcat":"",
                "eventHost":"",
                "eventList":[{"type":"","title":"","time":0,"speakers":[],"source":""}],
                "panelist":[],
                "status":"",
                "createdAt":{},
                "updatedAt":{},
                "__v":0},
    localUser : {},
    userNames : [],
    adminUI : {viewMode:"View attendance"},
    eventRun : {stat: "", eventSlot: 0},
    colors: {
      'name': "grayAll",
      'brandingDark': "10,10,10",
      'branding1': "251, 153, 2",
      'branding2': "238, 108, 38",
      'branding3': "60,60,60",
      'brandingLight': "220,220,220"
    },
    clipWidth: {},
    modal: {stat:false, content:''},
    bgDimension: {},
    designButton:{},
    videotypes : { SingleVideo : 1, TwoVideos : 2, Presentation: 1, Multiscreen: 16 },
    selectedDesign: 'Circles',
    mode:true,
    socketSpeakers: [],
    messageStack: [],
    colorScheme:  [
      { name: "grayAll", branding1: "251, 153, 2", branding2: "238, 108, 38", branding3: "60,60,60", brandingDark: "10,10,10", brandingLight: "220,220,220"},
      { name: "olive", branding1: "92,149,51", branding2: "157, 188, 48", branding3: "6,65,88", brandingDark: "10,35,44", brandingLight: "222,236,173"},
      { name: "olive2", branding1: "199,207,93", branding2: "144, 176, 82", branding3: "131,112,7", brandingDark: "36,45,18", brandingLight: "244,242,228"},
      { name: "nightSky", branding1: "26,66,250", branding2: "68, 12, 111", branding3: "4,35,92", brandingDark: "21,7,31", brandingLight: "70,121,214"},
      { name: "scarlet", branding1: "240,73,47", branding2: "238, 108, 38", branding3: "144,20,53", brandingDark: "36,7,5", brandingLight: "250,236,242"},
      { name: "coffee", branding1: "209,81,69", branding2: "238, 108, 38", branding3: "99,17,52", brandingDark: "45,27,18", brandingLight: "244,228,235"},
      { name: "lemon", branding1: "208, 192, 21", branding2: "137, 132, 6", branding3: "102, 116, 13", brandingDark: "47,52,14", brandingLight: "253,251,247"},
      { name: "orange", branding1: "251, 153, 2", branding2: "52, 123, 152", branding3: "32, 7, 146", brandingDark: "17, 9, 52", brandingLight: "212, 237, 247"}
  
  
  
  
  
      ],
      toName: '',
      newMessageToName: {},
      logout: {stat:false, content:''},
  }

  export const getPackageDetails = createAsyncThunk('package', 
  async ( )  => {
    
    try{
      const packageJs = await axios.get(API_PACKAGE)
        return  packageJs.data
    }catch (error){
        const message = (error.response && error.response.data && error.response.data.message ) || error.message || error.toString()
        //return thunkAPI.rejectWithValue(message)
    }

  })
  

  export const uiSlice = createSlice({
    name: 'uiUpdate',
    initialState,
    reducers: {
        reset : (state)=> initialState,
        incrementTimer : (state, action)=> {state.time = action.payload},
        setEvent : (state, action) => {state.eventData = action.payload},
        setLocalUser : (state, action) => {state.localUser = action.payload},
        setAllUser : (state, action) => {state.userNames = action.payload},
        setColors : (state, action) => {state.colors = action.payload},
        getClipWidth : (state, action) => {state.clipWidth = action.payload},
        setModal : (state, action) => {state.modal = action.payload},
        setDesign : (state, action) => {state.selectedDesign = action.payload},
        setMode : (state, action) => {state.mode = action.payload},
        setBGDimension : (state, action) => {state.bgDimension = action.payload},
        setDesignButton : (state, action) => {state.designButton = action.payload},
        setAdnimUI : (state, action) => {state.adminUI = action.payload},
        setEventRun : (state, action) => {state.eventRun = action.payload},
        setSocketData : (state, action) => {state.socketSpeakers = action.payload},
        setMessageStack : (state, action) => {state.messageStack = action.payload},
        setLogout : (state, action) => {state.logout = action.payload},
        setMessageToName : (state, action) => {state.toName = action.payload},
        setMessageToSend : (state, action) => {state.newMessageToName = action.payload}
    },
    extraReducers: (builder) => {
      builder
      .addCase(getPackageDetails.pending, (state)=> {
          state.isLoading = true
      })
      .addCase(getPackageDetails.fulfilled, (state, action)=> {
          state.isLoading = false
          state.isSuccess = true
          state.packageJson = action.payload
      })
      .addCase(getPackageDetails.rejected, (state, action)=> {
          state.isLoading = false
          state.isSuccess = true
          state.message = action.payload
          state.packageJson = null
      })
    }
  })
  
  
  export const { reset, incrementTimer, setEvent, setLocalUser, setAllUser, setColors, getClipWidth, setModal, 
                  setDesign, setMode, setBGDimension, setDesignButton, setAdnimUI, setEventRun, setSocketData, 
                  setMessageStack, setLogout, setMessageToName, setMessageToSend } = uiSlice.actions
  
  export default uiSlice.reducer