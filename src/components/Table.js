import React, { useState, useEffect } from "react";
import MaterialTable from "material-table";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import {setId} from "./redux/idActions";
import {Link} from 'react-router-dom';
import Icon from '@material-ui/core/Icon';




const Table = () => {

  const ID = useSelector(state=>state.iD);
  const dispatch = useDispatch();
  const MSG_API_REST_URL_CREATE = "http://localhost:5000/create";
  const MSG_API_REST_URL_ALL_LIST = "http://localhost:5000/all-list";
  const MSG_API_REST_URL_DELETE = "http://localhost:5000/delete/";
  const MSG_API_REST_URL_UPDATE = "http://localhost:5000/update";
  const MSG_API_REST_URL_EQUIPMENTS_BY_ID = "http://localhost:5000/equipments/";
  const [data, setData] = useState([]);
  const [response2, setResponse2] = useState();

  const [order, setOrder] = useState({
    driver: "",
    supplier: "supplier",
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
    },
    {
      title: "Supplier",
      field: "supplier",
    },
  ];

  const getList = () => {
    return axios.get(MSG_API_REST_URL_ALL_LIST);
  };

  useEffect(() => {
    axios.post(MSG_API_REST_URL_CREATE, order).then((response) => {
      setResponse2(response.data);
      console.log(response.data);
      console.log(response2);
    });
  }, [order]);

  useEffect(() => {
    getList()
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
        actions={[
          
          {
            icon:() => <Link to='/EquipmentTable'><Icon>list</Icon></Link>,
            tooltip: 'Save User',
            onClick: (event, rowData) =>  
              dispatch(setId(rowData.id))
          }
        ]}

      />
    </div>
  );
};
export default Table;
