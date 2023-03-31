import React from "react";
import { useState, useEffect } from "react";
import { PAddressRef } from "../../topNav/TopNav";

function Home({ contract, account }) {
  const [isDoc, setIsDoc] = useState(false);
  const [patientInfo, setPatientInfo] = useState([]);

  let addr;
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

  const getPatient = async (e) => {
    e.preventDefault();
    if (isDoc) {
      addr = PAddressRef.current.value;
    } else {
      addr = account;
    }
    console.log(addr);

    const Info = await contract.get_patient(addr);
    console.log(Info);
    setPatientInfo(Info);
    console.log(
      patientInfo,
      patientInfo[2][0].patientAddress
      // patientInfo[2].length
    );
  };
  return (
    <div>
      <button onClick={getPatient}>Get Records</button>
      <div>
        <p>Patient Name: {patientInfo[0]}</p>
        <div className="records">
          <div className="article">
            {patientInfo[2].map((record, i) => (
              <div key={i} className="article">
                <p>Patient Address: {record.patientAddress}</p>
                <p>Doctor Name: {record.doctorName}</p>
                <p>Symptoms: {record.symptoms}</p>
                <p>Diagnosis: {record.diagnosis}</p>
                <p>Reports: {record.report}</p>
                <p>Treatment: {record.treatment}</p>
                <p>Medication: {record.Medication}</p>
                <p>Details: {record.details}</p>
                <p>Bills: {record.bill}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
