import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

function Header(props) {
  return (
    <div className="header">
      <div className="header-container">
        <div className="header-logo">
          <img
            src="https://b1907097.github.io/N1_KC326/Trangchu_files/0305-logo-ctu.png"
            alt=""
          />
        </div>
        <div className="header-content">
          <ul className="header-ul">
            <NavLink to="/">Trang chủ</NavLink>
            <NavLink to="/members">Thành viên</NavLink>
            <NavLink to="/Product">Sản phẩm</NavLink>
            <NavLink to="/Chart">Thống kê</NavLink>
            <NavLink to="#">
              <div class="dropdown">
                <span>Thông tin thêm</span>
                <div class="dropdown-content">
                  <p>
                    Địa chỉ: P1-03, Vincom Center Cần Thơ, Số 209, Đường 30
                    Tháng 4, Ninh Kiều, Cần Thơ
                  </p>
                  <a href="mailto:tuyenb1905869@student.ctu.edu.vn">
                    Liên hệ: tuyenb1905869@student.ctu.edu.vn
                  </a>
                  <p href="tel:0334984976">Số điện thoại: 0334984976</p>
                </div>
              </div>
            </NavLink>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
