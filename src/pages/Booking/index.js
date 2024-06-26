import {
  Affix,
  Button,
  Checkbox,
  Col,
  ConfigProvider,
  Image,
  Rate,
  Row,
  Select,
  Space,
} from "antd";
import Search from "../../components/Search/index.js";
import "./style.scss";
import { ArrowDownOutlined, ArrowUpOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { useState } from "react";
import $ from "jquery";

function Booking() {
  const [color, setColor] = useState(true);
  const [sort, setSort] = useState("asc");
  const [filter, setFilter] = useState([]);
  const data = [
    {
      imgLink:
        "https://booking.muongthanh.com/images/hotels/hotels/original/muong-thanh-grand-xa-la-3_1696826188.jpg",
      title: "Mường Thanh Grand Xa La",
      description: ` Số 66, đường Phúc La, khu đô thị Xa La, phường Phúc
                          La, quận Hà Đông, Hà Nội, Việt Nam`,
      rate: 3.5,
      review: 13,
      price: 1317600,
      type: "grand",
      avaiable: true,
    },
    {
      imgLink:
        "https://booking.muongthanh.com/images/hotels/hotels/original/muong-thanh-luxury-ha-long-centre-banner-2_1688700664.jpg",
      title: "Mường Thanh Luxury Hạ Long Centre",
      description: ` Số 66, đường Phúc La, khu đô thị Xa La, phường Phúc
                          La, quận Hà Đông, Hà Nội, Việt Nam`,
      rate: 5,
      review: 30,
      price: 2142000,
      type: "luxury",
      avaiable: true,
    },
    {
      imgLink:
        "https://booking.muongthanh.com/images/hotels/hotels/original/sm-3-min_1664158521_1691476781.jpg",
      title: "Mường Thanh Holiday Suối Mơ",
      description: ` Số 66, đường Phúc La, khu đô thị Xa La, phường Phúc
                          La, quận Hà Đông, Hà Nội, Việt Nam`,
      rate: 4.5,
      review: 6,
      price: 1458000,
      type: "holiday",
      avaiable: false,
    },
    {
      imgLink:
        "https://booking.muongthanh.com/images/hotels/hotels/original/muong-thanh-grand-ha-long_1686717884_1686802530.jpg",
      title: "Mường Thanh Grand Bãi Cháy",
      description: ` Số 66, đường Phúc La, khu đô thị Xa La, phường Phúc
                          La, quận Hà Đông, Hà Nội, Việt Nam`,
      rate: 5,
      review: 7,
      price: 1800000,
      type: "grand",
      avaiable: true,
    },
  ]
    .sort((a, b) => {
      if (sort == "asc") {
        return a.price - b.price;
      } else {
        return b.price - a.price;
      }
    })
    .filter((value) => {
      if (filter.length == 0) {
        return true;
      } else {
        if (filter.indexOf(value.type) > -1) {
          return true;
        }
        return false;
      }
    });
  const formatterVND = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  });

  $(document).ready(function () {
    function adjustSearch() {
        if ($(window).width() < 992) {
            $('.Search').addClass('container pt-3');
            setColor(false);
        } else {
            $('.Search').removeClass('container pt-3');
            setColor(true);
        }
    }
    adjustSearch();
    $(window).resize(function () {
      adjustSearch();
    });
});
  return (
    <>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "#002864",
          },
          components: {
            Checkbox: {
              colorPrimary: "#F2A900",
              colorBgBase: "#F2A900",
              colorBgContainer: "#F2A900",
              colorPrimaryHover: "#F2A900",
            },
          },
        }}
      >
        <div className="Booking">
          <div className="search">
            <ConfigProvider
              theme={{
                token: {
                  colorPrimary: "#002864",
                },
              }}
            >
              <Search booking={color} />
            </ConfigProvider>
          </div>
          <div className="main">
            <Row className="container" gutter={[20, 20]}>
              <Col xs={0} sm={0} md={0} lg={6} xl={6}>
                <div className="list">
                  <div className="title">Kết quả</div>
                  <div className="items">
                    <div className="header item">Thương Hiệu</div>
                    <Checkbox.Group
                      onChange={(value) => {
                        setFilter(value);
                      }}
                    >
                      <Space direction="vertical">
                        <div className="item">
                          <Checkbox value="luxury">Luxury</Checkbox>
                        </div>
                        <div className="item">
                          <Checkbox value="grand">Grand</Checkbox>
                        </div>
                        <div className="item">
                          <Checkbox value="holiday">Holiday</Checkbox>
                        </div>
                        <div className="item">
                          <Checkbox value="Mường Thanh">Mường Thanh</Checkbox>
                        </div>
                      </Space>
                    </Checkbox.Group>
                  </div>
                </div>
              </Col>
              <Col xs={24} sm={24} md={24} lg={18} xl={18} className="right">
                <div className="header">
                  <div className="left">CÓ 3 KHÁCH SẠN GẦN/ TẠI "HÀ NỘI"</div>
                  <Space className="right" align="center">
                    <ArrowUpOutlined />
                    <ArrowDownOutlined />

                    <span>Sắp xếp</span>
                    <Select
                      onChange={(value) => {
                        setSort(value);
                      }}
                      defaultValue={"asc"}
                      options={[
                        {
                          value: "asc",
                          label: "Giá tăng dần",
                        },
                        {
                          value: "desc",
                          label: "Giá giảm dần",
                        },
                      ]}
                    ></Select>
                  </Space>
                </div>
                <div className="items">
                  {data.map((value, index) => {
                    return (
                      <div className="item" key={"item_" + index}>
                        <Image
                          style={{
                            borderRadius: 5,
                          }}
                          width={300}
                          height={200}
                          src={value.imgLink}
                        />
                        <div className=" middle">
                          <Link to={"/booking/detail"}>
                            <div className="title">{value.title}</div>
                          </Link>
                          <div className="description">
                            <Space>
                              <svg
                                width="16"
                                height="16"
                                viewBox="0 0 16 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M14 6.66666C14 11.3333 8 15.3333 8 15.3333C8 15.3333 2 11.3333 2 6.66666C2 5.07536 2.63214 3.54923 3.75736 2.42402C4.88258 1.2988 6.4087 0.666656 8 0.666656C9.5913 0.666656 11.1174 1.2988 12.2426 2.42402C13.3679 3.54923 14 5.07536 14 6.66666Z"
                                  stroke="#626262"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                ></path>
                                <path
                                  d="M8 8.66666C9.10457 8.66666 10 7.77123 10 6.66666C10 5.56209 9.10457 4.66666 8 4.66666C6.89543 4.66666 6 5.56209 6 6.66666C6 7.77123 6.89543 8.66666 8 8.66666Z"
                                  stroke="#626262"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                ></path>
                              </svg>
                              {value.description}
                            </Space>
                          </div>
                          <div className="rate">
                            <Space>
                              <svg
                                className="me-1"
                                width="28"
                                height="18"
                                viewBox="0 0 28 18"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M4.83301 3.87563C7.45856 3.53674 14.908 3.30341 12.8669 14.0679L15.1819 13.8795C14.168 7.24452 16.2891 3.86119 22.9213 3.53674C11.9213 -2.55492 5.65801 3.76897 4.83301 3.87563Z"
                                  fill="#FAC415"
                                ></path>
                                <path
                                  d="M6.92379 11.2572C7.5672 11.2572 8.08879 10.7357 8.08879 10.0922C8.08879 9.44884 7.5672 8.92725 6.92379 8.92725C6.28038 8.92725 5.75879 9.44884 5.75879 10.0922C5.75879 10.7357 6.28038 11.2572 6.92379 11.2572Z"
                                  fill="#EE6946"
                                ></path>
                                <path
                                  d="M20.9696 11.2567C21.6127 11.2567 22.1341 10.7353 22.1341 10.0922C22.1341 9.44914 21.6127 8.9278 20.9696 8.9278C20.3265 8.9278 19.8052 9.44914 19.8052 10.0922C19.8052 10.7353 20.3265 11.2567 20.9696 11.2567Z"
                                  fill="#00AF87"
                                ></path>
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M26.61 6.0034C26.9033 4.99618 27.3694 4.04784 27.9883 3.20118L23.3111 3.19729C20.5144 1.44618 17.2678 0.545064 13.9689 0.603953C10.5889 0.53173 7.25944 1.44451 4.38889 3.23062L0 3.23284C0.613333 4.0734 1.07722 5.0134 1.37167 6.01118C0.486667 7.2134 0.00888889 8.6684 0.00888889 10.1617C0.00888889 14.0028 3.16944 17.1634 7.01056 17.1634C9.13667 17.1634 11.1511 16.1945 12.4789 14.5334L13.9706 16.7667L15.4767 14.5145C16.8039 16.209 18.8406 17.2001 20.9928 17.2001C24.8367 17.2001 28 14.0367 28 10.1928C28 8.6834 27.5122 7.2134 26.61 6.0034ZM20.7611 3.17784C17.2006 3.28117 14.2611 6.09229 13.9983 9.64451C13.7333 6.05784 10.7506 3.22729 7.155 3.15062C9.31333 2.25395 11.6317 1.8034 13.9689 1.82562C16.3028 1.79062 18.6183 2.25117 20.7611 3.17784V3.17784ZM7.01444 15.7473H7.01389C3.945 15.7473 1.42 13.2223 1.42 10.1534C1.42 7.08395 3.945 4.55895 7.01389 4.55895C10.0828 4.55895 12.6083 7.08395 12.6083 10.1534V10.1545C12.6044 13.2217 10.0817 15.744 7.01444 15.7473V15.7473ZM22.9222 15.4301C20.0433 16.4912 16.8006 14.9973 15.7361 12.119V12.1173C15.5078 11.4973 15.3906 10.8423 15.3906 10.1817C15.3906 7.11229 17.9161 4.58729 20.985 4.58729C24.0544 4.58729 26.5794 7.11229 26.5794 10.1817C26.5794 12.519 25.115 14.6206 22.9222 15.4301ZM6.92833 6.63062H6.92333C5.02389 6.63062 3.46167 8.1934 3.46167 10.0923C3.46167 11.9917 5.02389 13.554 6.92333 13.554C8.82222 13.554 10.385 11.9917 10.385 10.0923V10.0917C10.3817 8.19618 8.82389 6.63618 6.92833 6.63062V6.63062ZM6.92833 12.3617H6.92389C5.67889 12.3617 4.65389 11.3373 4.65389 10.0923C4.65389 8.84729 5.67889 7.82284 6.92389 7.82284C8.16833 7.82284 9.19278 8.84729 9.19333 10.0917C9.19056 11.3345 8.17055 12.3562 6.92833 12.3617V12.3617ZM20.9694 6.63062H20.9678C19.0683 6.63062 17.5061 8.1934 17.5061 10.0923C17.5061 11.9917 19.0683 13.554 20.9678 13.554C22.8667 13.554 24.4294 11.9917 24.4294 10.0923V10.0917C24.4267 8.19451 22.8667 6.63395 20.9694 6.63062V6.63062ZM20.9694 12.3617H20.9683C19.7233 12.3617 18.6989 11.3373 18.6989 10.0923C18.6989 8.84729 19.7233 7.82284 20.9683 7.82284C22.2133 7.82284 23.2378 8.84729 23.2383 10.0917C23.2367 11.3362 22.2133 12.3595 20.9694 12.3617Z"
                                  fill="black"
                                ></path>
                              </svg>
                              <Rate
                                style={{ color: "var(--primary-Color)" }}
                                allowHalf
                                defaultValue={value.rate}
                                disabled
                              />
                              <strong className="textRate">
                                {value.rate}/5
                              </strong>
                              <span className="review">
                                ({value.review} reviews)
                              </span>
                            </Space>
                          </div>
                        </div>
                        <div className="right">
                          <div className="left">
                            <div className="text">Chỉ từ</div>
                            <div className="price">
                              {formatterVND.format(value.price)}
                            </div>
                            <div className="text">phòng/đêm</div>
                          </div>
                          <div className="right">
                            {value.avaiable ? (
                              <Link to={"/booking/detail"}>
                                <button>Đặt ngay</button>
                              </Link>
                            ) : (
                              <button className="unavaiable">Hết Phòng</button>
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </ConfigProvider>
    </>
  );
}

export default Booking;
