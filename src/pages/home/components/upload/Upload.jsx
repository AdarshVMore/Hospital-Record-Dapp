import React from "react";
import { useRef, useState } from "react";
import "./upload.css";
import { Box, Button, FormControl, Input, Stack, TextField, Typography,Banner } from '@mui/material';
import styled from '@emotion/styled';
import { NFTStorage, File, Blob } from "nft.storage";


const StyledBox = styled(Box)({
  position: 'absolute',
  top: '6%',
  left: '50%',
  width: '60%',
  transform: 'translate(-50%, -50%)',
  justifyContent: 'center',
  padding: '5px',
  border: '#2b4e71 solid 2px ',
  textAlign: 'center',
  boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
  background: '#F9F6EE',
  marginBottom: '3rem',
});


function Upload({ contract }) {
  const PatientAddress = useRef(null);
  const DoctorNameRef = useRef(null);
  const symptomRef = useRef(null);
  const diagnosisRef = useRef(null);
  const treatmentRef = useRef(null);
  const medicationRef = useRef(null);
  const detailRef = useRef(null);

  const addRecord = async (e) => {
    e.preventDefault();

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

          <h3 className="heading">Upload Record</h3>

        <div className="inputs">
          <Stack>
          <form action="">
            <div className="label-input">
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 1, sm: 2, md: 4 }} marginTop="1rem">
            <label htmlFor="address">Patient's Address :</label>
              <input
                ref={PatientAddress}
                type="text"
                name="address"
                cols=""
                rows="4"
                id=""
              />
            </Stack>

            </div>
            <div className="label-input">
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 1, sm: 2, md: 6.2 }} marginTop="1rem"><label htmlFor="address">Doctor's Name :</label>
              <input
                ref={DoctorNameRef}
                type="text"
                name="address"
                cols=""
                rows="4"
                id=""
              /></Stack>

            </div>
            <div className="label-input">
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 1, sm: 2, md: 11.2 }} marginTop="1rem"><label htmlFor="symptoms">Symptoms :</label>
              <textarea
                ref={symptomRef}
                type="text"
                name="symptoms"
                cols=""
                rows="4"
                id=""
              /></Stack>

            </div>
            <div className="label-input">
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 1, sm: 2, md: 12 }} marginTop="1rem"><label htmlFor="diagnosis">Diagnosis :</label>
              <textarea
                ref={diagnosisRef}
                type="text"
                cols=""
                rows="4"
                name="diagnosis"
              /></Stack>

            </div>
            <div className="label-input">
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 1, sm: 2, md: 12 }} marginTop="1rem">
              <label htmlFor="treatment">Treatment :</label>
              <textarea
                ref={treatmentRef}
                type="text"
                cols=""
                rows="4"
                name="treatment"
              />
              </Stack>

            </div>
            <div className="label-input">
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 1, sm: 2, md: 10.5 }} marginTop="1rem">
              <label htmlFor="report">All Reports :</label>
              <input type="file" name="report" />
              </Stack>

            </div>
            <div className="label-input">
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 1, sm: 2, md: 9.8 }} marginTop="1rem">
            <label htmlFor="medication">Medications :</label>
              <textarea
                ref={medicationRef}
                type="text"
                cols=""
                rows="4"
                name="medication"
              />
            </Stack>

            </div>
            <div className="label-input">
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 1, sm: 2, md: 17.7 }} marginTop="1rem">
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
              </Stack>

            </div>
            <div className="label-input">
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 1, sm: 2, md: 14.5 }} marginTop="1rem">
              <label htmlFor="bill">All Bills :</label>
              <input type="file" name="bill" />
              </Stack>

            </div>
            <Button variant="contained" color="success" className="addrecord-btn"
            onClick={addRecord}>Add Record</Button>

          </form>
          </Stack>
        </div>
      </div>

    </div>

  );
}

export default Upload;




// const UploadForm = () => {
//   return (

//   );
// };

// export default UploadForm;

