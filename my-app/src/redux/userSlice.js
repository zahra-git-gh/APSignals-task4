import { createSlice } from "@reduxjs/toolkit";
const today=new Date();
const startMonth=String(today.getMonth() + 1).padStart(2, '0');
const initialState={
   user:{
    fullName:"",
    email:"",
    birthDate:new Date(),
    phoneNumber:""
   },
   payment:{
    cash:true,
    installment:false,
    month:1,
    totalAmount:12000000,
    amountPaid:12000000,
    startMonth,
   }
}

const userSlice=createSlice({
    name:"user",
    initialState,
    reducers:{
        setUser:(state, action)=>{
            return {...state ,user: {...state.user, ...action.payload}}
        },
        setPayment:(state, action)=>{
            return {...state, payment:{...state.payment, ...action.payload}}
        }
    }
})

export const {setUser, setPayment}=userSlice.actions;

export default userSlice.reducer;