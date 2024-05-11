import Search from "../../../components/Search";
import img from "../../../assets/img/huyen-thoai-dien-bien-phu-hao-khi-muong-thanh_1711186849.jpg";
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
