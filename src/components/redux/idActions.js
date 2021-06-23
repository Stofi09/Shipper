import {SET_ID,GET_ID} from "./types";


export const setId= (num)=>{
    return {
        type:SET_ID,
        payload:num
    }
}

export const getId= ()=>{
    return {
        type:GET_ID,
    }
}
