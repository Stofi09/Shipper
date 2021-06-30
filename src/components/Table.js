import React, { useState, useEffect } from "react";
import MaterialTable from "material-table";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import {setId} from "./redux/idActions";
import {Link} from 'react-router-dom';
import Icon from '@material-ui/core/Icon';
import {getOrderList, postOrder, updateOrder, deleteOrder} from "./Axios";



const Table = () => {

  const ID = useSelector(state=>state.iD);
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const [response2, setResponse2] = useState();

  const [order, setOrder] = useState({
    driver: "",
    supplier: "",
  });
  const columns = [
    {
      title: "Id",
      field: "id",
      editable: false,
    },
    {
      title: "Driver",
      field: "driver",
      validate: rowData => {
        if (rowData.driver === undefined || rowData.driver === "") {
          return "Required"
        } 
          return true
      }
    },
    {
      title: "Supplier",
      field: "supplier",
      validate: rowData => {
        if (rowData.supplier === undefined || rowData.supplier === "") {
          return "Required"
        }  return true
      }
    },
  ];

  useEffect(() => {
    if(order.driver === "" || order.supplier === ""){
      console.log("empty order")
    }else {
      postOrder(order,setResponse2);
    }
  }, [order]);

  useEffect(() => {
    getOrderList()
      .then((data) => {
        console.log(data);
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
              setOrder((prevState) => ({
                ...prevState, // copy all other field/                       // copy all the fields of the object
                driver: newRow.driver, // overwrite the value of the field to update
                supplier: newRow.supplier,
              }));
              const updatedRows = [...data, { id: response2, ...newRow }];
              setTimeout(() => {
                getOrderList()
                .then((data) => {
                  console.log(data);
                  setData(data.data);
                })
                .catch(function (ex) {
                  console.log(ex);
                });
                setData(updatedRows);
                resolve();
              }, 2000);
            }),
          onRowDelete: (selectedRow) =>
            new Promise((resolve, reject) => {
              const index = selectedRow.tableData.id;
              deleteOrder(selectedRow.id);
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
                updateOrder(updatedRow);
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
        actions={[
          {
            icon:() => <Link to='/EquipmentTable'><Icon>list</Icon></Link>,
            tooltip: 'Equipments list',
            onClick: (event, rowData) =>  
              dispatch(setId(rowData.id))
          }
        ]}

      />
    </div>
  );
};
export default Table;
