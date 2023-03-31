import React from "react";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Access from "./access/Access.jsx";
import Home from "./home/Home.jsx";

function MainContainer({ contract, account }) {
  const [isDoc, setIsDoc] = useState(false);
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
    <div>
      <Routes>
        <Route
          path="/"
          element={<Home contract={contract} account={account} />}
        />

        {!isDoc ? (
          <>
            <Route
              path="access"
              element={<Access contract={contract} account={account} />}
            />
          </>
        ) : null}
      </Routes>
    </div>
  );
}

export default MainContainer;
