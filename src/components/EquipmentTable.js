import React , { useState, useEffect }from 'react'
import MaterialTable from "material-table";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import {getId} from "./redux/idActions";

const EquipmentTable = () => {
    const ID = useSelector(state=>state.iD);
    const MSG_API_REST_URL_EQUIPMENTS_BY_ID = "http://localhost:5000/equipments/";
    const MSG_API_REST_URL_CREATE_EQUIPMENT = "http://localhost:5000/createEquipment";
    const MSG_API_REST_URL_UPDATE = "http://localhost:5000/updateEquipment";
    const MSG_API_REST_URL_DELETE = "http://localhost:5000/deleteEquipment/";
    const [data, setData] = useState([]);
    const [response2, setResponse2] = useState();
    const [equipment, setEquipment] = useState({
        name: "",
        quantity: 0,
        deliveryListId:0
      });

    const columns = [
        {
          title: "Id",
          field: "id",
          editable: false,
        },
        {
          title: "Equipment",
          field: "name",
        },
        {
          title: "Quantity",
          field: "quantity",
        },
      ];

      const getList = () => {
        return axios.get(MSG_API_REST_URL_EQUIPMENTS_BY_ID + ID);
      };

      useEffect(() => {
        console.log(equipment);
        axios.post(MSG_API_REST_URL_CREATE_EQUIPMENT, equipment).then((response) => {
          setResponse2(response.data);
        });
      }, [equipment]);
    
      useEffect(() => {
        getList()
          .then((data) => {
            setData(data.data);
          })
          .catch(function (ex) {
            console.log(ex);
          });
      }, []);

    return (
        <div>
        <MaterialTable
          title="Table"
          data={data}
          columns={columns}
          editable={{
            onRowAdd: (newRow) =>
              new Promise((resolve, reject) => {
                setEquipment((prevState) => ({
                  ...prevState, // copy all other field/                       // copy all the fields of the object
                  name: newRow.name, // overwrite the value of the field to update
                  quantity: newRow.quantity,
                  deliveryListId:ID
                }));
                console.log(newRow);
                const updatedRows = [...data, { id: response2, ...newRow }];
                setTimeout(() => {
                  setData(updatedRows);
                  resolve();
                }, 2000);
              }),
            onRowDelete: (selectedRow) =>
              new Promise((resolve, reject) => {
                const index = selectedRow.tableData.id;
                axios
                  .delete(MSG_API_REST_URL_DELETE + selectedRow.id)
                  .then((response) => {
                    console.log(response);
                  });
                const updatedRows = [...data];
                updatedRows.splice(index, 1);
                setTimeout(() => {
                  setData(updatedRows);
                  resolve();
                }, 2000);
              }),
            onRowUpdate:(updatedRow,oldRow)=>new Promise((resolve,reject)=>{
                  const index = oldRow.tableData.id;
                  console.log(updatedRow);
                  axios.put(MSG_API_REST_URL_UPDATE, updatedRow)
                  .then((response) => {
                      console.log(response);
                    });
                  const updatedRows = [...data];
                  updatedRows[index]=updatedRow;
                  setTimeout(() => {
                      setData(updatedRows);
                      resolve();
                    }, 2000);
            })
          }}
          options={{
            // save and cancel icon moved to the right side, columns are aligned
            actionsColumnIndex: -1,
            //adding new rows on the top instead of the bottom
            addRowPosition: "first",
          }}
        />
      </div>
    )
}

export default EquipmentTable