// import React from "react";

// function Verify() {
//   return (
//     <div>
//       <h2>Verify</h2>
//       <form action="">
//         <label htmlFor="file">Add Degree & certificates</label>
//         <input type="text" name="file" />
//         <input type="file" name="file" />
//         <textarea
//           name=""
//           placeholder="Clinic/Hospital Address"
//           id=""
//           cols="30"
//           rows="10"
//         ></textarea>
//         <textarea
//           name=""
//           placeholder="Write about your education and Bakground"
//           id=""
//           cols="30"
//           rows="10"
//         ></textarea>
//         <select name="" id="">
//           <option value="+91">+ 91</option>
//         </select>
//         <input type="text" />
//         <a href="/register">Verify</a>
//       </form>
//     </div>
//   );
// }

// export default Verify;

import React from 'react';
import {
  Box,
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography
} from '@mui/material';

function Verify() {
  return (
    <Box sx={{
      marginTop:'7rem',
      width:'400px',
      margin:'auto',
      justifyContent: 'center',
      padding: '5px',
      border: '#2b4e71 solid 2px ',
      textAlign: 'center',
      boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
      background:'#F9F6EE'
                    // width:'600px'
    }}>
      <Typography variant="h2">Verify</Typography>
      <form>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField fullWidth label="Add Degree & certificates" name="file" />
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth>
              {/* <InputLabel>Clinic/Hospital Address</InputLabel> */}
              <TextField multiline rows={4}
              placeholder='Clinic/Hospital Address'
              label="Clinic/Hospital Address"
              />
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth>
              {/* <InputLabel
              placeholder='Write about your education and background'>Write about your education and background</InputLabel> */}
              <TextField multiline rows={4}
              label="Write about your education and background"
              placeholder='Write about your education and background'
              />
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <InputLabel label="country code" >Country Code</InputLabel>
              <Select
               value="+91">
                <MenuItem value="+91">+91</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth label="Phone Number" type="tel" />
          </Grid>
        </Grid>
        <Button variant="contained"
        color="success"
        href="/register"
        sx={{marginTop:'15px'}}
        >
          Verify
        </Button>
      </form>
    </Box>
  );
}

export default Verify;
