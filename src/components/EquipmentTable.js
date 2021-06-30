import React , { useState, useEffect }from 'react'
import MaterialTable from "material-table";
import { useSelector, useDispatch } from "react-redux";
import {getId} from "./redux/idActions";
import { getEquipmentList,postEquipment,updateEquipment,deleteEquipment,} from "./Axios";
 
const EquipmentTable = () => {

    const ID = useSelector(state=>state.iD);
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

     
      useEffect(() => {
        if(equipment.name === "" || equipment.quantity === 0){
          console.log("empty eq.")
        }else{
          postEquipment(equipment,setResponse2);
        console.log(equipment);
        }
      }, [equipment]);

      useEffect(() => {
        getEquipmentList(ID)
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
                  getEquipmentList(ID)
                  .then((data) => {
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
                deleteEquipment(selectedRow.id);
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
                  updateEquipment(updatedRow);
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