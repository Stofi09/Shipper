import react,{useState} from 'react';
import {Alert,Spinner} from 'react-bootstrap';
import {userRegister} from "./api/authenticationService";

const Register=({...props})=>{


    const [values, setValues] = useState({
        userName: '',
        password: '',
        password2:'',
        email:''
        });
  
    const handleSubmit=(evt)=>{
        evt.preventDefault();    
        console.log(values.password)
        if(values.password === values.password2){
          userRegister(values).then((response)=>{
            console.log(response)
            if (response.status === 200){
              console.log("all good")
              props.history.push('/loginpage');
            }else {
              console.log("baj van")
            }
          })
        }else {
          console.log("errror")
        }
      }

    const handleChange = (e) => {
        e.persist();
        setValues(values => ({
        ...values,
        [e.target.name]: e.target.value
        }));
    };


    return (
        <div className="login-page">
                   
              
                                            
        <section className="h-100">
        <div className="container h-100">
       
            <div className="row justify-content-md-center h-100">
                <div className="card-wrapper">

                    <div className="card fat">
                        <div className="card-body">
                            <h4 className="card-title">Login</h4>
                            
                            <form className="my-login-validation" onSubmit={handleSubmit} noValidate={false}>
                                <div className="form-group">
                                    <label htmlFor="name">User Name</label>
                                    <input id="username" type="text" className="form-control" minLength={4} value={values.userName} onChange={handleChange} name="userName" required />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="email">Email address</label>
                                    <input id="email" type="text" className="form-control" minLength={4} value={values.email} onChange={handleChange} name="email" required />
                                </div>

                                <div className="form-group">
                                    <label>Password
                                    </label>
                                    <input id="password" type="password" className="form-control" minLength={4} value={values.password} onChange={handleChange} name="password" required/>
                                </div>
                                <div className="form-group">
                                    <label>Password
                                    </label>
                                    <input id="password2" type="password" className="form-control" minLength={4} value={values.password2} onChange={handleChange} name="password2" required/>
                                </div>

                                <div className="form-group m-0">
                                    <button type="submit" className="btn btn-primary">
                                        Login
                                       
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
        </div>
    )
}

export default Register;
