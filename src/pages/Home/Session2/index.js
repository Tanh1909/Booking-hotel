import "./style.scss";
import $ from "jquery";
function Session2() {
  $(document).ready(function () {
    $('.Session2 .item').click(function () {
        var caption = $(this).find('.c-brand-item__caption');
        if (caption.css('opacity') == '1') {
            caption.css('opacity', '0');
        } else {
            caption.css('opacity', '1');
        }
    });

    $('.Session2 .item').mouseover(function () {
        $(this).find('.c-brand-item__caption').css('opacity', '1');
    });

    $('.Session2 .item').mouseleave(function () {
        $(this).find('.c-brand-item__caption').css('opacity', '0');
    });

    $(".carouselBtn").mouseover(function () {
        $(this).css('background-color', 'var(--secondary-Color)')
    });
    $(".carouselBtn").mouseleave(function () {
        $(this).css('background-color', 'var(--primary-Color)')
    });

    $(".carouselBtn").on("touchstart mousedown", function () {
        $(this).css('background-color', 'var(--secondary-Color)')
    });
    $(".carouselBtn").on("touchend mouseup", function () {
        $(this).css('background-color', 'var(--primary-Color)')
    });

    // Thêm sự kiện kéo slide bằng chuột hoặc ngón tay
    $("#brandCarousel").on("touchstart mousedown", function (event) {
        var xStart = event.pageX || event.originalEvent.touches[0].pageX;
        $(this).on("touchmove mousemove", function (event) {
            var xMove = event.pageX || event.originalEvent.touches[0].pageX;
            if (Math.abs(xStart - xMove) > 5) {
                if (xStart - xMove > 0) {
                    window.$(this).carousel('next');
                } else {
                    window.$(this).carousel('prev');
                }
            }
        });
        $(this).on("touchend mouseup", function () {
            $(this).off("touchmove mousemove");
        });
    });
});
  return (
    <>
      <div class="Session2 container px-0" style={{paddingBottom: 100}}>
        <div class="text-center" style={{fontSize: 40, marginBottom: 40}}>
            <span class="fw-bold">THƯƠNG HIỆU</span>
            <span>NỔI BẬT</span>
        </div>
        <div id="brandCarousel" class="carousel slide d-md-none" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <div class="item isLuxury">
                        <img
                            src="https://muongthanh.com/images/trademark/type/2019/05/original/brand_1_1556849367.jpg" />
                        <span class="c-brand-item__caption">
                            <span class="c-brand-item__title">
                                Mường Thanh<span>Luxury</span>
                            </span>
                            <span class="c-brand-item__symbol">
                                <img src="https://muongthanh.com/images/trademark/type/2019/05/original/symbol-luxury_1556850064.png"
                                    alt="symbol" />
                            </span>
                            <span class="c-brand-item__desc">
                                <p>Sincerity</p>
                                <p>Outstanding</p>
                                <p>True Vietnamese Hospitality</p>
                            </span>
                        </span>
                    </div>
                </div>
                <div class="carousel-item">
                    <div class="item isGrand">
                        <img
                            src="https://muongthanh.com/images/trademark/type/2019/05/original/brand_2_1556849374.jpg" />
                        <span class="c-brand-item__caption">
                            <span class="c-brand-item__title">
                                Mường Thanh<span>Grand</span>
                            </span>
                            <span class="c-brand-item__symbol">
                                <img src="https://muongthanh.com/images/trademark/type/2019/05/original/symbol-grand_1556850031.png"
                                    alt="symbol" />
                            </span>
                            <span class="c-brand-item__desc">
                                <p>Modern mood</p>
                                <p>Convenience</p>
                                <p>Networking</p>
                            </span>
                        </span>
                    </div>
                </div>
                <div class="carousel-item">
                    <div class="item isHoliday">
                        <img
                            src="https://muongthanh.com/images/trademark/type/2023/10/original/phan-khuc-holiday_1696914758.jpg" />
                        <span class="c-brand-item__caption">
                            <span class="c-brand-item__title">
                                Mường Thanh<span>Holiday</span>
                            </span>
                            <span class="c-brand-item__symbol">
                                <img src="https://muongthanh.com/images/trademark/type/2019/05/original/symbol-holiday_1556850046.png"
                                    alt="symbol" />
                            </span>
                            <span class="c-brand-item__desc">
                                <p>Local experience</p>
                                <p>Vacation lifestyle</p>
                            </span>
                        </span>
                    </div>
                </div>
                <div class="carousel-item">
                    <div class="item isMT">
                        <img
                            src="https://muongthanh.com/images/trademark/type/2019/05/original/brand_4_1556849388.jpg" />
                        <span class="c-brand-item__caption">
                            <span class="c-brand-item__title">
                                <span>Mường Thanh</span>
                            </span>
                            <span class="c-brand-item__symbol">
                                <img src="https://muongthanh.com/images/trademark/type/2019/05/original/symbol-muongthanh_1556850057.png"
                                    alt="symbol" />
                            </span>
                            <span class="c-brand-item__desc">
                                <p>Best price</p>
                                <p>Be Home</p>
                            </span>
                        </span>
                    </div>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#brandCarousel" data-bs-slide="prev"
                style={{opacity: 1}}>
                <div class="carouselBtn d-flex justify-content-center align-items-center rounded-circle"
                    style={{width: 60, height: 60, backgroundColor: "var(--primary-Color)"}}>
                    <span class="carousel-control-prev-icon"></span>
                </div>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#brandCarousel" data-bs-slide="next"
                style={{opacity: 1}}>
                <div class="carouselBtn d-flex justify-content-center align-items-center rounded-circle"
                    style={{width: 60, height: 60, backgroundColor: "var(--primary-Color)"}}>
                    <span class="carousel-control-next-icon"></span>
                </div>
            </button>
        </div>

        <div class="Tab1 d-none d-md-block">
            <div class="row no-gutters">
                <div class="col-12 col-sm-6 col-md-6 col-lg-3 px-1 pb-2">
                    <div class="item isLuxury">
                        <img
                            src="https://muongthanh.com/images/trademark/type/2019/05/original/brand_1_1556849367.jpg" />
                        <span class="c-brand-item__caption">
                            <span class="c-brand-item__title">
                                Mường Thanh<span>Luxury</span>
                            </span>
                            <span class="c-brand-item__symbol">
                                <img src="https://muongthanh.com/images/trademark/type/2019/05/original/symbol-luxury_1556850064.png"
                                    alt="symbol" />
                            </span>
                            <span class="c-brand-item__desc">
                                <p>Sincerity</p>
                                <p>Outstanding</p>
                                <p>True Vietnamese Hospitality</p>
                            </span>
                        </span>
                    </div>
                </div>
                <div class="col-12 col-sm-6 col-md-6 col-lg-3 px-1 pb-2">
                    <div class="item isGrand">
                        <img
                            src="https://muongthanh.com/images/trademark/type/2019/05/original/brand_2_1556849374.jpg" />
                        <span class="c-brand-item__caption">
                            <span class="c-brand-item__title">
                                Mường Thanh<span>Grand</span>
                            </span>
                            <span class="c-brand-item__symbol">
                                <img src="https://muongthanh.com/images/trademark/type/2019/05/original/symbol-grand_1556850031.png"
                                    alt="symbol" />
                            </span>
                            <span class="c-brand-item__desc">
                                <p>Modern mood</p>
                                <p>Convenience</p>
                                <p>Networking</p>
                            </span>
                        </span>
                    </div>
                </div>
                <div class="col-12 col-sm-6 col-md-6 col-lg-3 px-1 pb-2">
                    <div class="item isHoliday">
                        <img
                            src="https://muongthanh.com/images/trademark/type/2023/10/original/phan-khuc-holiday_1696914758.jpg" />
                        <span class="c-brand-item__caption">
                            <span class="c-brand-item__title">
                                Mường Thanh<span>Holiday</span>
                            </span>
                            <span class="c-brand-item__symbol">
                                <img src="https://muongthanh.com/images/trademark/type/2019/05/original/symbol-holiday_1556850046.png"
                                    alt="symbol" />
                            </span>
                            <span class="c-brand-item__desc">
                                <p>Local experience</p>
                                <p>Vacation lifestyle</p>
                            </span>
                        </span>
                    </div>
                </div>
                <div class="col-12 col-sm-6 col-md-6 col-lg-3 px-1 pb-2">
                    <div class="item isMT">
                        <img
                            src="https://muongthanh.com/images/trademark/type/2019/05/original/brand_4_1556849388.jpg" />
                        <span class="c-brand-item__caption">
                            <span class="c-brand-item__title">
                                <span>Mường Thanh</span>
                            </span>
                            <span class="c-brand-item__symbol">
                                <img src="https://muongthanh.com/images/trademark/type/2019/05/original/symbol-muongthanh_1556850057.png"
                                    alt="symbol" />
                            </span>
                            <span class="c-brand-item__desc">
                                <p>Best price</p>
                                <p>Be Home</p>
                            </span>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  );
}

export default Session2;
