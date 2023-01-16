import React,{useState,useEffect} from "react"
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { Link,useNavigate } from "react-router-dom";
import LinearProgress from '@mui/material/LinearProgress';
import Progress from "./Progress";
const testData = [
   
    { bgcolor: "#ef6c00", completed: 0 },
  ];
  

function Step1(props) {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [lastname, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [data,setData]=useState({});
//    useEffect(()=>{
//     if

//    },[])
   
   
    const handleName = (e) => {
        // validation(e.target.value)
        setName(e.target.value);
        console.log(name);
      };
      const handleLastName = (e) => {
        setLastName(e.target.value);
        // validation(e.target.value)
        console.log(lastname);
      };
      // Handling the email change
      const handleEmail = (e) => {
        setEmail(e.target.value);
        // validation(e.target.value)
        console.log(email);
      };
    //   function validate(){
    //     console.log(name,email,lastname,"------");
    //     var regName = /^[a-zA-Z]+ [a-zA-Z]+$/;
    //     var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    //     var name = name;
    //     var lastname=lastname;
    //     var email=email;
    //     if(!regName.test(name)||""){
    //         alert('Enter first name');
    //         return false;
    //     }
    //     if(!regName.test(lastname)||""){
    //         alert('Enter last name');
    //         return false;
    //     }
    //     if(!validRegex.test(email)||""){
    //         alert('Enter email address');
    //         return false;
    //     }else{
    //         alert('good');
    //         return true;
    //     }
    // }
    function validation(value){
        if (name === '' ||value==='') {
            alert('Enter first name');
        } 
        if(email===''){
            alert('Enter email address');
        }
        if(lastname==''){
            alert('Enter last name');
        }
        else{
        navigate('/step2', { replace: true });
  
        }
    }
      const handleSubmit = (e) => {
    
      e.preventDefault();
      validation(e)
      
    };
     
  return (
 <> 
{testData.map((item, idx) => (
        <Progress key={idx} bgcolor={item.bgcolor} completed={name?.length&&lastname?.length&&email?.length ? item.completed="50":item.completed} />
      ))}
  <div className="Step1" style={{marginTop:"60px"}}>
     <label style={{marginRight:"40px"}}>First Name</label>
     <TextField
          required
          id="outlined-required"
          label="Required"
         value={name}
          onChange={handleName}
        />
        <br></br>  <br></br>  <br></br>
     <label style={{marginRight:"40px"}}>Last Name</label>
     <TextField
          required
          id="outlined-required"
          label="Required"
          value={lastname}
          onChange={handleLastName}
        />
           <br></br>  <br></br>  <br></br>
     <label style={{marginRight:"40px"}}>Email ID </label>
     <TextField
          required
          id="outlined-required"
          label="Required"
          value={email}
          style={{marginLeft:"8px"}}
          onChange={handleEmail}
        />

    </div>
     <div> 
        {/* <Link to="/step2"> */}
        <Button variant="contained" style={{marginTop:"35px"}} onClick={handleSubmit}>Next</Button>
        {/* </Link> */}
        </div></>  
  );
}

export default Step1;
