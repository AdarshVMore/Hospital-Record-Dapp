import React from "react";
import { useState, useEffect } from "react";
import { PAddressRef } from "../../topNav/TopNav";
import { Stack, Typography, Box, Button, Grid } from "@mui/material";
function Home({ contract, account }) {
  const [isDoc, setIsDoc] = useState(false);
  const [patientInfo, setPatientInfo] = useState([]);
  const [click, setClick] = useState(false);

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
    setClick(true);
    console.log(
      patientInfo,
      patientInfo[0],
      patientInfo[2][0].patientAddress,
      click
    );
  };
  return (
    <div>
      <Button
        varaint="oulitned"
        sx={{
          // color: 'blue',
          backgroundColor: "rgb(58, 227, 103)",
          boxShadow: "3px 3px 3px #2b4e71 ",
          margin: "10px 0 0 50px ",
        }}
        onClick={getPatient}
      >
        Get Records
      </Button>
      <div>
        <div className="records">
          <div className="article">
            <Grid container spacing={{ xs: 2, md: 1 }}>
              {click
                ? patientInfo[2].map((record, i) => (
                    <Stack
                      key={i}
                      className="article"
                      direction="column"
                      sx={{
                        // position: 'absolute',
                        // top: '50%',
                        // left: '50%',
                        // width: '300px',
                        // transform: 'translate(-50%, -50%)',
                        margin: "auto",
                        justifyContent: "center",
                        marginTop: "12rem",
                        padding: "5px",
                        border: "#2b4e71 solid 2px ",
                        textAlign: "center",
                        boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                        background: "#F9F6EE",
                        width: "600px",
                      }}
                      //  spacing={{ xs: 1, sm: 2, md: 4 }}
                    >
                      <Typography variant="h6">
                        Patient Name: {patientInfo[0]}
                      </Typography>
                      <Typography variant="h6">
                        Patient Address: {record.patientAddress}
                      </Typography>
                      <Typography variant="h6">
                        Doctor Name: {record.doctorName}
                      </Typography>
                      <Typography variant="h6">
                        Symptoms: {record.symptoms}
                      </Typography>
                      <Typography variant="h6">
                        Diagnosis: {record.diagnosis}
                      </Typography>
                      <Typography variant="h6">
                        Reports:{" "}
                        <a href={`https://ipfs.io/ipfs/${record.report}`}>
                          <Typography
                            sx={{
                              bgcolor: "gray",
                              display: "inline",
                              padding: "2px 10px",
                              borderRadius: "5px",
                              color: "white",
                            }}
                          >
                            Reports
                          </Typography>
                        </a>
                      </Typography>
                      <Typography variant="h6">
                        Treatment: {record.treatment}
                      </Typography>
                      <Typography variant="h6">
                        Medication: {record.Medication}
                      </Typography>
                      <Typography variant="h6">
                        Details: {record.details}
                      </Typography>
                      <Typography variant="h6">
                        Bills:{" "}
                        <a href={`https://ipfs.io/ipfs/${record.bill}`}>
                          <Typography
                            sx={{
                              bgcolor: "gray",
                              display: "inline",
                              padding: "2px 10px",
                              borderRadius: "5px",
                              color: "white",
                            }}
                          >
                            Bills
                          </Typography>
                        </a>
                      </Typography>
                    </Stack>
                  ))
                : ""}
            </Grid>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
