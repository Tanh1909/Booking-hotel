import Search from "../../../components/Search";
import img from "../../../assets/img/wta-program_banner-tap-doan-1650x650px_1716523081_1716951735.jpg";
import "./style.scss";
import { ConfigProvider } from "antd";

function Session0() {
  return (
    <>
      <div className="Session0">
        <div className="image">
          <img src={img} />
        </div>
        <div className="search">
          <ConfigProvider
            theme={{
              token: {
                colorBgBase: "#F5F5F5",
                colorPrimary: "#002864",
              },
            }}
          >
            <Search />
          </ConfigProvider>
        </div>
      </div>
    </>
  );
}

export default Session0;
