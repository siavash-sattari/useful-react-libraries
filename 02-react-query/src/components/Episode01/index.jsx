import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Courses from "./Courses";
import Navbar from "../common/Navbar";

const Episode01 = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
      </Routes>
    </>
  );
};

export default Episode01;
