import React, { useState, useEffect } from "react";
import MaterialTable from "material-table";
import {updateUser, updateOrder, deleteOrder, getAllUsers} from "./Axios";


const UserTable = () => {


  const [data, setData] = useState([]);
  const [response2, setResponse2] = useState();
  const [user, setUser] = useState({
    name:"asd",
    role:"USER"
  })

  const columns = [
    {
      title: "Id",
      field: "id",
      editable: false,
    },
    {
      title: "User",
      field: "userName",
      validate: (rowData) => {
        if (rowData.userName === undefined || rowData.userName === "") {
          return "Required";
        }
        return true;
      },
    },
    {
      title: "Roles",
      field: "roles",
      validate: (rowData) => {
        if (rowData.roles.includes("ADMIN")||rowData.roles.includes("USER")||rowData.roles.includes("VISITOR") ) {
         return true;
        }
        return "Only uppercase letters";
      },
    },
  ];

  useEffect(() => {
    getAllUsers()
      .then((data) => {
        console.log(data.data);
        setData(data.data);
        
      })
      .catch(function (ex) {
        console.log(ex);
      });
  }, []);
  return (
    <div>

      <MaterialTable
        title="List of users"
        data={data}
        columns={columns}
        editable={{
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
        onRowUpdate: (updatedRow, oldRow) =>
          new Promise((resolve, reject) => {
            const index = oldRow.tableData.id;
            console.log(updatedRow);
            updateUser(updatedRow);
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
     ]}
      />
    </div>
  );
};
export default UserTable;
