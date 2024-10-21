import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const aCtGetGallery:any=createAsyncThunk("actgallery/act",async(_,TunkApi)=>{

    const{rejectWithValue}=TunkApi

    try {
        
        const response= await axios.get(`
            https://picsum.photos/v2/list`,{params:{
                _page: 1,
                _limit: 1
            }}
        
    )
    console.log(response.data)
    return  response.data
    } catch (error) {
        if(axios.isAxiosError(error)){

            rejectWithValue(error.response?.data.message||error.message)

        }else{
            return rejectWithValue("An un expected error")
        }
        
    }

})

export default aCtGetGallery