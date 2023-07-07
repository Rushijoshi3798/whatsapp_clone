import { useEffect } from "react";
import { useState } from "react";
import "./App.css";
import Loader from "./components/Loader";
import SideBar from "./components/SideBar";

function App() {
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 2000);
  }, []);
  return (
    <div className="App">
      {/* <Loader /> */}
      {loader ? <Loader /> : <SideBar />}
    </div>
  );
}

export default App;
