import React from "react";

function TopNav({ contract, account }) {
  const isDoc = false;
  const getDoctorList = async () => {
    const docList = await contract.get_doctor_list();
    console.log("got doclist");
    console.log(docList);
    for (const i = 0; i < docList.length; i++) {
      const docAccount = docList[i];
      console.log(docAccount);
      if (docAccount == account) {
        isDoc = true;
      }
    }
  };

  getDoctorList();

  return (
    <div className="TopNav">
      {isDoc ? (
        <input type="text" id="search" placeholder="Search for Address" />
      ) : (
        ""
      )}
      <button>
        <a href="home/upload">Upload Record</a>
      </button>
      <p>{account ? account : "not connected"}</p>
    </div>
  );
}

export default TopNav;
