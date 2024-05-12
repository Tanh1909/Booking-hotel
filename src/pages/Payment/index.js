import { LeftOutlined, LockOutlined } from "@ant-design/icons";
import "./style.scss";
import {
  Col,
  ConfigProvider,
  Flex,
  Form,
  Image,
  Input,
  Modal,
  QRCode,
  Radio,
  Row,
  Select,
  Space,
} from "antd";
import TextArea from "antd/es/input/TextArea";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const { Option } = Select;
function Payment() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const options = [
    {
      value: "VN",
      label: "VN (+84)",
    },
    {
      value: "ENG",
      label: "ENG (+1)",
    },
  ];
  return (
    <>
      <ConfigProvider
        theme={{
          token: {
            hoverBorderColor: "#002864",
            colorPrimary: "#002864",
          },
          components: {
            Input: {
              fontSize: 16,
            },
          },
        }}
      >
        <div className="Payment">
          <div className="container">
            <Row>
              <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                <div className="header">
                  <button
                    onClick={() => {
                      navigate(-1);
                    }}
                  >
                    <Space>
                      <LeftOutlined className="icon" />
                      <p className="header__text">Quay lại</p>
                    </Space>
                  </button>
                  <div className="header__title">THÔNG TIN ĐẶT PHÒNG</div>
                  <div></div>
                </div>
              </Col>
            </Row>
            <Row gutter={[20, 0]}>
              <Col xs={24} sm={24} md={24} lg={17} xl={17}>
                <div className="left">
                  <Form className="form" layout="vertical">
                    <Row gutter={[20, 0]}>
                      <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                        <div className="left__header">
                          Thông tin người đặt phòng
                        </div>
                      </Col>
                      <Col xs={24} sm={24} md={24} lg={12} xl={12}>
                        <Row gutter={[20, 20]}>
                          <Col xs={24} sm={24} md={24} lg={6} xl={6}>
                            <Form.Item
                              name="gender"
                              label={<div className="label">Tiêu đề</div>}
                            >
                              <Select
                                size="large"
                                defaultValue={"ong"}
                                placeholder="Select a option and change input text above"
                              >
                                <Option value="ong">Ông</Option>
                                <Option value="ba">Bà</Option>
                                <Option value="anh">Anh</Option>
                                <Option value="chi">Chị</Option>
                              </Select>
                            </Form.Item>
                          </Col>
                          <Col xs={24} sm={24} md={24} lg={18} xl={18}>
                            <Form.Item
                              label={<div className="label">Tên</div>}
                              name={"firstName"}
                              rules={[
                                {
                                  required: true,
                                },
                              ]}
                            >
                              <Input size="large" />
                            </Form.Item>
                          </Col>
                        </Row>
                      </Col>
                      <Col xs={24} sm={24} md={24} lg={12} xl={12}>
                        <Form.Item
                          label={<div className="label">Họ</div>}
                          name={"lastName"}
                          rules={[
                            {
                              required: true,
                            },
                          ]}
                        >
                          <Input />
                        </Form.Item>
                      </Col>
                      <Col xs={24} sm={24} md={24} lg={12} xl={12}>
                        <Form.Item
                          label={<div className="label">Email</div>}
                          name={"email"}
                          rules={[
                            {
                              required: true,
                            },
                          ]}
                        >
                          <Input size="large" />
                        </Form.Item>
                      </Col>
                      <Col xs={24} sm={24} md={24} lg={12} xl={12}>
                        <Form.Item
                          label={<div className="label">Nhập lại Email</div>}
                          name={"emailrepeat"}
                          rules={[
                            {
                              required: true,
                            },
                          ]}
                        >
                          <Input size="large" />
                        </Form.Item>
                      </Col>
                      <Col xs={24} sm={24} md={24} lg={12} xl={12}>
                        <Form.Item
                          label={<div className="label">Số điện thoại</div>}
                          name={"phone"}
                          rules={[
                            {
                              required: true,
                            },
                          ]}
                        >
                          <Space.Compact style={{ width: "100%" }}>
                            <Select
                              size="large"
                              style={{ width: "fit-content" }}
                              options={options}
                              defaultValue={"VN"}
                            />
                            <Input />
                          </Space.Compact>
                        </Form.Item>
                      </Col>
                      <Col xs={24} sm={24} md={24} lg={12} xl={12}>
                        <Form.Item
                          name="country"
                          label={<div className="label">Quốc gia</div>}
                          rules={[
                            {
                              required: true,
                            },
                          ]}
                        >
                          <Select
                            size="large"
                            defaultValue={"vn"}
                            placeholder="Select a option and change input text above"
                          >
                            <Option value="vn">Việt Nam</Option>
                            <Option value="eng">Eng</Option>
                          </Select>
                        </Form.Item>
                      </Col>
                      <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                        <Form.Item
                          name="extra"
                          label={<div className="label">Yêu cầu thêm</div>}
                        >
                          <TextArea
                            placeholder="ví dụ: Sở thích về Giường, địa điểm đón hoặc trả khách"
                            style={{
                              height: 120,
                            }}
                          />
                        </Form.Item>
                      </Col>
                    </Row>
                  </Form>
                  <div className="policy">
                    <div className="header">Chính sách đặt phòng</div>
                    <Space align="start" size={"middle"}>
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0_941_18288)">
                          <path
                            d="M17.7955 3.45417L14.4622 0.12084C14.4232 0.0822231 14.3771 0.0516709 14.3263 0.0309356C14.2755 0.0102004 14.2212 -0.000310075 14.1663 6.96429e-06H3.33301C3.00149 6.96429e-06 2.68354 0.131703 2.44912 0.366123C2.2147 0.600544 2.08301 0.918486 2.08301 1.25001V18.75C2.08301 19.0815 2.2147 19.3995 2.44912 19.6339C2.68354 19.8683 3.00149 20 3.33301 20H16.6663C16.9979 20 17.3158 19.8683 17.5502 19.6339C17.7846 19.3995 17.9163 19.0815 17.9163 18.75V3.75001C17.9167 3.69517 17.9061 3.64081 17.8854 3.59005C17.8647 3.53928 17.8341 3.49311 17.7955 3.45417ZM14.583 1.42084L16.4955 3.33334H14.9997C14.8892 3.33334 14.7832 3.28944 14.705 3.2113C14.6269 3.13316 14.583 3.02718 14.583 2.91667V1.42084ZM17.083 18.75C17.083 18.8605 17.0391 18.9665 16.961 19.0446C16.8828 19.1228 16.7768 19.1667 16.6663 19.1667H3.33301C3.2225 19.1667 3.11652 19.1228 3.03838 19.0446C2.96024 18.9665 2.91634 18.8605 2.91634 18.75V1.25001C2.91634 1.1395 2.96024 1.03352 3.03838 0.955379C3.11652 0.877239 3.2225 0.83334 3.33301 0.83334H13.7497V2.91667C13.7497 3.24819 13.8814 3.56614 14.1158 3.80056C14.3502 4.03498 14.6682 4.16667 14.9997 4.16667H17.083V18.75Z"
                            fill="#3C3C3B"
                          ></path>
                          <path
                            d="M15.0003 7.5H6.66699V8.33333H15.0003V7.5Z"
                            fill="#3C3C3B"
                          ></path>
                          <path
                            d="M15 10H5V10.8333H15V10Z"
                            fill="#3C3C3B"
                          ></path>
                          <path
                            d="M15 12.5H5V13.3333H15V12.5Z"
                            fill="#3C3C3B"
                          ></path>
                          <path
                            d="M11.6667 15H5V15.8333H11.6667V15Z"
                            fill="#3C3C3B"
                          ></path>
                          <path
                            d="M15.0003 15H14.167V15.8333H15.0003V15Z"
                            fill="#3C3C3B"
                          ></path>
                          <path
                            d="M13.3333 15H12.5V15.8333H13.3333V15Z"
                            fill="#3C3C3B"
                          ></path>
                        </g>
                        <defs>
                          <clipPath id="clip0_941_18288">
                            <rect width="20" height="20" fill="white"></rect>
                          </clipPath>
                        </defs>
                      </svg>
                      <div className="list">
                        <div className="title">Phòng Deluxe Twin</div>
                        <div className="text">
                          <Space>
                            <strong>Hủy:</strong>
                            Nếu hủy, thay đổi hoặc không đến, khách sẽ trả toàn
                            bộ giá trị tiền đặt phòng.
                          </Space>
                        </div>
                        <div className="text">
                          <Space>
                            <strong>Thanh toán:</strong>
                            Thanh toán toàn bộ giá trị tiền đặt phòng.
                          </Space>
                        </div>
                        <div className="text">
                          <strong>Đã bao gồm ăn sáng</strong>
                        </div>
                      </div>
                    </Space>
                  </div>
                  <div className="payment">
                    <div className="header">Phương thức thanh toán</div>
                    <Space
                      size={"large"}
                      direction="vertical"
                      style={{ width: "100%" }}
                    >
                      <Select
                        style={{ width: "100%" }}
                        size="large"
                        placeholder={`  Online payment via International Cards (visa,
                            Master, JCB, Amex, CUP)`}
                      >
                        <Option>
                          <Space>
                            <Image
                              width={40}
                              height={20}
                              src="https://vcdn-kinhdoanh.vnecdn.net/2009/02/11/31-1367011326_500x0.JPG"
                            />
                            Onepay VietNam (Thẻ ATM)
                          </Space>
                        </Option>
                      </Select>
                      <Radio value={1}>
                        Vui lòng đọc kỹ và đồng ý với điều khoản đặt phòng bằng
                        cách đánh dấu vào ô bên cạnh.
                      </Radio>
                      <button onClick={() => showModal()} className="submit">
                        <Space size={"large"}>
                          <LockOutlined />
                          THỰC HIỆN ĐẶT PHÒNG
                        </Space>
                      </button>
                    </Space>
                  </div>
                </div>
              </Col>
              <Col xs={24} sm={24} md={24} lg={7} xl={7}>
                <div className="right">
                  <div className="content">
                    <div className="header">Yêu cầu đặt phòng của bạn</div>
                    <div className="text">
                      <p>Mường Thanh Luxury Sông Hàn</p>
                      <p>Nhận phòng: Chủ Nhật, 12/05/2024 từ 14:00</p>
                      <p>Trả phòng: Thứ 2, 13/05/2024 cho đến 12:00</p>
                      <p>(2 ngày 1 đêm)</p>
                    </div>
                    <div className="text">
                      <Flex justify="space-between">
                        <p>Tổng giá: </p>
                        <p className="price">1,298,500 VNĐ</p>
                      </Flex>
                    </div>
                    <div className="footer">
                      <Space direction="vertical" size={"small"}>
                        <p>Bao gồm tất cả các loại thuế và phí dịch vụ</p>
                        <p style={{ color: "red" }}>
                          (Theo quy định của Ngân hàng Nhà nước Việt Nam, Quý
                          khách vui lòng thanh toán bằng VNĐ)
                        </p>
                      </Space>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </div>
        <Modal
          title=""
          open={isModalOpen}
          onCancel={handleCancel}
          footer={null}
        >
          <Flex style={{ padding: 20 }} justify="center" align="center">
            <QRCode size={400} value={"http://192.168.19.101:3000/troll"} />
          </Flex>
        </Modal>
      </ConfigProvider>
    </>
  );
}

export default Payment;
