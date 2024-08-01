import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Info from "../Info/Info";
import NavBar from "./../NavBar/NavBar";

export default function Layout() {
  return (
    <>
      <NavBar />

      <Outlet />

      <Info />

      <Footer />
    </>
  );
}
