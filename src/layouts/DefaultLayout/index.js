import { Outlet } from "react-router-dom";
import Header from "../../components/Header";
import Search from "../../components/Search";
import Footer from "../../components/Footer";
import { Affix, Button, ConfigProvider } from "antd";

function DefaultLayout() {
  return (
    <>
      <Affix offsetTop={0}>
        <Header />
      </Affix>
      <Outlet />
      <Footer />
    </>
  );
}

export default DefaultLayout;
