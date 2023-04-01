import React, { useState, useEffect } from 'react';
import {
  Card,
  Typography,
  Radio,
  Stack,
  Box,
  Button,
  FormControl,
  RadioGroup,
  FormControlLabel,
  TextField
} from '@mui/material';
import Patient from './Patient';
import Doctor from './Doctor';

function Register({ contract }) {
  const [opt, setOpt] = useState(null);
  // const [isPatient, setIspatient] = useState(true);
  const registerAsP = async (e) => {
    setOpt("P");
    console.log(opt);
  };
  const registerAsD = (e) => {
    setOpt("D");
    console.log(opt);
  };

  const add_patient = async (e) => {
    e.preventDefault();
    const pname = document.getElementById("pname").value;
    const page = document.getElementById("page").value;

    const addingPatient = await contract.add_agent(pname, page, 0);
    console.log("patient added named", pname, "age:", page);
    window.location.href = "/home";
  };

  const add_doctor = async (e) => {
    e.preventDefault();
    const dname = document.getElementById("dname").value;
    const dage = document.getElementById("dage").value;

    const addingDoctor = await contract.add_agent(dname, dage, 1);
    console.log("Doctor added named", dname, "age:", dage);
    window.location.href = "/home";
  };

  return (
    // <div>
    //   <h2>Register</h2>
    //   <h5>Registerr as</h5>
    //   <div className="select">
    //     <div className="opt opt1">
    //       <div className="circle"></div>
    //       <a onClick={registerAsP}>Patient</a>
    //     </div>
    //     <div className="opt opt2" onClick={registerAsD}>
    //       <div className="circle"></div>
    //       <a>Doctor</a>
    //     </div>
    //   </div>
    //   <form action="" id="form">
    //     {opt === "P" ? (
    //       <>
    //         <input type="text" id="pname" placeholder="Patient's Name" />
    //         <input type="text" id="page" placeholder="Age" />
    //         <button type="submit">
    //           <a href="/home" onClick={add_patient}>
    //             Register
    //           </a>
    //         </button>
    //       </>
    //     ) : (
    //       ""
    //     )}
    //     {opt == "D" ? (
    //       <>
    //         <input type="text" id="dname" placeholder="Doctor's Name" />
    //         <input type="text" id="dage" placeholder="Age" />
    //         <a href="/verify">Verify</a>
    //         <button type="submit">
    //           <a href="/home" onClick={add_doctor}>
    //             Register
    //           </a>
    //         </button>
    //       </>
    //     ) : (
    //       ""
    //     )}
    //   </form>
    // </div>
    <Card
      variant="outlined"
      // sx={{ position:'inline-block' ,margin: 'auto', justifyContent: 'center' }}
      sx={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        width: '300px',
        transform: 'translate(-50%, -50%)',
        justifyContent: 'center',
        padding: '20px',
        border: '#2b4e71 solid 2px ',
        textAlign: 'center',
        boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
        background:'#F9F6EE'

      }}
    >
      <Box sx={{ color: '#2b4e71' }}>
        <Typography variant="h2">Sign Up</Typography>
        <Typography variant="h5" color={'black'}>
          Register as
        </Typography>
      </Box>
      {/* <FormControl>
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
        >
          <FormControlLabel value="female" control={<Radio />} label="Doctor" onClick={setOpt('D')}/>
          <FormControlLabel value="male" control={<Radio />} label="Patient" onClick={setOpt('P')} />
        </RadioGroup>
      </FormControl> */}
      <FormControl>
        <RadioGroup
          row
          aria-label="register-as"
          name="register-as"
          value={opt}
          onChange={(e) => setOpt(e.target.value)}
        >
          <FormControlLabel value="P" control={<Radio />} label="Patient" onClick={()=>{registerAsP()}}/>
          <FormControlLabel value="D" control={<Radio />} label="Doctor" onClick={()=>{registerAsD()}}/>
        </RadioGroup>
      </FormControl>
      {/* <Button
        variant="contained"
        sx={{ fontSize: '1.2rem', padding: '.6rem 1.2rem' }}
        style={{
          backgroundColor: 'rgb(34, 139, 34)',
          boxShadow: '3px 3px 3px green',
          margin: '3px'
        }}
      //  onClick={()=>{
      //   return opt=='P'?()=>{
      //     console.log("ptient part connected");
      //     <Patient></Patient>
      //   }:()=>{
      //     console.log("doctor part connected");

      //     <Doctor></Doctor>
      //   }
      //  }}

      >
        Continue
      </Button> */}
      {opt === 'P' &&
      <Box>
        <TextField fullWidth label="Full Name" id="pname" placeholder="Patient's Name"
      sx={{margin:'5px'  }}
      />
      <TextField fullWidth label="Age" id="page"  placeholder="Patient's Age"
      sx={{margin:'5px' }}
      />
        {/* <input type="text" id="pname" placeholder="Patient's Name" /> */}
             {/* <input type="text" id="page" placeholder="Age" /> */}
             <TextField fullWidth label="Email" placeholder="Patient's Email"
      sx={{margin:'5px' }}
      />
             <Button type="submit"
             variant="contained"
             sx={{ fontSize: '1.2rem', padding: '.6rem 1.2rem' }}
             style={{
               backgroundColor: 'rgb(34, 139, 34)',
               boxShadow: '3px 3px 3px green',
               margin: '10px'
             }}
             >
              <a style={{textDecoration:"none"}} href="/home" onClick={add_patient}>
                Register
               </a>
             </Button>
        </Box>}
{opt === 'D' && <Box>
        <TextField fullWidth label="Full Name" id="dname" placeholder="Doctor's Name"
      sx={{margin:'5px' }}
      />
      <TextField fullWidth label="Age" id="dage"  placeholder="Doctor's Age"
      sx={{margin:'5px' }}
      />
      <TextField fullWidth label="Email" placeholder="Doctor's Email"
      sx={{margin:'5px' }}
      />
        {/* <input type="text" id="pname" placeholder="Patient's Name" /> */}
             {/* <input type="text" id="page" placeholder="Age" /> */}
             <Button type="submit"
             variant="contained"
             sx={{ fontSize: '1.2rem', padding: '.6rem 1.2rem' }}
             style={{
               backgroundColor: 'rgb(34, 139, 34)',
               boxShadow: '3px 3px 3px green',
               margin: '10px'
             }}
             >
              <a style={{textDecoration:'none'}} href="/home" onClick={add_doctor}>
                Register
               </a>
             </Button>
        </Box>}
    </Card>

  );
}

export default Register;


