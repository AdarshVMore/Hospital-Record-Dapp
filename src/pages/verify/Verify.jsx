import React from "react";

function Verify() {
  return (
    <div>
      <h2>Verify</h2>
      <form action="">
        <label htmlFor="file">Add Degree & certificates</label>
        <input type="text" name="file" />
        <input type="file" name="file" />
        <textarea
          name=""
          placeholder="Clinic/Hospital Address"
          id=""
          cols="30"
          rows="10"
        ></textarea>
        <textarea
          name=""
          placeholder="Write about your education and Bakground"
          id=""
          cols="30"
          rows="10"
        ></textarea>
        <select name="" id="">
          <option value="+91">+ 91</option>
        </select>
        <input type="text" />
        <a href="/register">Verify</a>
      </form>
    </div>
  );
}

export default Verify;
