import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./style.scss";
import { ArrowRightOutlined } from "@ant-design/icons";
function OwlCarouselCustom({ children, autoplay }) {
  const options = {
    autoplay,
    smartSpeed: 1500,
  };
  return (
    <>
      <OwlCarousel
        {...options}
        navText={[
          `<i class="fa-solid fa-angle-left"></i>`,
          `<i class="fa-solid fa-angle-right"></i>`,
        ]}
        responsive={{
          0: {
            items: 1,
          },
          480: {
            items: 1,
          },
          768: {
            items: 1,
          },
          992: {
            items: 3,
          },
        }}
        className="owl-theme own-loader"
        loop
        margin={10}
        nav
        dotClass="owl-dot-custom"
        navClass={["pre", "next"]}
      >
        {children}
      </OwlCarousel>
    </>
  );
}

export default OwlCarouselCustom;
