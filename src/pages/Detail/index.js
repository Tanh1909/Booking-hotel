import {
  Button,
  Col,
  ConfigProvider,
  Flex,
  Image,
  Modal,
  Row,
  Space,
  Tooltip,
} from "antd";
import Search from "../../components/Search";
import "./style.scss";
import { Link } from "react-router-dom";
import { useState } from "react";
function Detail() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <Modal
        width={"50%"}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <Space direction="vertical" size={"middle"}>
          <Flex
            className="main1 marginBottom"
            align="center"
            justify="center"
            gap={20}
          >
            <div className="left">
              <Image
                className="image"
                width={300}
                height={200}
                src="https://booking.muongthanh.com/images/hotels/hotels/original/muong-thanh-grand-xa-la-3_1696826188.jpg"
              />
            </div>
            <div
              className="right"
              style={{
                padding: 20,
              }}
            >
              <h2 className="title">Mường Thanh Grand Xa La</h2>
              <Space className="address">
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
                Số 66, đường Phúc La, khu đô thị Xa La, phường Phúc La, quận Hà
                Đông, Hà Nội, Việt Nam
              </Space>
              <div className="phone">
                Điện thoại:{" "}
                <span style={{ fontWeight: "bold" }}>+84 24 3311 5555</span>
              </div>
              <div className="description">
                <strong>Khách sạn Mường Thanh Grand Xa La</strong>
              </div>
            </div>
          </Flex>
          <h5>Tiện ích trong phòng</h5>
          <Row>
            <Col xs={24} sm={24} md={12} lg={12} xl={12}>
              <Space size={"middle"}>
                <Tooltip title="Tủ quần áo">
                  <img
                    width={20}
                    height={20}
                    src="https://booking.muongthanh.com/images/rooms/service/2024/03/original/wardrobe_1709957976.png"
                  />
                </Tooltip>
                <div>Tủ quần áo</div>
              </Space>
            </Col>
            <Col xs={24} sm={24} md={12} lg={12} xl={12}>
              <Space size={"middle"}>
                <Tooltip title="Ga trải giường, gối">
                  <img
                    width={20}
                    height={20}
                    src="https://booking.muongthanh.com/images/rooms/service/2024/03/original/sheet_1709958228.png"
                  />
                </Tooltip>
                <div>Ga trải giường</div>
              </Space>
            </Col>
          </Row>
          <Row>
            <Col xs={24} sm={24} md={12} lg={12} xl={12}>
              <Space size={"middle"}>
                <Tooltip title="Tủ quần áo">
                  <img
                    width={20}
                    height={20}
                    src="https://booking.muongthanh.com/images/rooms/service/2024/03/original/wardrobe_1709957976.png"
                  />
                </Tooltip>
                <div>Tủ quần áo</div>
              </Space>
            </Col>
            <Col xs={24} sm={24} md={12} lg={12} xl={12}>
              <Space size={"middle"}>
                <Tooltip title="Ga trải giường, gối">
                  <img
                    width={20}
                    height={20}
                    src="https://booking.muongthanh.com/images/rooms/service/2024/03/original/sheet_1709958228.png"
                  />
                </Tooltip>
                <div>Ga trải giường</div>
              </Space>
            </Col>
          </Row>
          <Row>
            <Col xs={24} sm={24} md={12} lg={12} xl={12}>
              <Space size={"middle"}>
                <Tooltip title="Tủ quần áo">
                  <img
                    width={20}
                    height={20}
                    src="https://booking.muongthanh.com/images/rooms/service/2024/03/original/wardrobe_1709957976.png"
                  />
                </Tooltip>
                <div>Tủ quần áo</div>
              </Space>
            </Col>
            <Col xs={24} sm={24} md={12} lg={12} xl={12}>
              <Space size={"middle"}>
                <Tooltip title="Ga trải giường, gối">
                  <img
                    width={20}
                    height={20}
                    src="https://booking.muongthanh.com/images/rooms/service/2024/03/original/sheet_1709958228.png"
                  />
                </Tooltip>
                <div>Ga trải giường</div>
              </Space>
            </Col>
          </Row>
          <Row>
            <Col xs={24} sm={24} md={12} lg={12} xl={12}>
              <Space size={"middle"}>
                <Tooltip title="Tủ quần áo">
                  <img
                    width={20}
                    height={20}
                    src="https://booking.muongthanh.com/images/rooms/service/2024/03/original/wardrobe_1709957976.png"
                  />
                </Tooltip>
                <div>Tủ quần áo</div>
              </Space>
            </Col>
            <Col xs={24} sm={24} md={12} lg={12} xl={12}>
              <Space size={"middle"}>
                <Tooltip title="Ga trải giường, gối">
                  <img
                    width={20}
                    height={20}
                    src="https://booking.muongthanh.com/images/rooms/service/2024/03/original/sheet_1709958228.png"
                  />
                </Tooltip>
                <div>Ga trải giường</div>
              </Space>
            </Col>
          </Row>
          <Row>
            <Col xs={24} sm={24} md={12} lg={12} xl={12}>
              <Space size={"middle"}>
                <Tooltip title="Tủ quần áo">
                  <img
                    width={20}
                    height={20}
                    src="https://booking.muongthanh.com/images/rooms/service/2024/03/original/wardrobe_1709957976.png"
                  />
                </Tooltip>
                <div>Tủ quần áo</div>
              </Space>
            </Col>
            <Col xs={24} sm={24} md={12} lg={12} xl={12}>
              <Space size={"middle"}>
                <Tooltip title="Ga trải giường, gối">
                  <img
                    width={20}
                    height={20}
                    src="https://booking.muongthanh.com/images/rooms/service/2024/03/original/sheet_1709958228.png"
                  />
                </Tooltip>
                <div>Ga trải giường</div>
              </Space>
            </Col>
          </Row>
        </Space>
      </Modal>
      <div className="Detail">
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
        <div className="container">
          <div className="main1 marginBottom">
            <div className="left">
              <Image
                className="image"
                width={300}
                height={200}
                src="https://booking.muongthanh.com/images/hotels/hotels/original/muong-thanh-grand-xa-la-3_1696826188.jpg"
              />
            </div>
            <div className="right">
              <h2 className="title">Mường Thanh Grand Xa La</h2>
              <Space className="address">
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
                Số 66, đường Phúc La, khu đô thị Xa La, phường Phúc La, quận Hà
                Đông, Hà Nội, Việt Nam
              </Space>
              <div className="phone">
                Điện thoại:{" "}
                <span style={{ fontWeight: "bold" }}>+84 24 3311 5555</span>
              </div>
              <div className="description">
                <strong>Khách sạn Mường Thanh Grand Xa La</strong>
                nằm trong khuôn viên Khu đô thị mới Xala hiện đại, yên tĩnh và
                trong lành, ngay tại trung tâm Quận Hà Đông, Hà Nội. Thoải mái
                và tiện nghi là những cảm nhận đầu tiên khi du khách đặt chân
                đến nơi đây.
              </div>
              <div
                onClick={showModal}
                style={{
                  cursor: "pointer",
                  color: "var(--primary-Color",
                }}
              >
                Xem chi tiết
              </div>
            </div>
          </div>
          <div className="main2 marginBottom">
            <Space>
              <strong>Vui lòng chọn phòng</strong>
              (Có 3 loại phòng theo tìm kiếm)
            </Space>
          </div>
          <div className="main3 ">
            <div className="item row m-0 mb-4">
              <div className="image col-sm-5 col-md-5 col-lg-5">
                <img src="https://booking.muongthanh.com/images/rooms/2023/03/08/resize/deluxe-king-city-view-7_1678260646.jpg" />
              </div>
              <div className="content col-sm-7 col-md-7 col-lg-7">
                <Space
                  style={{ width: "100%" }}
                  direction="vertical"
                  size={"large"}
                >
                  <div className="title">
                    <strong>Phòng Deluxe King hướng thành phố</strong>
                  </div>
                  <Space align="center" size={"large"}>
                    <Space>
                      <svg
                        width="19"
                        height="12"
                        viewBox="0 0 19 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          opacity="0.4"
                          d="M2.375 7.2V0.6C2.375 0.271875 2.10596 0 1.78125 0H0.59375C0.269043 0 0 0.271875 0 0.6V12H2.375V9.6H16.625V12H19V7.8C19 7.47188 18.731 7.2 18.4062 7.2H2.375ZM7.71875 4.2C7.71875 5.52188 6.65185 6.6 5.34375 6.6C4.03564 6.6 2.96875 5.52188 2.96875 4.2C2.96875 2.87813 4.03564 1.8 5.34375 1.8C6.65185 1.8 7.71875 2.87813 7.71875 4.2ZM19 6.6H8.3125V3C8.3125 2.67187 8.58154 2.4 8.90625 2.4H15.4375C17.4043 2.4 19 4.0125 19 6V6.6Z"
                          fill="black"
                        ></path>
                      </svg>
                      <span>1 giường queen size</span>
                    </Space>
                    <Space>
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M16 8L13 5V7H12V4H9V3H11L8 0L5 3H7V4H4V7H3V5L0 8L3 11V9H4V12H7V13H5L8 16L11 13H9V12H12V9H13V11L16 8ZM11 11H5V5H11V11Z"
                          fill="black"
                        ></path>
                      </svg>
                      <span>30 m2</span>
                    </Space>
                  </Space>
                  <div className="service">
                    <Space size={"large"}>
                      <Tooltip title="Tủ quần áo">
                        <img
                          width={20}
                          height={20}
                          src="https://booking.muongthanh.com/images/rooms/service/2024/03/original/wardrobe_1709957976.png"
                        />
                      </Tooltip>
                      <Tooltip title="Ga trải giường, gối">
                        <img
                          width={20}
                          height={20}
                          src="https://booking.muongthanh.com/images/rooms/service/2024/03/original/sheet_1709958228.png"
                        />
                      </Tooltip>
                      <Tooltip title="Phòng không hút thuốc">
                        <img
                          width={20}
                          height={20}
                          src="https://booking.muongthanh.com/images/rooms/service/2024/03/original/no-smoking_1709957396.png"
                        />
                      </Tooltip>
                    </Space>
                  </div>
                  <div className="footer">
                    <div className="price">
                      <Space direction="vertical">
                        Giá chỉ từ
                          <div className="price">2,142,000 VNĐ</div>/đêm
                      </Space>
                    </div>
                    <div className="button">
                      <Link to={"/payment"}>
                        <button>Chọn phòng</button>
                      </Link>
                    </div>
                  </div>
                </Space>
              </div>
            </div>
            <div className="item row m-0 mb-4">
              <div className="image col-sm-5 col-md-5 col-lg-5">
                <img src="https://booking.muongthanh.com/images/rooms/2023/03/08/resize/deluxe-king-city-view-7_1678260646.jpg" />
              </div>
              <div className="content col-sm-7 col-md-7 col-lg-7">
                <Space
                  style={{ width: "100%" }}
                  direction="vertical"
                  size={"large"}
                >
                  <div className="title">
                    <strong>Phòng Deluxe King hướng thành phố</strong>
                  </div>
                  <Space align="center" size={"large"}>
                    <Space>
                      <svg
                        width="19"
                        height="12"
                        viewBox="0 0 19 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          opacity="0.4"
                          d="M2.375 7.2V0.6C2.375 0.271875 2.10596 0 1.78125 0H0.59375C0.269043 0 0 0.271875 0 0.6V12H2.375V9.6H16.625V12H19V7.8C19 7.47188 18.731 7.2 18.4062 7.2H2.375ZM7.71875 4.2C7.71875 5.52188 6.65185 6.6 5.34375 6.6C4.03564 6.6 2.96875 5.52188 2.96875 4.2C2.96875 2.87813 4.03564 1.8 5.34375 1.8C6.65185 1.8 7.71875 2.87813 7.71875 4.2ZM19 6.6H8.3125V3C8.3125 2.67187 8.58154 2.4 8.90625 2.4H15.4375C17.4043 2.4 19 4.0125 19 6V6.6Z"
                          fill="black"
                        ></path>
                      </svg>
                      <span>1 giường queen size</span>
                    </Space>
                    <Space>
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M16 8L13 5V7H12V4H9V3H11L8 0L5 3H7V4H4V7H3V5L0 8L3 11V9H4V12H7V13H5L8 16L11 13H9V12H12V9H13V11L16 8ZM11 11H5V5H11V11Z"
                          fill="black"
                        ></path>
                      </svg>
                      <span>30 m2</span>
                    </Space>
                  </Space>
                  <div className="service">
                    <Space size={"large"}>
                      <Tooltip title="Tủ quần áo">
                        <img
                          width={20}
                          height={20}
                          src="https://booking.muongthanh.com/images/rooms/service/2024/03/original/wardrobe_1709957976.png"
                        />
                      </Tooltip>
                      <Tooltip title="Ga trải giường, gối">
                        <img
                          width={20}
                          height={20}
                          src="https://booking.muongthanh.com/images/rooms/service/2024/03/original/sheet_1709958228.png"
                        />
                      </Tooltip>
                      <Tooltip title="Phòng không hút thuốc">
                        <img
                          width={20}
                          height={20}
                          src="https://booking.muongthanh.com/images/rooms/service/2024/03/original/no-smoking_1709957396.png"
                        />
                      </Tooltip>
                    </Space>
                  </div>
                  <div className="footer">
                    <div className="price">
                      <Space direction="vertical">
                        Giá chỉ từ
                          <div className="price">2,142,000 VNĐ</div>/đêm
                      </Space>
                    </div>
                    <div className="button">
                      <button style={{ backgroundColor: "var(--secondary-Color)" }}>Hết phòng</button>
                    </div>
                  </div>
                </Space>
              </div>
            </div>
            <div className="item row m-0 mb-4">
              <div className="image col-sm-5 col-md-5 col-lg-5">
                <img src="https://booking.muongthanh.com/images/rooms/2023/03/08/resize/deluxe-king-city-view-7_1678260646.jpg" />
              </div>
              <div className="content col-sm-7 col-md-7 col-lg-7">
                <Space
                  style={{ width: "100%" }}
                  direction="vertical"
                  size={"large"}
                >
                  <div className="title">
                    <strong>Phòng Deluxe King hướng thành phố</strong>
                  </div>
                  <Space align="center" size={"large"}>
                    <Space>
                      <svg
                        width="19"
                        height="12"
                        viewBox="0 0 19 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          opacity="0.4"
                          d="M2.375 7.2V0.6C2.375 0.271875 2.10596 0 1.78125 0H0.59375C0.269043 0 0 0.271875 0 0.6V12H2.375V9.6H16.625V12H19V7.8C19 7.47188 18.731 7.2 18.4062 7.2H2.375ZM7.71875 4.2C7.71875 5.52188 6.65185 6.6 5.34375 6.6C4.03564 6.6 2.96875 5.52188 2.96875 4.2C2.96875 2.87813 4.03564 1.8 5.34375 1.8C6.65185 1.8 7.71875 2.87813 7.71875 4.2ZM19 6.6H8.3125V3C8.3125 2.67187 8.58154 2.4 8.90625 2.4H15.4375C17.4043 2.4 19 4.0125 19 6V6.6Z"
                          fill="black"
                        ></path>
                      </svg>
                      <span>1 giường queen size</span>
                    </Space>
                    <Space>
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M16 8L13 5V7H12V4H9V3H11L8 0L5 3H7V4H4V7H3V5L0 8L3 11V9H4V12H7V13H5L8 16L11 13H9V12H12V9H13V11L16 8ZM11 11H5V5H11V11Z"
                          fill="black"
                        ></path>
                      </svg>
                      <span>30 m2</span>
                    </Space>
                  </Space>
                  <div className="service">
                    <Space size={"large"}>
                      <Tooltip title="Tủ quần áo">
                        <img
                          width={20}
                          height={20}
                          src="https://booking.muongthanh.com/images/rooms/service/2024/03/original/wardrobe_1709957976.png"
                        />
                      </Tooltip>
                      <Tooltip title="Ga trải giường, gối">
                        <img
                          width={20}
                          height={20}
                          src="https://booking.muongthanh.com/images/rooms/service/2024/03/original/sheet_1709958228.png"
                        />
                      </Tooltip>
                      <Tooltip title="Phòng không hút thuốc">
                        <img
                          width={20}
                          height={20}
                          src="https://booking.muongthanh.com/images/rooms/service/2024/03/original/no-smoking_1709957396.png"
                        />
                      </Tooltip>
                    </Space>
                  </div>
                  <div className="footer">
                    <div className="price">
                      <Space direction="vertical">
                        Giá chỉ từ
                          <div className="price">2,142,000 VNĐ</div>/đêm
                      </Space>
                    </div>
                    <div className="button">
                      <Link to={"/payment"}>
                        <button>Chọn phòng</button>
                      </Link>
                    </div>
                  </div>
                </Space>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Detail;
