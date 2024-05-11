import { Col, Row } from "antd";
import img from "../../../assets/img/ban-do-04-luxury_1696492153.png";
import hotel from "../../../assets/img/hotel.svg";
import "./style.scss";
function Session4() {
  return (
    <>
      <div className="Session4">
        <div className="container">
          <Row>
            <Col xs={24} sm={24} md={24} lg={8} xl={8}>
              <div className="list">
                <div className="listItem">Tất cả</div>
                <div className="listItem">Luxury</div>
                <div className="listItem">Grand</div>
                <div className="listItem">Holiday</div>
                <div className="listItem">Mường Thanh</div>
              </div>
            </Col>
            <Col xs={24} sm={24} md={24} lg={16} xl={16} className="map">
              <div className="img">
                <img src={img} alt="ban do" />
              </div>
              <div className="content">
                <div className="left">
                  <div className="icon">
                    <img src={hotel} alt="hotel" />
                  </div>
                  <div className="items">
                    <div className="item">
                      <div className="title">60</div>
                      <p>KHÁCH SẠN</p>
                    </div>
                    <div className="item">
                      <div className="title">33</div>
                      <p>TỈNH THÀNH</p>
                    </div>
                  </div>
                </div>
                <div className="text textDesktop">
                  Tập đoàn khách sạn Mường Thanh được công nhận là "Chuỗi Khách
                  sạn tư nhân lớn nhất Đông Dương" với 60 khách sạn cao cấp đạt
                  chuẩn quốc tế trải dài trên 33 tỉnh thành tại Việt Nam và nước
                  bạn Lào. Hệ thống khách sạn Mường Thanh với 4 phân khúc: Mường
                  Thanh Luxury, Mường Thanh Grand, Mường Thanh Holiday và Mường
                  Thanh hướng đến việc phục vụ đa dạng nhu cầu của mọi du khách
                  trong nước và quốc tế.
                </div>
              </div>
            </Col>
          </Row>
          <div className="text textMobile ">
            Tập đoàn khách sạn Mường Thanh được công nhận là "Chuỗi Khách sạn tư
            nhân lớn nhất Đông Dương" với 60 khách sạn cao cấp đạt chuẩn quốc tế
            trải dài trên 33 tỉnh thành tại Việt Nam và nước bạn Lào. Hệ thống
            khách sạn Mường Thanh với 4 phân khúc: Mường Thanh Luxury, Mường
            Thanh Grand, Mường Thanh Holiday và Mường Thanh hướng đến việc phục
            vụ đa dạng nhu cầu của mọi du khách trong nước và quốc tế.
          </div>
        </div>
      </div>
    </>
  );
}

export default Session4;
