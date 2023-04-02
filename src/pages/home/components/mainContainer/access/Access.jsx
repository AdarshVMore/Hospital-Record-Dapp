import React from "react";
import './access.css'
import { useState, useEffect, useRef } from "react";
import{
  Box,
  Stack,
  Button
} from '@mui/material';
function Access({ contract, account }) {
  const [accessList, setAccessList] = useState([]);

  const accessAddressRef = useRef(null);
  const givingAccess = async (e) => {
    console.log(accessAddressRef.current.value);
    const access = await contract.permit_access(accessAddressRef.current.value);
    await access.wait();
    console.log("access given");
  };

  useEffect(() => {
    const getAccessList = async () => {
      const list = await contract.get_accessed_doctorlist_for_patient(account);
      setAccessList(list);
      console.log(list);
    };

    getAccessList();
  }, [contract, account]);

  return (
    <Box
    sx={{display:'flex',
    alignItems:'center',
    justifyContent:'center',
    marginTop:'12rem',
    flexWrap: 'wrap',
    padding:'15px'
   }}>
      <Stack
      sx={{
        // position: 'absolute',
        // top: '50%',
        // left: '50%',
        // width: '300px',
        // transform: 'translate(-50%, -50%)',
        justifyContent: 'center',
        padding: '15px',
        border: '#2b4e71 solid 2px ',
        textAlign: 'center',
        boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
        background:'#F9F6EE'

      }}
      >
      <Stack className="access_top"
       direction={{ xs: 'column', sm: 'row' }}
       spacing={{ xs: 1, sm: 2, md: 4 }}>
        <input

          className="access_address"
          type="text"
          placeholder="Enter Address"
          ref={accessAddressRef}
        />
        <Button
        variant="contained"
        sx={{ padding: '.6rem 1.2rem' }}
        style={{
          backgroundColor: 'rgb(34, 139, 34)',
          boxShadow: '3px 3px 3px green',
          marginLeft: '10px'}}
        onClick={givingAccess}>Give Access</Button>
      </Stack>

        <p className="accessedAddresses">
          {accessList.map((item, index) => (
            <>
              {item === "0x0000000000000000000000000000000000000000" ? null : (
                <Stack className="access_list" marginTop={'5px'} direction={{ xs: 'column', sm: 'row' }}
                spacing={{ xs: 1, sm: 2, md: 10 }}>
                  <p key={index}>{item}</p>
                  <Button
                  variant="outlined" color="error" fontSize={'.5rem'}
                    onClick={async (e) => {
                      await contract.revoke_access(item);
                      const newList = [...accessList];
                      newList.splice(index, 1);
                      setAccessList(newList);
                      console.log(newList);
                    }}
                    key={index}
                  >
                    Revoke
                  </Button>{" "}
      </Stack>

              )}
            </>
          ))}
        </p>
      </Stack>
    </Box>
  );
}

export default Access;
