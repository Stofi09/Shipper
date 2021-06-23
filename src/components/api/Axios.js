import axios from "axios";
import React from 'react';


    
    const MSG_API_REST_URL_CREATE = "http://localhost:5000/create";
    const MSG_API_REST_URL_ALL_LIST = "http://localhost:5000/all-list";
    const MSG_API_REST_URL_LIST = "http://localhost:5000/list/" + "Bela";
    const MSG_API_REST_URL_DELETE = "http://localhost:5000/delete/";
    const MSG_API_REST_URL_UPDATE = "http://localhost:5000/update";
    const MSG_API_REST_URL_EQUIPMENTS_BY_ID = "http://localhost:5000/equipments/";

   export const getList = () => {
        return axios.get(MSG_API_REST_URL_LIST);
      };

  export const postOrder = (order, setResponse2) => {
        axios.post(MSG_API_REST_URL_CREATE, order).then((response) => {
            setResponse2(response.data);
        })
    }
