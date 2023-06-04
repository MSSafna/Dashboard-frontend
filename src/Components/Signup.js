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


function Signup() {
  const navigate = useNavigate()
    const initialValues = { email: '', password: '',username:'' };
    const [values, setValues] = useState(initialValues);


  const handleForm=async() =>{
    try{
        const result = await axios.post('http://localhost:8000/api/user/signup',  { ...values })
        console.log(result,'result');
        if(result.data.user){
         navigate('/dashboard')
        }
    }catch(err){
        console.log(err);
    }

    console.log(values,'valuess');
    
    }

  return (
    <MDBContainer className="p-3 my-5 d-flex flex-column w-50">

      <MDBInput wrapperClass='mb-4' label='User name' id='form1' type='email'  name='username'
        onChange={(e) => {
                  setValues({ ...values, [e.target.name]: e.target.value });
                }}/>

      <MDBInput wrapperClass='mb-4' label='Password' id='form2' type='password' name='password'
        onChange={(e) => {
            setValues({ ...values, [e.target.name]: e.target.value });
          }}
      />
       <MDBInput wrapperClass='mb-4' label='Email address' id='form1' type='email'  name='email'
        onChange={(e) => {
                  setValues({ ...values, [e.target.name]: e.target.value });
                }}/>

      

      <MDBBtn className="mb-4" onClick={handleForm}>Sign up</MDBBtn>

      <div className="text-center">
       
      <div className="text-center">
        <p onClick={()=>navigate('/')} className='cursoir:pointer'>Already have an account</p>
       

  
      </div>

      </div>

    </MDBContainer>
  );
}

export default Signup;