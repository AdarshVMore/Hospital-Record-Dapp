import React from "react";
import { useState, useEffect } from "react";

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
        <>
          <a href="/home">Home</a>
          <a href="/home/access">Access</a>
        </>
      ) : null}
    </div>
  );
}

export default Nav2;
