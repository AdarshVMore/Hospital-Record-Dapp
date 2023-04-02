import React from 'react'
import {
  Card,
  Typography,
  Button,
  Stack,

} from '@mui/material'

export default function PagenotFound() {
  return (
    <Card
    sx={{
      // marginTop:'7rem',
      display:'flex',
      marginTop:'200px',
      marginLeft:'500px',
      width:'400px',

      justifyContent: 'center',
      textAlign:'center',
      padding: '15px',
      border: '#2b4e71 solid 2px ',
      textAlign: 'center',
      boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
      background:'#F9F6EE'
    }}>
      <Stack>
      <Typography variant="h1" >
        Page Not Found
      </Typography>
      <Button variant='contained' color='success' href='/'>RETURN</Button>
      </Stack>

    </Card>
  )
}

