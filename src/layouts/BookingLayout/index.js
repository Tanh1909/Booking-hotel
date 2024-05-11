import Header from "../../components/Header/index.js";
import Footer from "../../components/Footer/index.js";
import { Outlet } from "react-router-dom";
import { Affix, Button } from "antd";
import { useRef, useState } from "react";
function BookingLayout() {
  const [container, setContainer] = useState(null);
  console.log(container);
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default BookingLayout;
