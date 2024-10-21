import { createSlice } from "@reduxjs/toolkit";
import aCtGetGallery from "./aCtGetGallery";
import { Tloading } from "../Shared/Tloading";
import { Trecord } from "../Shared/Trecord";
type initialStateprop={

   record:Trecord[],
   getid:number
   loading:Tloading
   error:null|string
   showdata:boolean

}
const initialState:initialStateprop={
    record:[],
    getid:-1,
    loading:"idle",
    error:null,
    showdata:false

    
}
const GallerySlice=createSlice({
    name:"Gallerylice",
    initialState,
    reducers:{
        Showimg:(state,action)=>{

            state.getid=action.payload
            state.showdata=true

        }
    },
    extraReducers:(builder)=>{

        builder.addCase(aCtGetGallery.pending,(state)=>{
            state.loading="pending",
            state.error=null
        })

       
        builder.addCase(aCtGetGallery.fulfilled,(state,action)=>{

          state.record=action.payload
            state.error=null
        })

        builder.addCase(aCtGetGallery.rejected,(state,action)=>{
            state.loading="failed",
            state.error=action.payload as string
        })
    }

})

export default GallerySlice.reducer
export const {Showimg}=GallerySlice.actions