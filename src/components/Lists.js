import Table from "./Table";
import React,{useState} from 'react';
import {fetchUserData} from "../components/api/authenticationService"
import { Button, Container } from 'react-bootstrap';


const Lists = (props) => {

    const [data,setData]=useState({});

    React.useEffect(()=>{
        fetchUserData().then((response)=>{
            setData(response.data);
            console.log(localStorage);
            console.log(response.data);
        }).catch((e)=>{
            localStorage.clear();
            props.history.push('/');
        })
    },[])


    const logOut=()=>{

        localStorage.clear();
        props.history.push('/');

    }


    return (
        <div>
             <h4>Hello {data && `${data.firstName} ${data.lastName}`}</h4>
                <br></br>
                {data && data.roles && data.roles.filter(value => value.role==='ADMIN').length>0 && <Button type="variant">Add User</Button> }
                <br></br>

                <Button style={{marginTop:'5px'}} onClick={() =>logOut()}>Logout</Button>
            <Table/>;
        </div>
    )
}

export default Lists
