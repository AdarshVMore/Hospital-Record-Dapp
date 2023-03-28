import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import TopNav from "./components/topNav/TopNav.jsx";
import Nav2 from "./components/nav2/Nav2.jsx";
import MainContainer from "./components/mainContainer/MainContainer.jsx";
import RecordInfo from "./components/recordInfo/RecordInfo.jsx";
import Upload from "./components/upload/Upload.jsx";

function Home({ account, provider, contract }) {
  return (
    <div>
      <TopNav contract={contract} account={account} />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Nav2 />
              <MainContainer />
            </>
          }
        />
        <Route path="/record-info" element={<RecordInfo />} />
        <Route path="/upload" element={<Upload />} />
      </Routes>
    </div>
  );
}

export default Home;
