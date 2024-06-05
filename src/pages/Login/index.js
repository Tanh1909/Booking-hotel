// import { Col, Container, Row } from "react-bootstrap";
import {
  Button,
  Checkbox,
  Col,
  Flex,
  Form,
  Input,
  Row,
  notification,
} from "antd";
import "./style.scss";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { loginAction } from "../../redux/action/index";
function Login() {
  const fakeUser = [
    {
      username: "dtienanh",
      password: "tanh",
    },
    {
      username: "hquocchien",
      password: "chien",
    },
    {
      username: "nmanhcuong",
      password: "cuong",
    },
  ];
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [api, contextHolder] = notification.useNotification();
  const openNotificationWithIcon = (type) => {
    api[type]({
      message: "Sai tài khoản hoặc mật khẩu",
      duration: 1,
    });
    console.log(type);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    let login = false;
    fakeUser.forEach((object) => {
      if (
        object.username == formData.username &&
        object.password == formData.password
      ) {
        login = true;
        dispatch(loginAction(formData));
        navigate("/");
      }
    });
    if (!login) {
      openNotificationWithIcon("error");
    }
  };
  return (
    <>
      {contextHolder}
      <div className="Login">
        <Row>
          <Col xs={0} sm={0} md={0} lg={14} xl={14}>
            <div className="left">
              <div className="summary">
                <div className="title">
                  Trải nghiệm du lịch đẳng cấp tại Mường Thanh Hospitality
                </div>
                <div className="text">
                  Hưởng nhiều ưu đãi và tích lũy điểm thưởng khi đăng ký thành
                  viên
                </div>
              </div>
            </div>
          </Col>
          <Col xs={24} sm={24} md={24} lg={10} xl={10}>
            <div className="right">
              <div class="main">
                <div class="d-flex justify-content-center align-items-end mb-3">
                  <Link to={"/"}>
                    <img
                      src="https://booking.muongthanh.com/images/config/logo_1650360911.svg"
                      alt="logo"
                    />
                  </Link>

                  <svg
                    width="1"
                    height="100"
                    viewBox="0 0 1 100"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      width="1"
                      height="100"
                      fill="url(#paint0_linear_2422_22009)"
                    ></rect>
                    <defs>
                      <linearGradient
                        id="paint0_linear_2422_22009"
                        x1="0.5"
                        y1="0"
                        x2="0.5"
                        y2="100"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#D9D9D9" stop-opacity="0"></stop>
                        <stop offset="0.510417" stop-color="#CCCCCC"></stop>
                        <stop
                          offset="1"
                          stop-color="#D9D9D9"
                          stop-opacity="0"
                        ></stop>
                      </linearGradient>
                    </defs>
                  </svg>
                  <div class="ps-3 d-flex align-items-center">
                    <img
                      src="https://booking.muongthanh.com/images/gold-mt-logo.svg"
                      alt="golf-mt-logo"
                      class="img-responsive"
                    />
                  </div>
                </div>

                <ul class="nav nav-tabs" role="tablist">
                  <li role="presentation" class="active">
                    <a
                      href="#Log"
                      aria-controls="home"
                      role="tab"
                      data-toggle="tab"
                      class="active"
                    >
                      Đăng nhập / Login
                    </a>
                  </li>
                  <li role="presentation">
                    <a
                      href="#Res"
                      aria-controls="profile"
                      role="tab"
                      data-toggle="tab"
                    ></a>
                  </li>
                </ul>
                <div class="tab-content">
                  <div
                    role="tabpanel"
                    class="tab-pane fade in active show"
                    id="Log"
                  >
                    <form
                      action="#"
                      method="post"
                      class="frmLogin "
                      id="frmLogin"
                      onSubmit={handleSubmit}
                    >
                      <div class="box">
                        <div class="svg">
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M0.632078 4.18475C0.51839 4.43371 0.455078 4.70959 0.455078 4.99992V15.6666C0.455078 16.0007 0.538934 16.3157 0.687017 16.5926L7.11637 11.19L0.632078 4.18475Z"
                              fill="#3C3C3B"
                            ></path>
                            <path
                              d="M1.69336 17.5052C1.94098 17.6092 2.21368 17.6668 2.50028 17.6668H17.5003C17.7869 17.6668 18.0596 17.6092 18.3072 17.5052L11.9402 12.1551L11.4335 12.6415C10.6379 13.4057 9.36284 13.4057 8.56718 12.6415L8.06053 12.1551L1.69336 17.5052Z"
                              fill="#3C3C3B"
                            ></path>
                            <path
                              d="M19.314 16.5928C19.4622 16.3158 19.5461 16.0008 19.5461 15.6667V5.00004C19.5461 4.70971 19.4827 4.43383 19.3691 4.18488L12.8848 11.1902L19.314 16.5928Z"
                              fill="#3C3C3B"
                            ></path>
                            <path
                              d="M18.4258 3.21607C18.1478 3.07798 17.8332 3 17.5 3H2.50001C2.16686 3 1.85213 3.07798 1.57422 3.21607L8.58292 10.7883L9.52223 11.6904C9.7875 11.945 10.2124 11.945 10.4777 11.6904L11.417 10.7883L18.4258 3.21607Z"
                              fill="#3C3C3B"
                            ></path>
                          </svg>
                        </div>
                        <input
                          onChange={handleChange}
                          value={formData.username}
                          id="log_name"
                          name="username"
                          type="text"
                          class="form-control"
                          placeholder="Email"
                        />
                      </div>
                      <div class="box">
                        <div class="svg">
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M14.5717 6.71393C14.5717 6.54834 14.506 6.38901 14.3886 6.27182C14.2714 6.15464 14.1125 6.08893 13.9467 6.08893H6.05273C5.88686 6.08893 5.72796 6.15464 5.61077 6.27182C5.49344 6.38901 5.42773 6.54833 5.42773 6.71393V12.0132C5.42773 12.1788 5.49344 12.3383 5.61077 12.4555C5.72796 12.5727 5.88686 12.6382 6.05273 12.6382H13.9467C14.1125 12.6382 14.2714 12.5727 14.3886 12.4555C14.506 12.3383 14.5717 12.1788 14.5717 12.0132V6.71393ZM7.85881 9.33975L9.64313 11.1241L12.5426 8.22493L11.9206 7.603L9.64313 9.88036L8.48059 8.71782L7.85881 9.33975Z"
                              fill="#3C3C3B"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M7.72356 6.08894V4.10622C7.72356 3.50297 7.96337 2.92415 8.39013 2.49755C8.81688 2.07022 9.3957 1.8304 9.99938 1.8304H9.99966C10.6033 1.8304 11.1821 2.07022 11.6089 2.49755C12.0357 2.92415 12.2755 3.50297 12.2755 4.10622V6.08894H13.3155V4.09676C13.3155 3.21787 12.9662 2.37412 12.3443 1.7523C11.7225 1.13037 10.879 0.781189 9.99969 0.781189H9.99941C9.12009 0.781189 8.27663 1.13038 7.65484 1.7523C7.03292 2.37408 6.68359 3.21783 6.68359 4.09676V6.08894H7.72356Z"
                              fill="#3C3C3B"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M19.2187 14.8086C19.2187 14.5594 19.1199 14.3212 18.9442 14.1454C18.7684 13.9696 18.5298 13.8711 18.2812 13.8711H1.71873C1.47013 13.8711 1.23155 13.9696 1.0558 14.1454C0.880021 14.3212 0.78125 14.5594 0.78125 14.8086V18.2812C0.78125 18.5297 0.880021 18.7687 1.0558 18.9444C1.23159 19.1202 1.47016 19.2187 1.71873 19.2187H18.2812C18.5298 19.2187 18.7684 19.1202 18.9442 18.9444C19.1199 18.7687 19.2187 18.5297 19.2187 18.2812V14.8086ZM17.8906 17.9179C17.8906 17.8429 17.8609 17.771 17.8077 17.7179C17.7548 17.6649 17.683 17.6352 17.6079 17.6352H14.3451C14.27 17.6352 14.1982 17.6649 14.1453 17.7179C14.0922 17.771 14.0625 17.8429 14.0625 17.9179C14.0625 17.993 14.0922 18.0648 14.1453 18.118C14.1982 18.171 14.27 18.2007 14.3451 18.2007H17.6079C17.683 18.2007 17.7548 18.171 17.8077 18.118C17.8609 18.0648 17.8906 17.993 17.8906 17.9179ZM5.102 16.9312C5.15794 16.9507 5.18389 16.9945 5.17971 17.0616C5.17552 17.1289 5.13283 17.2328 5.0515 17.3726C4.97031 17.5125 4.90167 17.6 4.84559 17.6352C4.7895 17.6703 4.73914 17.6695 4.69436 17.6336L3.85786 16.9648L4.0261 18.0195C4.04005 18.0789 4.01634 18.1234 3.95467 18.1547C3.89301 18.1851 3.78085 18.2007 3.61846 18.2007C3.45593 18.2007 3.34376 18.1851 3.2821 18.1547C3.22044 18.1234 3.19672 18.0789 3.21067 18.0195L3.37892 16.9648L2.54242 17.6336C2.50043 17.6695 2.45146 17.6695 2.39537 17.6336C2.33929 17.5968 2.26926 17.5086 2.18528 17.3687C2.10394 17.2313 2.06195 17.1289 2.05916 17.0616C2.05637 16.9945 2.08162 16.9507 2.13477 16.9312L3.13506 16.5445L2.13477 16.1578C2.08162 16.1382 2.05637 16.0953 2.05916 16.0282C2.06195 15.9609 2.10394 15.857 2.18528 15.7164C2.26647 15.5766 2.3358 15.4883 2.39328 15.4523C2.45076 15.4156 2.50043 15.4171 2.54242 15.4562L3.37892 16.1241L3.21067 15.0695C3.19672 15.0132 3.22044 14.9696 3.2821 14.9375C3.34376 14.9047 3.45593 14.8891 3.61846 14.8891C3.78085 14.8891 3.89301 14.9047 3.95467 14.9375C4.01634 14.9696 4.04005 15.0132 4.0261 15.0695L3.85786 16.1241L4.69436 15.4562C4.73914 15.4171 4.7888 15.4164 4.84349 15.4539C4.89818 15.4922 4.96752 15.5805 5.0515 15.7211C5.13283 15.8585 5.17553 15.9609 5.17971 16.0282C5.18389 16.0953 5.15794 16.1382 5.102 16.1578L4.10589 16.5445L5.102 16.9312ZM9.17271 16.9312C9.2288 16.9507 9.25475 16.9945 9.25056 17.0616C9.24624 17.1289 9.20369 17.2328 9.12235 17.3726C9.04102 17.5125 8.97252 17.6 8.91644 17.6352C8.86036 17.6703 8.80999 17.6695 8.76507 17.6336L7.92886 16.9648L8.09682 18.0195C8.11092 18.0789 8.08706 18.1234 8.0254 18.1547C7.96373 18.1851 7.85171 18.2007 7.68918 18.2007C7.52665 18.2007 7.41463 18.1851 7.35296 18.1547C7.2913 18.1234 7.26758 18.0789 7.28153 18.0195L7.44964 16.9648L6.61328 17.6336C6.57115 17.6695 6.52218 17.6695 6.46624 17.6336C6.41016 17.5968 6.34013 17.5086 6.256 17.3687C6.17481 17.2313 6.13281 17.1289 6.13003 17.0616C6.1271 16.9945 6.15235 16.9507 6.20564 16.9312L7.20593 16.5445L6.20564 16.1578C6.15235 16.1382 6.1271 16.0953 6.13003 16.0282C6.13282 15.9609 6.17481 15.857 6.256 15.7164C6.33733 15.5766 6.40653 15.4883 6.46415 15.4523C6.52149 15.4156 6.57115 15.4171 6.61328 15.4562L7.44964 16.1241L7.28153 15.0695C7.26758 15.0132 7.2913 14.9696 7.35296 14.9375C7.41463 14.9047 7.52665 14.8891 7.68918 14.8891C7.85171 14.8891 7.96373 14.9047 8.0254 14.9375C8.08706 14.9696 8.11091 15.0132 8.09682 15.0695L7.92886 16.1241L8.76507 15.4562C8.80999 15.4171 8.85966 15.4164 8.91435 15.4539C8.96889 15.4922 9.03837 15.5805 9.12235 15.7211C9.20369 15.8585 9.24624 15.9609 9.25056 16.0282C9.25475 16.0953 9.2288 16.1382 9.17271 16.1578L8.17661 16.5445L9.17271 16.9312ZM13.2438 16.9312C13.2997 16.9507 13.3257 16.9945 13.3215 17.0616C13.3173 17.1289 13.2746 17.2328 13.1934 17.3726C13.1121 17.5125 13.0435 17.6 12.9875 17.6352C12.9313 17.6703 12.8809 17.6695 12.8361 17.6336L11.9998 16.9648L12.1679 18.0195C12.1818 18.0789 12.1581 18.1234 12.0965 18.1547C12.0348 18.1851 11.9226 18.2007 11.7601 18.2007C11.5977 18.2007 11.4857 18.1851 11.424 18.1547C11.3624 18.1234 11.3385 18.0789 11.3525 18.0195L11.5207 16.9648L10.6844 17.6336C10.6422 17.6695 10.5933 17.6695 10.5372 17.6336C10.4811 17.5968 10.4111 17.5086 10.3271 17.3687C10.2457 17.2313 10.2037 17.1289 10.201 17.0616C10.1982 16.9945 10.2234 16.9507 10.2766 16.9312L11.2769 16.5445L10.2766 16.1578C10.2234 16.1382 10.1982 16.0953 10.201 16.0282C10.2037 15.9609 10.2457 15.857 10.3271 15.7164C10.4083 15.5766 10.4777 15.4883 10.5351 15.4523C10.5926 15.4156 10.6422 15.4171 10.6844 15.4562L11.5207 16.1241L11.3525 15.0695C11.3385 15.0132 11.3624 14.9696 11.424 14.9375C11.4857 14.9047 11.5977 14.8891 11.7601 14.8891C11.9226 14.8891 12.0348 14.9047 12.0965 14.9375C12.1581 14.9696 12.1818 15.0132 12.1679 15.0695L11.9998 16.1241L12.8361 15.4562C12.8809 15.4171 12.9306 15.4164 12.9853 15.4539C13.04 15.4922 13.1093 15.5805 13.1934 15.7211C13.2746 15.8585 13.3173 15.9609 13.3215 16.0282C13.3257 16.0953 13.2997 16.1382 13.2438 16.1578L12.2477 16.5445L13.2438 16.9312Z"
                              fill="#3C3C3B"
                            ></path>
                          </svg>
                        </div>
                        <input
                          value={formData.password}
                          onChange={handleChange}
                          id="log_pass"
                          name="password"
                          type="password"
                          class="form-control"
                          placeholder="Mật khẩu / Password"
                        />
                      </div>
                      <div class="box box-flex d-flex align-items-center justify-content-between ">
                        <label
                          class="check-box d-flex align-items-center"
                          for="log_save"
                        >
                          <span class="checkmark"></span>
                          <input
                            className="checkbox"
                            type="checkbox"
                            name="log_save"
                            id="log_save"
                            value="true"
                          />
                          <span class="ms-2">Ghi nhớ tài khoản</span>
                        </label>
                        <a title="Quên mật khẩu?" class="forgot-password">
                          Quên mật khẩu?{" "}
                        </a>
                      </div>
                      <div class="box">
                        <button
                          type="submit"
                          className="submitLogin submit-btn"
                        >
                          Đăng nhập / login
                        </button>
                        <Link to={"/"}></Link>
                      </div>
                    </form>
                  </div>
                  <div role="tabpanel" class="tab-pane fade" id="Res">
                    <form
                      action=""
                      method="post"
                      class="frmRegister"
                      id="frmRegister"
                    >
                      <div class="box">
                        <input
                          id="res_email"
                          name="res_email"
                          type="text"
                          class="form-control"
                          placeholder="Email *"
                        />
                      </div>
                      <div class="box">
                        <input
                          id="res_name"
                          name="res_name"
                          type="text"
                          class="form-control"
                          placeholder="Họ tên *"
                        />
                      </div>
                      <div class="box">
                        <input
                          id="res_pass"
                          name="res_pass"
                          type="password"
                          class="form-control"
                          placeholder="Mật khẩu *"
                        />
                      </div>
                      <div class="box">
                        <input
                          id="res_pass_re"
                          name="res_pass_re"
                          type="password"
                          class="form-control"
                          placeholder="Nhập lại mật khẩu *"
                        />
                      </div>
                      <div class="box">
                        <div
                          id="res_captcha"
                          class="g-recaptcha"
                          data-sitekey="6LeAKDsaAAAAALJDDw7m8MPOgQlHofn3FQxWTYU8"
                          data-callback="verifyRecaptchaCallback"
                          data-expired-callback="expiredRecaptchaCallback"
                        ></div>
                      </div>
                      <div class="box">
                        <a
                          href="javascript:void(0)"
                          class="submitRegister submit-btn"
                        >
                          Đăng ký
                        </a>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Login;
