import { Button, Dropdown, Flex, Select, Space } from "antd";
import logo from "../../assets/img/logo_1650360911.svg";
import vi_language from "../../assets/img/language_vn.svg";
import en_language from "../../assets/img/language_en.svg";
import "./style.scss";
import $ from "jquery";
import {
  DownOutlined,
  FacebookFilled,
  InstagramOutlined,
  MenuOutlined,
  PhoneOutlined,
  YoutubeFilled,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import { useEffect } from "react";
function Header() {
  useEffect(() => {
    const handleScroll = (e) => {
      let logoElement = $(document.getElementById("logo"));
      if (window.scrollY > 10) {
        logoElement.css("height", 55);
      } else if (window.scrollY < 10) {
        logoElement.css("height", 80);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });
  const selectItems = [
    {
      value: "Vi",
      label: "Vi",
    },
    {
      value: "Eng",
      label: "Eng",
    },
  ];
  const items = [
    {
      label: (
        <li className="customDropdownItem">
          <a className="customDropdownLink" href="#">
            Điểm Đến
          </a>
        </li>
      ),
      key: "0",
    },
    {
      label: (
        <li className="customDropdownItem">
          <a className="customDropdownLink" href="#">
            Ưu Đãi
          </a>
        </li>
      ),
      key: "1",
    },
    {
      label: (
        <li className="customDropdownItem">
          <a className="customDropdownLink" href="#">
            Combo
          </a>
        </li>
      ),
      key: "2",
    },
    {
      label: (
        <li className="customDropdownItem">
          <a className="customDropdownLink" href="#">
            Tin tức
          </a>
        </li>
      ),
      key: "3",
    },
  ];
  return (
    <>
      <div className="Header">
        <Flex justify="space-around" align="center">
          <div className="left">
            <div className="icons">
              <Space size={"middle"}>
                <div className="phone">
                  <PhoneOutlined rotate={90} className="icon" />
                  <span className="phoneNumber">1900 1833</span>
                </div>
                <FacebookFilled className="icon" />
                <InstagramOutlined className="icon" />
                <YoutubeFilled className="icon" />
              </Space>
            </div>
          </div>
          <div className="middle">
            <Link to={"/"}>
              <img src={logo} alt="logo" className="logo" id="logo" />
            </Link>
          </div>
          <div className="right">
            <Space size={"middle"}>
              <Link to="/login" className="login">
                Đăng nhập
              </Link>
              <Select
                popupClassName="popupCustom"
                variant="borderless"
                options={selectItems}
                defaultValue={"Vi"}
                className="select"
                labelRender={(label) => {
                  switch (label.value) {
                    case "Vi":
                      return <img src={vi_language} />;
                    case "Eng":
                      return <img src={en_language} />;
                    default:
                      break;
                  }
                }}
              />
              <Dropdown
                overlayStyle={{
                  minWidth: "162px",
                }}
                className="menu"
                menu={{ items }}
                trigger={["click"]}
              >
                <div className="menuIcon">
                  <MenuOutlined style={{ fontSize: 12 }} rotate={135} />
                </div>
              </Dropdown>
            </Space>
          </div>
        </Flex>
      </div>
    </>
  );
}

export default Header;
