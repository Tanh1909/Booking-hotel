import { Col, ConfigProvider, Image, Row, Space } from "antd";
import Search from "../../components/Search";
import "./style.scss";
function Detail() {
  return (
    <>
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
            </div>
          </div>
          <div className="main2 marginBottom">
            <Space>
              <strong>Vui lòng chọn phòng</strong>
              (Có 3 loại phòng theo tìm kiếm)
            </Space>
          </div>
        </div>
      </div>
    </>
  );
}

export default Detail;
