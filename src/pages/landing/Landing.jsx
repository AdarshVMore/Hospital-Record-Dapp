import React from "react";
import CoverImage from "./CoverImage";
import './Landing.css'
import Header from "./Header";
import { Button, Typography, Box, Stack, Card } from "@mui/material";
import {BsFillClipboard2PlusFill} from 'react-icons/bs'
import {TbAmbulance} from 'react-icons/tb'
import logo from './images/healTracjk.jpeg'

function Landing() {
  return (
    <div>
      {/* <Header></Header> */}
      {/* <button>
        <a href="/register">Register</a>
      </button> */}
      <Stack
        mt={0}
        // direction="row" spacing={70}
        direction={{ xs: "column", sm: "row" }}
        spacing={{ xs: 1, sm: 2, md: 40 }}
      >
        <img src={logo} alt="image" className='img'/>
      <Header></Header>
      <Box sx={{ w: 30, mt: '4rem', ml:'4rem', display:'inline-block',positon: 'absolute', }}>
        <Stack
        mx={3} my={4}
         direction={{ xs: 'column', sm: 'row' }}
         spacing={{ xs: 1, sm: 2, md: 3 }}
         >
          {/* <Button variant="contained" size='large'
          sx={{ fontSize: '1.2rem', padding:'.6rem 1.2rem' }}
          style={{ backgroundColor: 'rgb(0, 255, 119)' , boxShadow: "3px 3px 3px green"}}

          ></Button> */}
            <Button
              variant="contained"
              size="large"
              sx={{ fontSize: "1.2rem", padding: ".6rem 1.2rem" }}
              style={{
                backgroundColor: "rgb(0, 255, 119)",
                boxShadow: "3px 3px 3px green",
              }}
              href='/home'
            >
              Login
            </Button>
            <Button
              variant="contained"
              sx={{ fontSize: "1.2rem", padding: "0 1.2rem" }}
              style={{
                backgroundColor: "rgb(0, 255, 119)",
                boxShadow: "3px 3px 3px green",
              }}
              href="/register"
            >
              Register
            </Button>
          </Stack>
        </Box>
      </Stack>
      <CoverImage></CoverImage>
      <Box
      sx={{
        display:'inline-block',
        marginLeft:'50%'
      }}>
        <Box
        sx={{
          // height:'400px',
          // width:'200px',
        }}>
          {/* <Typography>
          HealTrack helps you manage your medical history seamlessly</Typography>
          <Typography>so you can focus on your health.</Typography>
          <Typography> From storing reports to viewing your timeline, we've got you covered
          </Typography> */}
          <Stack>
          <Typography variant="h3" color={'teal'}>Your health, Our Priority.</Typography>
          <Box
          sx={{
            marginLeft:'60px',
            // boxShadow: "3px 3px 3px green",
          }}>
            <ul>
            {/* <i class="fa-solid fa-triangle">  </i> */}
            <Stack sx={{color:'green'}}
            direction={"row"}>
            <div className="icon"><BsFillClipboard2PlusFill ></BsFillClipboard2PlusFill></div><Typography color={'#bb6868'} variant="h5">Manage your medical history seamlessly</Typography>
            </Stack>

            <Stack sx={{color:'green'}}
            direction={"row"}
            >
            <div className="icon"><BsFillClipboard2PlusFill ></BsFillClipboard2PlusFill></div><Typography color={'#bb6868'} variant="h5">Say GoodBye to scattered medical records</Typography>
            </Stack>

            <Stack sx={{color:'green'}}
            direction={"row"}
            >
            <div className="icon"><BsFillClipboard2PlusFill ></BsFillClipboard2PlusFill></div><Typography color={'#bb6868'} variant="h5">Where care meets convenience.</Typography>
            </Stack>

            <Stack sx={{color:'green'}}
            direction={"row"}
            >
            <div className="icon"><BsFillClipboard2PlusFill ></BsFillClipboard2PlusFill></div><Typography color={'#bb6868'}  variant="h5">Simplify your life, One record at a time.</Typography>
            </Stack>

            </ul>
          </Box>
          </Stack>

        </Box>
      </Box>

    </div>
  );
}

export default Landing;
