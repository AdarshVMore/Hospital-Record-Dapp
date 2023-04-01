import React from 'react'
import {Box, Typography} from '@mui/material'
import Banner from './images/banner.png';
export default function Header() {
  return (
      <Box
      sx={{ml:'10%', mt:'1.5rem',color:'#2b4e71',width:'100%'}}
      >
        <Typography variant='h2'

        >
          Healtrack
        </Typography>
        <Typography variant='h6'
        sx={{ml:'20%',fontWeight:'heavy'}}
        >
          A path for healtheir track.....
        </Typography>
      </Box>
  )
}

