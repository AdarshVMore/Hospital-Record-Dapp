import React from 'react'
import {Box, Typography} from '@mui/material'
import Banner from './images/banner.png';
import './Header.css'
export default function Header() {
  return (
      <Box
      sx={{ml:'10%', mt:'1.5rem',color:'teal',width:'100%'}}
      >

        <Typography variant='h2'

        >
          Healtrack
        </Typography>
        <Typography variant='h6'
        sx={{ml:'10%',fontWeight:'heavy'}}
        >
          A path for healthier track.....
        </Typography>
      </Box>
  )
}

