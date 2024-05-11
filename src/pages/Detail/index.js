import { ConfigProvider } from "antd";
import Search from "../../components/Search";
import "./style.scss";
function Detail() {
  return (
    <>
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
      <div className="Detail">
        <div className="container">
            
        </div>
      </div>
    </>
  );
}

export default Detail;
