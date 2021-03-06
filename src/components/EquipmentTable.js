import React , { useState, useEffect }from 'react'
import MaterialTable from "material-table";
import { useSelector, useDispatch } from "react-redux";
import {getId} from "./redux/idActions";
import { getEquipmentList,postEquipment,updateEquipment,deleteEquipment,} from "./Axios";
import { CsvBuilder } from 'filefy';

const EquipmentTable = () => {

    const ID = useSelector(state=>state.iD);
    const [data, setData] = useState([]);
    const [response2, setResponse2] = useState();
    const [selectedRows, setSelectedRows] = useState([])
    const [equipment, setEquipment] = useState({
        name: "",
        quantity: 1,
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
          validate: rowData => {
            if (rowData.name === undefined || rowData.name === "") {
              return "Required"
            } return true
          } 
        },
        {
          title: "Quantity",
          field: "quantity",
          type: "numeric",
          validate: rowData => {
            if (rowData.quantity === undefined || rowData.quantity === NaN) {
              return "Required"
            } else if (rowData.quantity === 0){
              return "Quantity can not be 0."
            } else if(rowData.quantity.length < 1){
              return "Field is required."
            }
            return true
          }
        },
      ];

      const exportAllSelectedRows=()=>{
        new CsvBuilder("tableData.csv")
         .setColumns(columns.map(col=>col.title))
         .addRows(selectedRows.map(rowData=>columns.map(col=>rowData[col.field])))
         .exportFile();
       }
     
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
      const title = "Equipment list for order number: " + ID
    return (
        <div className="equipmentTable">
        <MaterialTable
          title= {title}
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
                console.log(newRow.quantity);
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
          onSelectionChange={(rows) => setSelectedRows(rows)}
          options={{
            selection:true,
            pageSize: 10,
            pageSizeOptions: [5, 10,15, 20, 30 ,50, 75, 100 ],
            toolbar: true,
            paging: true,
            // save and cancel icon moved to the right side, columns are aligned
            actionsColumnIndex: -1,
            //adding new rows on the top instead of the bottom
            addRowPosition: "first",
            exportButton:true
          }}
          actions={[
            {
              icon: ()=><button>Export</button>,
              tooltip: "Export all selected rows",
              onClick: () => exportAllSelectedRows()
            }
  
          ]}
        />
      </div>
    )
}

export default EquipmentTable