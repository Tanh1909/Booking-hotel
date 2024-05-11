import { Col, Row, Space } from "antd";
import "./style.scss";

import {
  ArrowRightOutlined,
  FacebookFilled,
  InstagramOutlined,
  PhoneOutlined,
  YoutubeFilled,
} from "@ant-design/icons";
function Footer() {
  return (
    <>
      <div className="Footer">
        <div className="container">
          <Row className="FooterSession1">
            <Col xs={24} sm={24} md={24} lg={8} xl={8} className="left">
              <div className="title">NHẬN THÔNG TIN ƯU ĐÃI</div>
              <div className="input">
                <input
                  type="text"
                  placeholder="Email nhận thông tin khuyến mãi..."
                />
                <button>
                  Đăng ký <ArrowRightOutlined />
                </button>
              </div>
            </Col>
            <Col xs={24} sm={24} md={24} lg={8} xl={8} className="right">
              <div className="title">BẠN CẦN GIÚP ĐỠ ?</div>
              <div className="text">Quản lý các đặt phòng</div>
              <div className="text">Hỗ trợ</div>
              <br />
              <div className="text">Bạn muốn đặt chỗ</div>
              <div className="text">
                <PhoneOutlined rotate={90} className="icon" />
                <span className="phoneNumber" style={{ fontWeight: "bolder" }}>
                  1900 1833
                </span>
              </div>
            </Col>
            <Col xs={24} sm={24} md={24} lg={8} xl={8} className="right">
              <div className="title">ĐIỀU KHOẢN & QUY ĐỊNH</div>
              <div className="text">Điều khoản chung</div>
              <div className="text">Quy định chung</div>
              <div className="text">Quy định về thanh toán</div>
              <div className="text">
                Quy định về xác nhận thông tin đặt phòng
              </div>
              <div className="text">Chính sách giải quyết tranh chấp</div>
              <div className="text">Chính sách quyền riêng tư</div>
            </Col>
          </Row>

          <Row className="FooterSession2">
            <Col xs={24} sm={24} md={24} lg={8} xl={8} className="content">
              <div className="title">Số ĐKKD</div>
              <div className="text">0106011932</div>
              <div className="text">Đăng ký lần đầu ngày 15/10/2012</div>
              <div className="text">
                Đăng ký thay đổi lần thứ 15 ngày 16/8/2022.
              </div>
              <div className="logo">
                <img
                  src="https://booking.muongthanh.com/images/logo-da-thong-bao-website-voi-bo-cong-thuong.png"
                  alt=""
                />
              </div>
            </Col>
            <Col xs={24} sm={24} md={24} lg={8} xl={8} className="content">
              <div className="title">Nơi cấp:</div>
              <div className="text">Sở Kế hoạch và Đầu tư Tỉnh Điện Biên</div>
              <div className="title">Lĩnh vực kinh doanh:</div>
              <div className="text">
                Khách sạn, căn hộ kinh doanh dịch vụ lưu trú ngắn ngày; khu du
                lịch sinh thái, khu vui chơi giải trí, sân golf
              </div>
            </Col>
            <Col xs={24} sm={24} md={24} lg={8} xl={8} className="content">
              <div className="title">Trụ sở:</div>
              <div className="text">
                Số nhà 25, Tổ dân phố 21, Phường Him Lam, Thành phố Điện Biên
                Phủ, Tỉnh Điện Biên, Việt Nam
              </div>
              <div className="title">Email:</div>
              <div className="text">info@muongthanh.vn</div>
            </Col>
          </Row>

          <Row className="FooterSession3">
            <Col xs={24} sm={24} md={24} lg={8} xl={8} className="left">
              © 2022 Mường Thanh Hospitality. All Rights Reserved.
            </Col>
            <Col xs={24} sm={24} md={24} lg={8} xl={8} className="middle">
              <img
                src="https://booking.muongthanh.com/images/logo-footer.svg"
                alt=""
              />
            </Col>
            <Col xs={24} sm={24} md={24} lg={8} xl={8} className="right">
              <Space size={"large"}>
                <FacebookFilled className="icon" />
                <InstagramOutlined className="icon" />
                <YoutubeFilled className="icon" />
              </Space>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
}

export default Footer;
