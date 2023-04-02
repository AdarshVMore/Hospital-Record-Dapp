import React from "react";
import{
  Box,
  Stack,
  Button,
  Typography
} from '@mui/material';

import { useState, useEffect, useRef } from "react";
export let PAddressRef = "";

function TopNav({ contract, account }) {
  PAddressRef = useRef(null);
  const [isDoc, setIsDoc] = useState(false);
  const [haveAccess, setHaveAccess] = useState(false);
  const access = async () => {
    let address = document.getElementById("search").value;
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
    <div className="TopNav">
      {isDoc ? (
        <>
          <form>
            <input
              ref={PAddressRef}
              type="text"
              id="search"
              placeholder="Search for Address"
              onChange={access}
            />
          </form>
        </>
      ) : null}
      <button>
        <a href={haveAccess ? "home/upload" : ""}>Upload Records</a>
      </button>
      <Typography  varaint='h5'>{account ? account : "not connected"}</Typography>
    </div>
  );
}

export default TopNav;
