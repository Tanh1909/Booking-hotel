import "./style.scss";
import $ from "jquery";
import 'bootstrap';
import {
  ArrowRightOutlined,
  FacebookFilled,
  InstagramOutlined,
  PhoneOutlined,
  YoutubeFilled,
} from "@ant-design/icons";
function Footer() {
  $(document).ready(function () {
    $(".footerBtn").on("touchstart mousedown", function () {
      $(this).css('background-color', '#f2a9009c');
    });
    $(".footerBtn").on("touchend mouseup", function () {
      $(this).css('background-color', 'var(--primary-Color)');
    });

    function validateEmail(email) {
      var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailPattern.test(email);
    }

    function checkEmailInput() {
      var email = $(".footerInput").val();
      var errorMessage = $(".error-message");

      if (email === "") {
        errorMessage.text("Vui lòng nhập trường này.").show();
      } else if (!email.includes("@")) {
        errorMessage.text("Email phải chứa ký tự @").show();
      } else {
        var parts = email.split("@");
        var localPart = parts[0];
        var domainPart = parts[1];
        if (localPart === "") {
          errorMessage.text("Vui lòng nhập phần đứng trước '@'").show();
        } else if (domainPart === "") {
          errorMessage.text("Vui lòng nhập phần đứng sau '@'").show();
        } else if (domainPart.indexOf('.') === 0) {
          errorMessage.text("Dấu chấm '.' bị sử dụng sai vị trí trong '" + domainPart + "'").show();
        } else if (/[^a-zA-Z0-9.-]/.test(domainPart)) {
          errorMessage.text("Phần đứng sau '@' không được chứa ký tự đặc biệt.").show();
        } else if (!validateEmail(email)) {
          errorMessage.text("Vui lòng nhập địa chỉ email hợp lệ.").show();
        } else {
          errorMessage.text("").hide();
          return true;
        }
      }
      return false;
    }

    $(".footerInput").on("input", checkEmailInput);

    $(".footerInput").on("blur", function () {
      $(".error-message").hide();
    });

    // Ẩn thông báo lỗi khi mất tiêu điểm khỏi input hoặc nút bấm
    $(".footerInput, .footerBtn").on("focusout", function () {
      setTimeout(function () {
        if (!$(".footerInput").is(":focus") && !$(".footerBtn").is(":focus")) {
          $(".error-message").hide();
        }
      }, 100);
    });

    // Xử lý khi nhấn phím Enter trong ô input
    $(".footerInput").on("keypress", function (event) {
      if (event.which === 13) { // Kiểm tra nếu phím Enter được nhấn
        event.preventDefault();
        if (checkEmailInput()) {
          window.$('#thankYouModal').modal('show');
        }
      }
    });

    $(".footerBtn").click(function (event) {
      event.preventDefault();
      if (checkEmailInput()) {
        $('#thankYouModal').modal('show');
      }
    });

    $(".modalBtnOK").mouseover(function () {
      $(this).css('background-color', 'var(--secondary-Color)');
    });
    $(".modalBtnOK").mouseleave(function () {
      $(this).css('background-color', 'var(--primary-Color)');
    });
    $(".modalBtnOK").on("touchstart", function () {
      $(this).css('background-color', 'var(--secondary-Color)');
    });
    $(".modalBtnOK").on("touchend", function () {
      $(this).css('background-color', 'var(--primary-Color)');
    });
  });
  return (
    <>
      <div
        className="Footer container-fluid text-white"
        style={{ backgroundColor: "var(--secondary-Color)" }}
      >
        <div className="container">
          <div
            className="row"
            style={{
              padding: "35px 0",
              borderBottom: "1px solid rgba(255, 255, 255, 0.1)"
            }}
          >
            <div
              className="footerColMB col-lg-4 pe-3 ps-0"
              style={{ borderRight: "1px solid rgba(255, 255, 255, 0.1)" }}
            >
              <div className="fw-bold mb-3" style={{ fontSize: 18 }}>
                NHẬN THÔNG TIN ƯU ĐÃI
              </div>
              <div className="d-flex">
                <input
                  className="footerInput border-0 px-3 py-2"
                  type="email"
                  placeholder="Email nhận thông tin khuyến mãi..."
                />
                <button
                  className="footerBtn text-white btn rounded-0 border-0 px-3"
                  style={{
                    backgroundColor: "var(--primary-Color)",
                    width: "fit-content"
                  }}
                >
                  Đăng ký
                </button>
              </div>
              <div className="error-message mt-2" style={{ fontSize: 16 }} />
            </div>
            <div
              className="footerCol footerColMB col-lg-4"
              style={{ paddingLeft: 40 }}
            >
              <div className="fw-bold mb-3" style={{ fontSize: 18 }}>
                BẠN CẦN GIÚP ĐỠ?
              </div>
              <div className="mb-2">Quản lý các đặt phòng</div>
              <div className="mb-4">Hỗ trợ</div>
              <div className="mb-2">Bạn muốn đặt chỗ</div>
              <div><PhoneOutlined></PhoneOutlined> 1900 1833</div>
            </div>
            <div className="footerCol col-lg-4" style={{ paddingLeft: 40 }}>
              <div className="fw-bold mb-3" style={{ fontSize: 18 }}>
                ĐIỀU KHOẢN &amp; QUY ĐỊNH
              </div>
              <div className="mb-2">Điều khoản chung</div>
              <div className="mb-2">Quy định chung</div>
              <div className="mb-2">Quy định về thanh toán</div>
              <div className="mb-2">Quy định về xác nhận thông tin đặt phòng</div>
              <div className="mb-2">Chính sách giải quyết tranh chấp</div>
              <div className="mb-2">Chính sách quyền riêng tư</div>
            </div>
          </div>
          <div
            className="row"
            style={{
              padding: "35px 0",
              borderBottom: "1px solid rgba(255, 255, 255, 0.1)"
            }}
          >
            <div className="footerColMB col-lg-4 pe-3 ps-0">
              <div className="fw-bold mb-3">Số ĐKKD</div>
              <p style={{ color: "#bfbfbf" }}>010611932</p>
              <p style={{ color: "#bfbfbf" }}>Đăng ký lần đầu ngày 15/10/2012</p>
              <p style={{ color: "#bfbfbf" }}>
                Đăng ký thay đổi lần thứ 15 ngày 16/8/2022
              </p>
              <img
                style={{ width: 150 }}
                src="https://booking.muongthanh.com/images/logo-da-thong-bao-website-voi-bo-cong-thuong.png"
                alt=""
              />
            </div>
            <div className="footerCol col-lg-4" style={{ paddingLeft: 40 }}>
              <div className="fw-bold mb-3">Nơi cấp:</div>
              <p style={{ color: "#bfbfbf" }}>
                Sở Kế hoạch và Đầu tư Tỉnh Điện Biên
              </p>
              <div className="fw-bold mb-3">Lĩnh vực kinh doanh:</div>
              <p style={{ color: "#bfbfbf" }}>
                Khách sạn, căn hộ kinh doanh dịch vụ lưu trú ngắn ngày; khu du lịch
                sinh thái, khu vui chơi giải trí, sân golf
              </p>
            </div>
            <div className="footerCol col-lg-4" style={{ paddingLeft: 40 }}>
              <div className="fw-bold mb-3">Trụ sở:</div>
              <p style={{ color: "#bfbfbf" }}>
                Số nhà 25, Tổ dân phố 21, Phường Him Lam, Thành phố Điện Biên Phủ,
                Tỉnh Điện Biên, Việt Nam
              </p>
              <div className="fw-bold mb-3">Email:</div>
              <p style={{ color: "#bfbfbf" }}>info@muongthanh.vn</p>
            </div>
          </div>
          <div className="footerSession3 row" style={{ padding: "17px 0" }}>
            <div
              className="footerSession3Item col-lg-4 ps-0 d-flex align-items-center"
              style={{ fontSize: 14 }}
            >
              © 2022 Mường Thanh Hospitality. All Rights Reserved.
            </div>
            <div className="footerSession3Item col-lg-4 d-flex justify-content-center">
              <img
                style={{ width: 100 }}
                src="https://booking.muongthanh.com/images/logo-footer.svg"
                alt=""
              />
            </div>
            <div className="footerSession3Item col-lg-4 d-flex justify-content-end align-items-center">
              <span className="pe-3" style={{ fontSize: 24 }}>
                <FacebookFilled></FacebookFilled>
              </span>
              <span className="pe-3" style={{ fontSize: 24 }}>
                <InstagramOutlined></InstagramOutlined>
              </span>
              <span style={{ fontSize: 24 }}>
                <YoutubeFilled></YoutubeFilled>
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* Modal */}
      <div
        className="ModalFooter modal fade"
        id="thankYouModal"
        tabIndex={-1}
        aria-labelledby="thankYouModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header d-flex justify-content-center border-0">
              <img
                style={{ width: 100 }}
                src="https://cdn2.iconfinder.com/data/icons/thin-line-color-1/21/10-512.png"
                alt=""
              />
            </div>
            <div className="modal-body d-flex justify-content-center border-0">
              Cảm ơn bạn đã gửi thông tin liên hệ!
            </div>
            <div className="modal-footer d-flex justify-content-center border-0 mb-2">
              <button
                type="button"
                className="modalBtnOK btn text-white px-4"
                style={{ backgroundColor: "var(--primary-Color)" }}
                data-bs-dismiss="modal"
              >
                OK
              </button>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}

export default Footer;
