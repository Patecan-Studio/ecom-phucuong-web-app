import React from "react";
import "./style.scss";

const OverviewAbout = () => {
  return (
    <div className="overview__about">
      <div>
        <h4 className="overview__about__title">VỀ SẢN PHẨM</h4>
      </div>
      <div className="overview__about__list">
        <h5 className="overview__about__list__title">Chất liệu</h5>
        <div className="overview__about__items">
          <p className="overview__about__item">Da công nghiệp</p>
          <p className="overview__about__item">Da nông nghiệp</p>
          <p className="overview__about__item">Da thương nghiệp</p>
          <p className="overview__about__item">Da tạo nghiệp</p>
        </div>
      </div>
      <div className="overview__about__list">
        <h5 className="overview__about__list__title">Kích thước</h5>
        <div className="overview__about__items">
          <p className="overview__about__item">C 80cm</p>
          <p className="overview__about__item">D 220cm</p>
          <p className="overview__about__item">R 160</p>
          <p className="overview__about__item">R 170</p>
        </div>
      </div>
      <div className="overview__about__list">
        <h5 className="overview__about__list__title">Kiểu dáng</h5>
        <div className="overview__about__items">
          <p className="overview__about__item">Chữ nhật</p>
          <p className="overview__about__item">Hình divòn</p>
          <p className="overview__about__item">Hình vuông</p>
          <p className="overview__about__item">Hình tam giác</p>
          <p className="overview__about__item">Elio Armchair</p>
        </div>
      </div>
      <div className="overview__about__list">
        <h5 className="overview__about__list__title">Màu sắc</h5>
        <div className="overview__about__items">
          <p className="overview__about__item">Đen</p>
          <p className="overview__about__item">divắng</p>
          <p className="overview__about__item">Xanh</p>
          <p className="overview__about__item">Đỏ</p>
          <p className="overview__about__item">Vàng</p>
        </div>
      </div>
      <div className="overview__about__reset">Reset</div>
    </div>
  );
};

export default OverviewAbout;
