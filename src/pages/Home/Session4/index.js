import "./style.scss";
import $ from "jquery";
function Session4() {
  $(document).ready(function () {
    function adjustNavPills() {
        if ($(window).width() < 992) {
            $('#v-pills-tab').removeClass('flex-column col-lg-3');
            $('#nav-pills-container').removeClass('d-flex');
        } else {
            $('#v-pills-tab').addClass('flex-column col-lg-3');
            $('#nav-pills-container').addClass('d-flex');
        }
    }
    adjustNavPills();
    $(window).resize(function () {
        adjustNavPills();
    });
});
  return (
    <>
      <div class="Session4 container-fluid" style={{backgroundColor: "var(--gray-Color)"}}>
        <div class="container py-5 px-0">
            <div class="d-flex align-items-start" id="nav-pills-container">
                <div class="col-lg-3 nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist"
                    aria-orientation="vertical">
                    <button class="nav-link active" id="v-pills-tatca-tab" data-bs-toggle="pill"
                        data-bs-target="#v-pills-tatca" type="button" role="tab" aria-controls="v-pills-tatca"
                        aria-selected="true">TẤT CẢ</button>
                    <button class="nav-link" id="v-pills-luxury-tab" data-bs-toggle="pill"
                        data-bs-target="#v-pills-luxury" type="button" role="tab" aria-controls="v-pills-luxury"
                        aria-selected="false">LUXURY</button>
                    <button class="nav-link" id="v-pills-grand-tab" data-bs-toggle="pill"
                        data-bs-target="#v-pills-grand" type="button" role="tab" aria-controls="v-pills-grand"
                        aria-selected="false">GRAND</button>
                    <button class="nav-link" id="v-pills-holiday-tab" data-bs-toggle="pill"
                        data-bs-target="#v-pills-holiday" type="button" role="tab" aria-controls="v-pills-holiday"
                        aria-selected="false">HOLIDAY</button>
                    <button class="nav-link" id="v-pills-muongthanh-tab" data-bs-toggle="pill"
                        data-bs-target="#v-pills-muongthanh" type="button" role="tab" aria-controls="v-pills-muongthanh"
                        aria-selected="false">MƯỜNG THANH</button>
                </div>
                <div class="col-lg-9 tab-content" id="v-pills-tabContent">
                    <div class="tab-pane fade show active" id="v-pills-tatca" role="tabpanel"
                        aria-labelledby="v-pills-tatca-tab">
                        <div class="row d-flex flex-wrap" id="responsive-container">
                            <div class="col-lg-4" style={{paddingRight: 80}} id="responsive-left">
                                <img style={{width: 200}}
                                    src="https://booking.muongthanh.com/images//complex/original/ban-do-04-luxury_1696492153.png"
                                    alt=""/>
                            </div>
                            <div class="col-lg-8" id="responsive-right">
                                <div class="d-flex">
                                    <div class="pt-4">
                                        <div>
                                            <img src="https://booking.muongthanh.com/images/hotel.svg" alt=""/>
                                        </div>
                                        <div style={{marginLeft: -7, marginTop: 65}} id="province-icon">
                                            <img style={{width: 50}}
                                                src="https://cdn.icon-icons.com/icons2/3783/PNG/512/gps_navigation_map_maps_pin_icon_232083.png"
                                                alt=""/>
                                        </div>
                                    </div>
                                    <div style={{marginLeft: 30, marginTop: -20}}>
                                        <div style={{fontSize: 60, color: "var(--primary-Color)"}}>60</div>
                                        <div>KHÁCH SẠN</div>
                                        <div style={{fontSize: 60, color: "var(--primary-Color)"}}>33</div>
                                        <div>TỈNH THÀNH</div>
                                    </div>
                                </div>
                                <div style={{marginTop: 20, textAlign: "justify"}} id="responsive-right-2">
                                    Tập đoàn khách sạn Mường Thanh được công nhận là "Chuỗi Khách sạn tư nhân lớn nhất
                                    Đông Dương" với 60 khách sạn cao cấp đạt chuẩn quốc tế trải dài trên 33 tỉnh thành
                                    tại Việt Nam và nước bạn Lào. Hệ thống khách sạn Mường Thanh với 4 phân khúc: Mường
                                    Thanh Luxury, Mường Thanh Grand, Mường Thanh Holiday và Mường Thanh hướng đến việc
                                    phục vụ đa dạng nhu cầu của mọi du khách trong nước và quốc tế.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="tab-pane fade" id="v-pills-luxury" role="tabpanel"
                        aria-labelledby="v-pills-luxury-tab">
                        <div class="row d-flex flex-wrap" id="responsive-container">
                            <div class="col-lg-4" style={{paddingRight: 80}} id="responsive-left">
                                <img style={{width: 200}}
                                    src="https://booking.muongthanh.com/images//complex/original/ban-do-04-luxury_1696492153.png"
                                    alt=""/>
                            </div>
                            <div class="col-lg-8" id="responsive-right">
                                <div class="d-flex">
                                    <div class="pt-4">
                                        <div>
                                            <img src="https://booking.muongthanh.com/images/hotel.svg" alt=""/>
                                        </div>
                                        <div style={{marginLeft: -7, marginTop: 65}} id="province-icon">
                                            <img style={{width: 50}}
                                                src="https://cdn.icon-icons.com/icons2/3783/PNG/512/gps_navigation_map_maps_pin_icon_232083.png"
                                                alt=""/>
                                        </div>
                                    </div>
                                    <div style={{marginLeft: 30, marginTop: -20}}>
                                        <div style={{fontSize: 60, color: "var(--primary-Color)"}}>24</div>
                                        <div>KHÁCH SẠN</div>
                                        <div style={{fontSize: 60, color: "var(--primary-Color)"}}>18</div>
                                        <div>TỈNH THÀNH</div>
                                    </div>
                                </div>
                                <div style={{marginTop: 20, textAlign: "justify"}} id="responsive-right-2">
                                    Mường Thanh Luxury là phân khúc khách sạn hạng sang cao cấp nhất của Mường Thanh,
                                    nằm ở các thành phố lớn và trung tâm du lịch nổi tiếng trong nước và quốc tế. Quy mô
                                    lớn và đẳng cấp khác biệt, Mường Thanh Luxury mang đến cho khách hàng không gian
                                    nghỉ dưỡng tuyệt vời mang đậm giá trị Việt đến từ dịch vụ tận tâm và văn hóa ẩm thực
                                    bản địa độc đáo.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="tab-pane fade" id="v-pills-grand" role="tabpanel"
                        aria-labelledby="v-pills-grand-tab">
                        <div class="row d-flex flex-wrap" id="responsive-container">
                            <div class="col-lg-4" style={{paddingRight: 80}} id="responsive-left">
                                <img style={{width: 200}}
                                    src="https://booking.muongthanh.com/images//complex/original/ban-do-04-luxury_1696492153.png"
                                    alt=""/>
                            </div>
                            <div class="col-lg-8" id="responsive-right">
                                <div class="d-flex">
                                    <div class="pt-4">
                                        <div>
                                            <img src="https://booking.muongthanh.com/images/hotel.svg" alt=""/>
                                        </div>
                                        <div style={{marginLeft: -7, marginTop: 65}} id="province-icon">
                                            <img style={{width: 50}}
                                                src="https://cdn.icon-icons.com/icons2/3783/PNG/512/gps_navigation_map_maps_pin_icon_232083.png"
                                                alt=""/>
                                        </div>
                                    </div>
                                    <div style={{marginLeft: 30, marginTop: -20}}>
                                        <div style={{fontSize: 60, color: "var(--primary-Color)"}}>19</div>
                                        <div>KHÁCH SẠN</div>
                                        <div style={{fontSize: 60, color: "var(--primary-Color)"}}>14</div>
                                        <div>TỈNH THÀNH</div>
                                    </div>
                                </div>
                                <div style={{marginTop: 20, textAlign: "justify"}} id="responsive-right-2">
                                    Được ưu ái tọa lạc tại những vị trí đắc địa của các đô thị lớn, khách sạn thuộc phân
                                    khúc Mường Thanh Grand đã và đang mang đến ấn tượng về sự tiện nghi và lịch thiệp từ
                                    mọi góc nhìn. Với phong cách phục vụ nhanh chóng, dịch vụ tiện lợi, mỗi khách sạn
                                    thuộc nhóm Mường Thanh Grand là nơi kết nối cuộc sống hiện đại, đáp ứng tất cả mong
                                    muốn của bạn dù đang đi du lịch hay công tác.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="tab-pane fade" id="v-pills-holiday" role="tabpanel"
                        aria-labelledby="v-pills-holiday-tab">
                        <div class="row d-flex flex-wrap" id="responsive-container">
                            <div class="col-lg-4" style={{paddingRight: 80}} id="responsive-left">
                                <img style={{width: 200}}
                                    src="https://booking.muongthanh.com/images//complex/original/ban-do-04-luxury_1696492153.png"
                                    alt=""/>
                            </div>
                            <div class="col-lg-8" id="responsive-right">
                                <div class="d-flex">
                                    <div class="pt-4">
                                        <div>
                                            <img src="https://booking.muongthanh.com/images/hotel.svg" alt=""/>
                                        </div>
                                        <div style={{marginLeft: -7, marginTop: 65}} id="province-icon">
                                            <img style={{width: 50}}
                                                src="https://cdn.icon-icons.com/icons2/3783/PNG/512/gps_navigation_map_maps_pin_icon_232083.png"
                                                alt=""/>
                                        </div>
                                    </div>
                                    <div style={{marginLeft: 30, marginTop: -20}}>
                                        <div style={{fontSize: 60, color: "var(--primary-Color)"}}>10</div>
                                        <div>KHÁCH SẠN</div>
                                        <div style={{fontSize: 60, color: "var(--primary-Color)"}}>10</div>
                                        <div>TỈNH THÀNH</div>
                                    </div>
                                </div>
                                <div style={{marginTop: 20, textAlign: "justify"}} id="responsive-right-2">
                                    Mường Thanh Holiday là nhóm khách sạn cao cấp nằm ở các địa điểm du lịch, nghỉ dưỡng
                                    nổi tiếng trên đất nước Việt Nam xinh đẹp. Đến với Mường Thanh Holiday, du khách
                                    được thư giãn trong khung cảnh thiên nhiên tươi đẹp và những trải nghiệm du lịch địa
                                    phương độc đáo. Dịch vụ tiện nghi và thoải mái sẽ khiến kỳ nghỉ của bạn đáng nhớ hơn
                                    bao giờ hết.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="tab-pane fade" id="v-pills-muongthanh" role="tabpanel"
                        aria-labelledby="v-pills-muongthanh-tab">
                        <div class="row d-flex flex-wrap" id="responsive-container">
                            <div class="col-lg-4" style={{paddingRight: 80}} id="responsive-left">
                                <img style={{width: 200}}
                                    src="https://booking.muongthanh.com/images//complex/original/ban-do-04-luxury_1696492153.png"
                                    alt=""/>
                            </div>
                            <div class="col-lg-8" id="responsive-right">
                                <div class="d-flex">
                                    <div class="pt-4">
                                        <div>
                                            <img src="https://booking.muongthanh.com/images/hotel.svg" alt=""/>
                                        </div>
                                        <div style={{marginLeft: -7, marginTop: 65}} id="province-icon">
                                            <img style={{width: 50}}
                                                src="https://cdn.icon-icons.com/icons2/3783/PNG/512/gps_navigation_map_maps_pin_icon_232083.png"
                                                alt=""/>
                                        </div>
                                    </div>
                                    <div style={{marginLeft: 30, marginTop: -20}}>
                                        <div style={{fontSize: 60, color: "var(--primary-Color)"}}>7</div>
                                        <div>KHÁCH SẠN</div>
                                        <div style={{fontSize: 60, color: "var(--primary-Color)"}}>4</div>
                                        <div>TỈNH THÀNH</div>
                                    </div>
                                </div>
                                <div style={{marginTop: 20, textAlign: "justify"}} id="responsive-right-2">
                                    Mường Thanh tiêu chuẩn bao gồm các khách sạn 3-4 sao, nằm ở trung tâm của các thành
                                    phố, thị trấn trên khắp cả nước. Với giá cả hợp lý cùng dịch vụ đạt chuẩn, khách sạn
                                    thuộc nhóm Mường Thanh với không gian gần gũi, ấm cúng mang đến cho khách hàng những
                                    trải nghiệm thân thiết, gần gũi như “ngôi nhà phương xa” của chính mình.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  );
}

export default Session4;
