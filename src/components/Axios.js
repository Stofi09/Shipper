import React from 'react'
import axios from "axios";

    /*Equipment table*/ 
    const MSG_API_REST_URL_EQUIPMENTS_BY_ID = "http://localhost:5000/equipments/";
    const MSG_API_REST_URL_CREATE_EQUIPMENT = "http://localhost:5000/createEquipment";
    const MSG_API_REST_URL_UPDATE_EQUIPMENT = "http://localhost:5000/updateEquipment";
    const MSG_API_REST_URL_DELETE_EQUIPMENT = "http://localhost:5000/deleteEquipment/";

const getEquipmentList = (ID) => {
        return axios.get(MSG_API_REST_URL_EQUIPMENTS_BY_ID + ID);
      };

const postEquipment = (equipment,setResponse2) => {
   return axios.post(MSG_API_REST_URL_CREATE_EQUIPMENT, equipment).then((response) => {
        setResponse2(response.data);
      });
}

const updateEquipment = (updatedRow) => {
    return axios.put(MSG_API_REST_URL_UPDATE_EQUIPMENT, updatedRow)
    .then((response) => {
        console.log(response);
        console.log("valami");
      });
}

const deleteEquipment = (id) => {
    return  axios
    .delete(MSG_API_REST_URL_DELETE_EQUIPMENT + id)
    .then((response) => {
      console.log(response);
    });
}

  /*Order table */
  const MSG_API_REST_URL_CREATE = "http://localhost:5000/create";
  const MSG_API_REST_URL_GET_ORDERS = "http://localhost:5000/all-list";
  const MSG_API_REST_URL_DELETE_ORDER = "http://localhost:5000/delete/";
  const MSG_API_REST_URL_UPDATE_ORDER = "http://localhost:5000/update";

  const getOrderList = () => {
    return axios.get(MSG_API_REST_URL_GET_ORDERS);
  }

  const postOrder = (order, setResponse2) => {
   return axios.post(MSG_API_REST_URL_CREATE, order).then((response) => {
      setResponse2(response.data);
      console.log(response.data);
    });
  }

  const updateOrder = (updatedRow) => {
    return axios.put(MSG_API_REST_URL_UPDATE_ORDER, updatedRow)
    .then((response) => {
        console.log(response);
      });
  }

  const deleteOrder = (id) => {
    axios.delete(MSG_API_REST_URL_DELETE_ORDER + id)
    .then((response) => {
      console.log(response);
    });
  }
  /*Registration*/ 

  const MSG_API_REST_URL_REGISTER = "http://localhost:5000/register";

  const postRegister = (account,setResponse) => {
    return axios.post(MSG_API_REST_URL_REGISTER, account).then((response) => {
      setResponse(response.status);
      console.log(response.status);
    });
  }

/* User Table*/

  const MSG_API_REST_URL_GET_USERS = "http://localhost:5000/getusers"

  const getAllUsers = () => {
    return axios.get(MSG_API_REST_URL_GET_USERS);
  }

export {
    getEquipmentList,
    postEquipment,
    updateEquipment,
    deleteEquipment,
    getOrderList,
    postOrder,
    updateOrder,
    deleteOrder,
    postRegister,
    getAllUsers
}