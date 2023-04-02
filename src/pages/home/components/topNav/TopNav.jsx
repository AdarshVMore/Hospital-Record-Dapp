import React from 'react';
import { Box, Stack, Button, Typography } from '@mui/material';
import './topNav.css';
import { useState, useEffect, useRef } from 'react';
export let PAddressRef = '';

function TopNav({ contract, account }) {
  PAddressRef = useRef(null);
  const [isDoc, setIsDoc] = useState(false);
  const [haveAccess, setHaveAccess] = useState(!isDoc);
  const access = async () => {
    let address = document.getElementById('search').value;
    console.log(address);
    const list = await contract.get_accessed_doctorlist_for_patient(address);
    for (let i = 0; i < list.length; i++) {
      if (account === list[i]) {
        setHaveAccess(true);
      } else {
        setHaveAccess(false);
      }
    }
    console.log(list);
    console.log(haveAccess);
  };
  useEffect(() => {
    const getDoctorList = async () => {
      const docList = await contract.get_doctor_list();
      for (let i = 0; i < docList.length; i++) {
        let docAccount = docList[i];
        if (docAccount === account) {
          setIsDoc(true);
          break;
        }
      }
    };

    getDoctorList();
  }, [contract, account]);

  return (
    <Box

    className="TopNav">
      <Stack
      sx={{
        position: 'absolute',
  top: '5.5%',
  left: '53%',
  width: '80%',
  transform: 'translate(-50%, -50%)',
  justifyContent: 'center',
  padding: '5px',
  border: '#2b4e71 solid 2px ',
  textAlign: 'center',
  // boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
  background: '#F9F6EE',
  marginBottom: '3rem',
      }}

      direction={{ xs: 'column', sm: 'row' }}
  spacing={{ xs: 1, sm: 2, md: 4 }}
  >   <Box
  sx={{marginTop:'6px', marginLeft:'10px', marginBottom:'10px'}}>
      {isDoc ? (
        <>
          <form>
            <input
              ref={PAddressRef}
              type="text"
              id="search"
              // style={{maringTop:'20px'}}
              placeholder="Search for Address"
              onChange={access}
            />
          </form>
        </>
      ) : null}
      </Box>
      <Button  varaint="outlined"
      sx={{
        color: 'blue',
        // backgroundColor: 'rgb(0, 0, 0)',
      // boxShadow: "3px 3px 3px #2b4e71 ",

      }}
      >
        <a href={haveAccess ? 'home/upload' : ''}
        // sx={{
        //   fontSize:'.75rem',
        //   // backgroundColor:'red'
        //   backgroundColor: 'rgb(34, 139, 34)',
        //   boxShadow: "3px 3px 3px green",
        // }}
        >Upload Records</a>
      </Button>
      <Typography  sx={{
        marginTop:'1rem',
        paddingTopL:'1rem'
      }}>
        {account ? account : 'not connected'}
      </Typography>
      </Stack>
    </Box>
  );
}

export default TopNav;
