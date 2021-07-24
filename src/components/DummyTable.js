import React, { useState, useEffect } from "react";
import MaterialTable from "material-table";
import Icon from '@material-ui/core/Icon';




const DummyTable = () => {
  const [data, setData] = useState([
      {id:1,driver: "asd",supplier:"halux" },
      {id:2,driver: "asd",supplier:"halux" },
      {id:3,driver: "asd",supplier:"halux" },
      {id:4,driver: "asd",supplier:"halux" }

  ]);
  const [response2, setResponse2] = useState();
  const [order, setOrder] = useState({
    driver: "",
    supplier: "",
  });
  const columns = [
    {
      title: "Id",
      field: "id",
      type: "numeric",
      validate: (rowData) => {
        if (rowData.id === undefined || rowData.id === "") {
          return "Required";
        }
        return true;
      },
    },
    {
      title: "Driver",
      field: "driver",
      validate: (rowData) => {
        if (rowData.driver === undefined || rowData.driver === "") {
          return "Required";
        }
        return true;
      },
    },
    {
      title: "Supplier",
      field: "supplier",
      validate: (rowData) => {
        if (rowData.supplier === undefined || rowData.supplier === "") {
          return "Required";
        }
        return true;
      },
    },
  ];

  
  return (
    <div>
      <MaterialTable
        title="List of orders"
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
              const updatedRows = [...data];
              updatedRows.splice(index, 1);
              setTimeout(() => {
                setData(updatedRows);
                resolve();
              }, 2000);
            }),
          onRowUpdate: (updatedRow, oldRow) =>
            new Promise((resolve, reject) => {
              const index = oldRow.tableData.id;
              const updatedRows = [...data];
              updatedRows[index] = updatedRow;
              setTimeout(() => {
                setData(updatedRows);
                resolve();
              }, 2000);
            }),
        }}
        options={{
          // save and cancel icon moved to the right side, columns are aligned
          actionsColumnIndex: -1,
          //adding new rows on the top instead of the bottom
          addRowPosition: "first",
        }}
        actions={[
          {
            icon: () => (
                <Icon>list</Icon>
            ),
            tooltip: "Equipments list",
            onClick: (event, rowData) => {
                alert(" You have to login first!");
            },
          },
        ]}
      />
    </div>
  );
};
export default DummyTable;
