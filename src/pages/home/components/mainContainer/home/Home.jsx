import React from "react";
import { useState, useEffect } from "react";
import { PAddressRef } from "../../topNav/TopNav";

function Home({ contract, account }) {
  const [isDoc, setIsDoc] = useState(false);
  const [patientInfo, setPatientInfo] = useState([]);
  const [patientRecords, setPatientRecords] = useState([]);
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
    console.log(patientInfo);
    const Records = await contract.get_patient_records(addr);
    setPatientInfo(Info);
    setPatientRecords(Records);
    console.log(patientInfo);
    console.log(patientRecords);
  };
  return (
    <div>
      <button onClick={getPatient}>Get Records</button>
      <div>
        {/* <p>Patient Name: {patientInfo[0]}</p>
        <p>Patient Address: {patientRecords.patientAddress}</p>
        <p>Doctor Name: {patientRecords.doctorName}</p>
        <p>Symptoms: {patientRecords.symptoms}</p>
        <p>Diagnosis: {patientRecords.diagnosis}</p>
        <p>Reports: {patientRecords.report}</p>
        <p>Treatment: {patientRecords.treatment}</p>
        <p>Medication: {patientRecords.Medication}</p>
        <p>Details: {patientRecords.details}</p>
        <p>Bills: {patientRecords.bill}</p> */}
      </div>
    </div>
  );
}

export default Home;
