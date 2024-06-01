import { createSlice } from "@reduxjs/toolkit";



const User=localStorage.getItem("isAuthenticated");
const Authenticated=JSON.parse(User)

const authSlice=createSlice({
    name: "Auth",
    initialState:{isLoggedIn:Authenticated?true:false},
    reducers:{
        login(state){
            state.isLoggedIn=true;
            localStorage.setItem("isAuthenticated",true)


        },
        logout(state){
            state.isLoggedIn=false;
            localStorage.setItem("isAuthenticated",false)
            localStorage.clear()


        },

    }


})
export const {login , logout} = authSlice.actions;

export default authSlice.reducer