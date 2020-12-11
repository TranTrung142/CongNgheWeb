import React from 'react';
import "./Footer.css";
const img = `${process.env.PUBLIC_URL}/image/thanhtoan.png`;

function Footer(props) {
    return (
        <div className="footer">
            <div className="container-fluid text-left padding">
            <div className="row">
                <div className="col-sm-6 col-md-3">
                    <h5 className="title">giúp đỡ</h5>
                    <a href="#">Hướng dẫn mua hàng</a><br/>
                    <hr className="light kengang"/>
                    <a href="#">Hướng dẫn thanh toán</a><br/>
                    <hr className="light kengang"/>
                    <a href="#">Phương thức vận chuyển</a><br/>
                    <hr className="light kengang "/>
                    <a className="float-left my-0" href="#">Câu hỏi thường gặp</a>
                    <hr className="light kengang"/>
                </div>
                <div className="col-sm-6 col-md-3">
                    <h5 className="title">CHÍNH SÁCH</h5>
                    <a href="#">Chính sách đổi trả</a><br/>
                    <hr className="light kengang"/>
                    <a href="#">Chính sách bảo mật</a><br/>
                    <hr className="light kengang"/>
                    <a className="float-left my-0" href="#">Điều khoản dịch vụ</a><br/>
                    <hr className="light kengang"/>
                    <a className="float-left my-0" href="#">Quy định sử dụng</a>
                    <hr className="light kengang"/>
                </div>
                <div className="col-sm-6 col-md-3">
                    <h5 className="title">Tài khoản</h5>
                    <a href="#">Đăng nhập</a><br/>
                    <hr className="light kengang"/>
                    <a className="float-left my-0" href="#">Đăng kí</a><br/>
                    <hr className="light kengang"/>
                    <a className="float-left my-0" href="#">Thông tin tài khoản</a><br/>
                    <hr className="light kengang"/>
                    <a className="float-left my-0" href="#">Kiểm tra giỏ hàng</a>
                    <hr className="light kengang"/>
                </div>
                <div className="col-sm-6 col-md-3">
                    <h5 className="title">Liên hệ</h5>
                    <p><img className="img-fluid" width="20px" src="./image/home/icon/pin.png" alt=""/>  Tầng 3 B7 kí túc xá Bách Khoa Hà Nội</p><br/>
                    <p><img className="img-fluid" width="20px" src="./image/home/icon/phone.png" alt=""/> 0966865142 Thứ 2 - Chủ nhật: 8:00 - 18:00
                    </p>
                    <a href="#" style={{color: "aqua;"}}>&nbsp; website</a>
                </div>
            </div>
        </div>
        <div className="container-fluid end">
            <div className="row" style={{padding: 0}}>
                <div className="col-12 col-sm-12 col-md-6 text-center text-end">
                    <p>© Bản quyền thuộc về
                        <span>Bookshop Theme</span>. Phát triển bởi
                        <span>Bizweb</span>
                    </p>
                </div>
                <div className="col-12 col-sm-12 col-md-6 " style={{display: 'flex', alignItems: 'end', justifyContent: 'flex-end'}}>
                    <img src={img} alt=""/>
                </div>
            </div>

        </div>
        </div>
    );
}

export default Footer;