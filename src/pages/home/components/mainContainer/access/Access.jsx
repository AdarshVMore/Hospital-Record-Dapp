import React from "react";
import { useState, useEffect, useRef } from "react";

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
    <div>
      <div className="access_top">
        <input
          className="access_address"
          type="text"
          placeholder="Enter Address"
          ref={accessAddressRef}
        />
        <button onClick={givingAccess}>Give Access</button>
      </div>
      <div className="access_list">
        <p className="accessedAddresses">
          {accessList.map((item, index) => (
            <>
              {item === "0x0000000000000000000000000000000000000000" ? null : (
                <>
                  <p key={index}>{item}</p>
                  <button
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
                  </button>{" "}
                </>
              )}
            </>
          ))}
        </p>
      </div>
    </div>
  );
}

export default Access;
