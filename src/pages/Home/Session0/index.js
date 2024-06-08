import Search from "../../../components/Search";
import img from "../../../assets/img/wta-program_banner-tap-doan-1650x650px_1716523081_1716951735.jpg";
import imgMobile from "../../../assets/img/img-mobile.jpg";
import "./style.scss";
import { ConfigProvider } from "antd";
import $ from "jquery";

function Session0() {
  $(document).ready(function () {
    function adjustImg() {
      if ($(window).width() < 992) {
        $('.Session0 img').attr('src', imgMobile);
      } else {
        $('.Session0 img').attr('src', img);
      }
    }
    adjustImg();
    $(window).resize(function () {
      adjustImg();
    });
  });
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
