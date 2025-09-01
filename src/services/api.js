import axios from "axios";
const API_URL="https://api.quicksell.co/v1/internal/frontend-assignment";


export const getTickets=async()=>{
    try{
        const response=await axios.get(API_URL);
        return response.data.tickets;
    }
    catch(error){
       console.log("Invalid error");
       throw error;
    }
}
export const getUsers=async()=>{
    try{
        const response=await axios.get(API_URL);
        return response.data.users;
    }
    catch(error){
       console.log("Invalid error");
       throw error;
    }
}