import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Courses from "./Courses";
import Users from "./Users";
import Navbar from "../common/Navbar";

const InfiniteScrollExample = () => {
  return (
    <>
      <Navbar hasUsersItem={true} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </>
  );
};

export default InfiniteScrollExample;
