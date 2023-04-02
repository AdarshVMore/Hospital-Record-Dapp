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
    <Box sx={{ p: 2 , width:'400px', margin:'auto'}}>
      <Typography variant="h2">Verify</Typography>
      <form>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField fullWidth label="Add Degree &amp; certificates" name="file" />
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <InputLabel>Clinic/Hospital Address</InputLabel>
              <TextField multiline rows={4} />
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <InputLabel>Write about your education and background</InputLabel>
              <TextField multiline rows={4} />
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <InputLabel>Country Code</InputLabel>
              <Select value="+91">
                <MenuItem value="+91">+91</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth label="Phone Number" type="tel" />
          </Grid>
        </Grid>
        <Button variant="contained" color="primary" href="/register">
          Verify
        </Button>
      </form>
    </Box>
  );
}

export default Verify;
