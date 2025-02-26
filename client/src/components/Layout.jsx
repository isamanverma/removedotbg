import Footer from "./Footer";
import Navbar from "./Navbar";
import { ToastContainer, toast } from "react-toastify";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <ToastContainer position="bottom-right"/>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}
