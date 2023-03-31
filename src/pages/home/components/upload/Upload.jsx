import React from "react";
import { useRef, useState } from "react";
import "./upload.css";

function Upload({ contract }) {
  const [pdfHash, setPdfHash] = useState(null);
  const PatientAddress = useRef(null);
  const DoctorNameRef = useRef(null);
  const symptomRef = useRef(null);
  const diagnosisRef = useRef(null);
  const treatmentRef = useRef(null);
  const medicationRef = useRef(null);
  const detailRef = useRef(null);

  const addRecord = async (e) => {
    e.preventDefault();

    setPdfHash("thisisahash");

    console.log(
      PatientAddress.current.value,
      DoctorNameRef.current.value,
      symptomRef.current.value,
      diagnosisRef.current.value,
      treatmentRef.current.value,
      medicationRef.current.value,
      detailRef.current.value,
      "pdfHash",
      "pdfHash"
    );

    const addingRecord = await contract.add_record(
      PatientAddress.current.value,
      DoctorNameRef.current.value,
      symptomRef.current.value,
      diagnosisRef.current.value,
      treatmentRef.current.value,
      medicationRef.current.value,
      detailRef.current.value,
      "pdfHash",
      "pdfHash"
    );

    console.log(addingRecord);
  };

  return (
    <div className="upload-form">
      <div className="left">
        <div className="heading">
          <h3>Upload Record</h3>
        </div>
        <div className="inputs">
          <form action="">
            <div className="label-input">
              <label htmlFor="address">Patient's Address :</label>
              <input
                ref={PatientAddress}
                type="text"
                name="address"
                cols=""
                rows="4"
                id=""
              />
            </div>
            <div className="label-input">
              <label htmlFor="address">Doctor's Name :</label>
              <input
                ref={DoctorNameRef}
                type="text"
                name="address"
                cols=""
                rows="4"
                id=""
              />
            </div>
            <div className="label-input">
              <label htmlFor="symptoms">Symptoms :</label>
              <textarea
                ref={symptomRef}
                type="text"
                name="symptoms"
                cols=""
                rows="4"
                id=""
              />
            </div>
            <div className="label-input">
              <label htmlFor="diagnosis">Diagnosis :</label>
              <textarea
                ref={diagnosisRef}
                type="text"
                cols=""
                rows="4"
                name="diagnosis"
              />
            </div>
            <div className="label-input">
              <label htmlFor="treatment">Treatment :</label>
              <textarea
                ref={treatmentRef}
                type="text"
                cols=""
                rows="4"
                name="treatment"
              />
            </div>
            <div className="label-input">
              <label htmlFor="report">All Reports :</label>
              <input type="file" name="report" />
            </div>
            <div className="label-input">
              <label htmlFor="medication">Medications :</label>
              <textarea
                ref={medicationRef}
                type="text"
                cols=""
                rows="4"
                name="medication"
              />
            </div>
            <div className="label-input">
              <label htmlFor="detail">Details</label>
              <textarea
                ref={detailRef}
                name="detail"
                id=""
                cols=""
                rows="4"
                placeholder=" Reason for this to happen
                            How can he avoid it
                            Lifestyle he should adapt"
              ></textarea>
            </div>
            <div className="label-input">
              <label htmlFor="bill">All Bills :</label>
              <input type="file" name="bill" />
            </div>
            <button onClick={addRecord}>Add Record</button>
          </form>
        </div>
      </div>
      <div className="right">
        <h3>Info</h3>
      </div>
    </div>
  );
}

export default Upload;
