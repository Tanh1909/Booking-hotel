import { Button, Col, ConfigProvider, Form, Input, Row, Select } from "antd";
import "./style.scss";
import { DatePicker, Space } from "antd";
import dayjs from "dayjs";
import {
  CalendarOutlined,
  EnvironmentOutlined,
  HomeOutlined,
  MinusOutlined,
  PlusOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import { useRef, useState } from "react";
import { useForm } from "antd/es/form/Form";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { search } from "../../redux/action";
const { RangePicker } = DatePicker;
function Search({ booking }) {
  const [count, setCount] = useState(1);
  const navigate = useNavigate();

  const [form] = useForm();
  const value = useSelector((state) => state.search);
  const dispatch = useDispatch();

  const options = [
    {
      label: "Hà Nội",
      value: "Hà Nội",
    },
    {
      label: "Hải Phòng",
      value: "Hải Phòng",
    },
    {
      label: "TP HCM",
      value: "TP HCM",
    },
    {
      label: "Hạ Long",
      value: "Hạ Long",
    },
  ];
  const onFinish = (value) => {
    dispatch(search(value));
    navigate("/booking");
  };

  return (
    <>
      <div className={"Search" + (booking ? " Booking" : "")}>
        {/* <Button type="primary"></Button> */}
        <div className="container pt-2 pb-3">
          <Form
            initialValues={value}
            layout="vertical"
            form={form}
            onFinish={onFinish}
          >
            <Row gutter={[20]} justify={"center"} align={"middle"}>
              <Col xs={24} sm={24} md={24} lg={8} xl={8}>
                <Form.Item
                  label={<span className="label">Bạn muốn nghỉ ở đâu?</span>}
                  className="formItem"
                  name="place"
                  required={false}
                  rules={[
                    {
                      required: true,
                      message: <h6>Vui lòng chọn khách sạn, điểm đến</h6>,
                    },
                  ]}
                >
                  <Select
                    options={options}
                    style={{
                      width: "100%",
                      height: 50,
                    }}
                    suffixIcon={<EnvironmentOutlined className="icon" />}
                    showSearch
                    placeholder="Nhập khách sạn/ Điểm đến"
                  ></Select>
                </Form.Item>
              </Col>
              <Col xs={24} sm={24} md={24} lg={8} xl={8}>
                <Form.Item
                  label={<span className="label">Ngày nhận - trả phòng</span>}
                  className="formItem"
                  name="date"
                  required={false}
                  rules={[
                    {
                      required: true,
                      message: <h6>Vui lòng chọn Ngày nhận/ Trả phòng</h6>,
                    },
                  ]}
                >
                  <RangePicker
                    style={{
                      width: "100%",
                      height: 50,
                    }}
                    suffixIcon={<CalendarOutlined className="icon" />}
                    prevIcon={null}
                    superNextIcon={null}
                    superPrevIcon={null}
                    disabledDate={(current) => {
                      return current < dayjs().startOf("day");
                    }}
                  />
                </Form.Item>
              </Col>
              <Col xs={24} sm={24} md={24} lg={4} xl={4}>
                <Form.Item
                  label={<span className="label">Số phòng</span>}
                  className="formItem"
                  name={"countRoom"}
                  style={{
                    width: "100%",
                  }}
                  initialValue={1}
                >
                  <Select
                    style={{
                      height: 50,
                    }}
                    labelRender={(e) => {
                      return e.value + " Phòng";
                    }}
                    popupClassName={"customSelectRoomCount"}
                    placeholder="Số phòng"
                    suffixIcon={<HomeOutlined className="icon" />}
                    dropdownRender={(menu) => {
                      return (
                        <>
                          <div>
                            <Space>
                              <Button
                                icon={<MinusOutlined />}
                                size="large"
                                onClick={() => {
                                  form.setFieldValue(
                                    "countRoom",
                                    count > 1 ? count - 1 : count
                                  );
                                  setCount((pre) => (pre > 1 ? pre - 1 : pre));
                                }}
                              />
                              <Input
                                size="large"
                                value={count}
                                className="inputNumber"
                              />

                              <Button
                                icon={<PlusOutlined />}
                                size="large"
                                onClick={() => {
                                  form.setFieldValue("countRoom", count + 1);
                                  setCount((pre) => pre + 1);
                                }}
                              />
                            </Space>
                          </div>
                        </>
                      );
                    }}
                  ></Select>
                </Form.Item>
              </Col>
              <Col xs={24} sm={24} md={24} lg={4} xl={4}>
                <button htmltype="submit" className="btnSearch">
                  <SearchOutlined className="icon" />
                  TÌM KIẾM
                </button>
                {/* <Link to="/booking"></Link> */}
              </Col>
            </Row>
          </Form>
        </div>
      </div>
    </>
  );
}

export default Search;
