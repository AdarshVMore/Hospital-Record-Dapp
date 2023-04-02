import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { ethers } from "ethers";
import Hospital from "./abis/Hospital.json";
import Landing from "./pages/landing/Landing.jsx";
import Register from "./pages/register/Register.jsx";
import Verify from "./pages/verify/Verify.jsx";
import Home from "./pages/home/Home.jsx";
import PagenotFound from "./pages/landing/PagenotFound";
function App() {
  const [account, setAccount] = useState("");
  const [contract, setContract] = useState("");
  const [provider, setProvider] = useState("");
  useEffect(() => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);

    const loadProvider = async () => {
      if (provider) {
        window.ethereum.on("chainChanged", () => {
          window.location.reload();
        });

        window.ethereum.on("accountsChanged", () => {
          window.location.reload();
        });
        await provider.send("eth_requestAccounts", []);
        const signer = provider.getSigner();
        const address = await signer.getAddress();
        setAccount(address);
        let contractAddress = "0x25913211d30F5cF3a73eBFE719D724c75f04794a";

        const contract = new ethers.Contract(
          contractAddress,
          Hospital.abi,
          signer
        );

        setContract(contract);
        setProvider(provider);
      } else {
        console.error("Metamask is not installed");
      }
    };
    provider && loadProvider();
  }, []);
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="register" element={<Register contract={contract} />} />
          <Route path="verify" element={<Verify />} />
          <Route
            path="home/*"
            element={
              <Home account={account} provider={provider} contract={contract} />
            }
          />
          <Route path='*' element={<PagenotFound />}/>
        </Routes>
        {/* <PagenotFound></PagenotFound> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
