import { useEffect } from "react";
import "./style.scss";
import { Col, Row, Space, Tabs } from "antd";
import Tab1 from "./tab1";
import Tab2 from "./tab2";

function Session2() {
  useEffect(() => {});
  const items = [
    {
      key: "1",
      label: <div className="tabLabel">CÁC THƯƠNG HIỆU</div>,
      children: <Tab1 />,
    },
    {
      key: "2",
      label: <div className="tabLabel">ĐIỂM ĐẾN</div>,
      children: <Tab2 />,
    },
    {
      key: "3",
      label: <div className="tabLabel">ƯU ĐÃI</div>,
      children: "Content of Tab Pane 3",
    },
    {
      key: "4",
      label: <div className="tabLabel">DỊCH VỤ</div>,
      children: "Content of Tab Pane 4",
    },
  ];

  return (
    <>
      <div className="Session2">
        <div className="container">
          <div className="title">
            <Space>
              <span>DANH MỤC</span>
              NỔI BẬT
            </Space>
          </div>
          <Tabs defaultActiveKey="1" items={items} moreIcon={null} />
        </div>
      </div>
    </>
  );
}

export default Session2;
