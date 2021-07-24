import React,{useState} from 'react';
import {fetchUserData} from "../components/api/authenticationService"

const About = (props) => {


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


    return (
        <di>About</di>
    )
}
export default About;