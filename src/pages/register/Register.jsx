import React from "react";
import { useState } from "react";

function Register({ contract }) {
  const [opt, setOpt] = useState(null);
  const registerAsP = async (e) => {
    setOpt("P");
  };
  const registerAsD = (e) => {
    setOpt("D");
  };

  const add_patient = async (e) => {
    e.preventDefault();
    const pname = document.getElementById("pname").value;
    const page = document.getElementById("page").value;

    const addingPatient = await contract.add_agent(pname, page, 0);
    await addingPatient.wait();
    console.log("patient added named", pname, "age:", page);
  };

  const add_doctor = async (e) => {
    e.preventDefault();
    const dname = document.getElementById("dname").value;
    const dage = document.getElementById("dage").value;

    const addingDoctor = await contract.add_agent(dname, dage, 0);
    await addingDoctor.wait();
    console.log("Doctor added named", dname, "age:", dage);
  };

  return (
    <div>
      <h2>Register</h2>
      <h5>Registerr as</h5>
      <div className="select">
        <div className="opt opt1">
          <div className="circle"></div>
          <a onClick={registerAsP}>Patient</a>
        </div>
        <div className="opt opt2" onClick={registerAsD}>
          <div className="circle"></div>
          <a>Doctor</a>
        </div>
      </div>
      <form action="" id="form">
        {opt == "P" ? (
          <>
            <input type="text" id="pname" placeholder="Patient's Name" />
            <input type="text" id="page" placeholder="Age" />
            <button type="submit">
              <a href="/home" onClick={add_patient}>
                Register
              </a>
            </button>
          </>
        ) : (
          ""
        )}
        {opt == "D" ? (
          <>
            <input type="text" id="dname" placeholder="Doctor's Name" />
            <input type="text" id="dage" placeholder="Age" />
            <a href="/verify">Verify</a>
            <button type="submit">
              <a href="/home" onClick={add_doctor}>
                Register
              </a>
            </button>
          </>
        ) : (
          ""
        )}
      </form>
    </div>
  );
}

export default Register;
