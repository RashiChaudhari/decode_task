import React,{useState,useEffect} from "react"
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link,useNavigate } from "react-router-dom";
import Progress from "./Progress";
const testData = [
   
    { bgcolor: "#ef6c00", completed: 0 },
  ];
  
function Step2() {
    const navigate = useNavigate();
    const [contact, setContact] = useState("");
    const [address, setAddress] = useState("");
    const handleContact = (e) => {
        // validation(e.target.value)
        setContact(e.target.value);
        console.log(contact);
      };
      const handleAddress = (e) => {
        setAddress(e.target.value);
        // validation(e.target.value)
        console.log(address);
      };
      function validation(value){
        if (contact === '' ||value==='') {
            alert('Enter contact number');
        } 
        if(address===''){
            alert('Enter address');
        }
      
        else{
        navigate('/step3', { replace: true });
  
        }
    }
      const handleSubmit = (e) => {
    
      e.preventDefault();
      validation(e)
      
    };
    return (
        <>
        {testData.map((item, idx) => (
        <Progress key={idx} bgcolor={item.bgcolor} completed={contact?.length&&address?.length ? item.completed="60":item.completed="50"} />
      ))}
         <div className="App" style={{marginTop:"60px"}}>
            <label style={{marginRight:"40px"}}>Contact No</label>
            <TextField
                 required
                 id="outlined-required"
                 label="Required"
                 value={contact}
                 onChange={handleContact}
               />
               <br></br>  <br></br>  <br></br>
            <label style={{marginRight:"40px"}}>Address</label>
            <TextField
                 required
                 id="outlined-required"
                 label="Required"
                  
value={address}   onChange={handleAddress}             />
       
           </div>
            <div> <Button variant="contained" style={{marginTop:"35px",marginLeft:"50%"}} onClick={handleSubmit}>Next</Button></div></>  
         );
}

export default Step2;
