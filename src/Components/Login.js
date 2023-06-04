import React,{useState}from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  MDBContainer,
  MDBInput,
  MDBCheckbox,
  MDBBtn,
  MDBIcon
}
from 'mdb-react-ui-kit';
import { axiosPrivate as axios } from '../Axios/axios';


function Login() {
  const navigate = useNavigate()
    const initialValues = { email: '', password: '' };
    const [values, setValues] = useState(initialValues);


  const handleForm=async() =>{
    try{
        const result = await axios.post('http://localhost:8000/api/user/login',  { ...values })
        console.log(result,'result');
        if(result.data.user){
         navigate('/dashboard')
        }
    }catch(err){
        console.log(err);
    }
    
    }

  return (
    <MDBContainer className="p-3 my-5 d-flex flex-column w-50">

      <MDBInput wrapperClass='mb-4' label='Email address' id='form1' type='email'  name='email'
        onChange={(e) => {
                  setValues({ ...values, [e.target.name]: e.target.value });
                }}/>
      <MDBInput wrapperClass='mb-4' label='Password' id='form2' type='password' name='password'
        onChange={(e) => {
            setValues({ ...values, [e.target.name]: e.target.value });
          }}
      />

      

      <MDBBtn className="mb-4" onClick={handleForm}>Sign in</MDBBtn>

      <div className="text-center">
        <p onClick={()=>navigate('/signup')} className='cursoir:pointer'>Not a member? Register</p>
       

  
      </div>

    </MDBContainer>
  );
}

export default Login;