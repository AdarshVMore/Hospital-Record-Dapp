import React from "react";
import { useState, useEffect } from "react";
import {
  Button,Box
} from '@mui/material'

function Nav2({ contract, account }) {
  const [isDoc, setIsDoc] = useState(false);

  useEffect(() => {
    const getDoctorList = async () => {
      const docList = await contract.get_doctor_list();
      for (let i = 0; i < docList.length; i++) {
        let docAccount = docList[i];
        if (docAccount === account) {
          setIsDoc(true);
          console.log(isDoc);
          console.log(docAccount);
          break;
        }
      }
    };

    getDoctorList();
  }, [contract, account]);
  return (
    <div>
      {!isDoc ? (
        <Box
        sx={{
          position: 'absolute',
  top: '20%',
  left: '50%',
  width: '20%',
  transform: 'translate(-50%, -50%)',
  justifyContent: 'center',
  padding: '5px',
  // border: '#2b4e71 solid 2px ',
  textAlign: 'center',
  // boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
  background: '#F9F6EE',
  marginBottom: '3rem',
        }}>
          <Button
          variant="outlined"
          sx={{
            color: 'blue',
            // backgroundColor: 'rgb(0, 0, 0)',
          boxShadow: "3px 3px 3px #2b4e71 ",
          marginRight:'1rem',
          }}
          ><a href="/home">Home</a></Button>
          <Button variant="outlined"  sx={{
            color: 'blue',
            // backgroundColor: 'rgb(0, 0, 0)',
          boxShadow: "3px 3px 3px #2b4e71 ",

          }}
          ><a href="/home/access">Access</a></Button>
        </Box>
      ) : null}
    </div>
  );
}

export default Nav2;
