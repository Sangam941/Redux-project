import { createSlice } from "@reduxjs/toolkit";

export const searchSlice = createSlice({
    name: "search",
    initialState:{
        query:"",
        activeTab:"Photos",
        results: [],
        loading: false,
        error: null
    },
    reducers:{
        setLoading:(state)=>{    
            state.loading = true
            state.error = null
        },
        setErrors:(state, action)=>{    
            state.error = action.payload
            state.loading = false
        },
        setQuery:(state, action)=>{
            state.query = action.payload
            state.loading = false
        },
        setActiveTabs:(state, action)=>{
            state.activeTab = action.payload
            state.loading = false
        },
        setResults:(state, action)=>{
            state.results = action.payload
            state.loading = false
        },
        clearResults: (state)=>{
            state.results = []
        }
    }
})

export const { setQuery, setErrors, setActiveTabs, setLoading, setResults } = searchSlice.actions
export default searchSlice.reducer