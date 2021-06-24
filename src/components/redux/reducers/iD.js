import { SET_ID,GET_ID } from "../types";



const iD=(id = 0,action)=>{
    console.log(action)

    switch(action.type){
            case SET_ID: 
                    id = action.payload
                    return id

            case GET_ID:
                     return id

            default: 
                    return id
    }
}
export default iD;