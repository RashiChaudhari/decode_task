import React,{useState,useEffect} from "react"
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link,useNavigate } from "react-router-dom";
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import "bootstrap/dist/css/bootstrap.min.css";
import UploadImages from "./UploadImages";
import Progress from "./Progress";
const testData = [
   
    { bgcolor: "#ef6c00", completed: 0 },
  ];
function Step3() {
  return (<>
   {testData.map((item, idx) => (
        <Progress key={idx} bgcolor={item.bgcolor} completed={item.completed="60"} />
      ))}

<div className="container" style={{ width: "600px" }}>
      <div className="my-3">
     
        <h4>Multiple Images Upload in React.js</h4>
      </div>

      <UploadImages />
    </div></>
  );
}

export default Step3;
