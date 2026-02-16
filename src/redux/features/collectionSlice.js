import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const initialState = {
    items: JSON.parse(localStorage.getItem('collection')) || []
}
const collectionSlice = createSlice({
    name: 'collection',
    initialState,
    reducers: {
        addCollection: (state, action) => {
            const alreadyExists = state.items.find((item) => item.id === action.payload.id)

            if (!alreadyExists) {
                state.items.push(action.payload)
                localStorage.setItem('collection', JSON.stringify(state.items))
                toast.success("Save to collection")
                return
            }
            toast.error("Already saved")
            return
        },
        removeCollection: (state, action) => {
            state.items = state.items.filter((item)=> item.id !== action.payload.id)
            localStorage.setItem('collection', JSON.stringify(state.items))
            toast.success("Item deleted!")
        },
        clearCollection: (state) => {
            state.items = []
            localStorage.removeItem('collection')
            toast.success("collections clear")
        }
    }
})

export const {addCollection, removeCollection, clearCollection} = collectionSlice.actions
export default collectionSlice.reducer