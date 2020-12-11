import { Card, Container } from "@material-ui/core";
import React from "react";
import { useParams } from "react-router-dom";
import "./ProductDetail.css";
import { MdAddShoppingCart } from "react-icons/md";
import { AiOutlineShop } from "react-icons/ai";
import { Button, Col, InputNumber, Row } from "antd";
import { currencyFormat } from "utils/NumberFormat";

const product = {
    id: "1",
    name: "Ao nam",
    img:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR5wV-hb1HVpDFxiauwakIwb1S3InjIIS2ZhQ&usqp=CAU",
    price: 1000000,
    discount: 50,
    description: "Definitely annoying though. A simple check for Xcode installation and then an update during the OS update would be pretty simple to add. It's always something with these OS updates from Apple. You'd think they'd have figured it out by now",
    quantity: 100,
};
const seller = {
    code: "SE00001",
    name: "Tran Trung nn",
    gender: 1,
    birthday: "14/02/1999",
    phone: "0966865142",
    email: "trung@gmail.com",
    address: "Hà Nội",
};
const newPrice = (price, discount) => {
    return price * (1 - discount / 100);
};
function ProductDetail(props) {
    const id = useParams().id;
    const onChange = (value) => {
        console.log("value ", value);
    };
    return (
        <Container style={{ marginTop: 10 }}>
            <div className="product">
                <div className="img-product">
                    <img
                        className="img-detail"
                        src={product.img}
                        alt=""
                        srcset=""
                    />
                </div>
                <div className="info-product">
                    <div className="name">{product.name}</div>
                    <div className="stocking">Còn hàng</div>
                    <div className="price">
                        <div className="old-price">
                            {currencyFormat(product.price)}
                        </div>
                        <div className="new-price">
                            {currencyFormat(
                                newPrice(product.price, product.discount)
                            )}
                        </div>
                        <div className="discount">
                            giảm giá {product.discount}%
                        </div>
                    </div>
                    <div className="quatity-product">
                        <span style={{ marginRight: 20 }}>Số lượng</span>
                        <InputNumber
                            size="large"
                            min={1}
                            max={100000}
                            defaultValue={1}
                            onChange={onChange}
                        />
                        <span style={{ color: "#757575", marginLeft: 30 }}>
                            {product.quantity} sản phẩm đang có sẵn{" "}
                        </span>
                    </div>
                    <div className="btn-add">
                        <Button
                            icon={<MdAddShoppingCart />}
                            style={{ marginTop: 50 }}
                        >
                            Thêm vào giỏ hàng
                        </Button>
                    </div>
                </div>
            </div>

            <div className="seller">
                <Row>
                    <Col span={8}>
                        <div className="name"><b>Chủ cửa hàng: </b>{seller.name} </div>
                        <div className="btn-view">
                            <Button
                                icon={<AiOutlineShop />}
                                style={{ marginTop: 10 }}
                            >
                                Xem them
                            </Button>
                        </div>
                    </Col>
                    <Col span={8}>
                        <div><b>Số điện thoại: </b>{seller.phone} </div>
                        <div><b>Email: </b>{seller.email} </div>
                    </Col>
                    <Col span={8}>
                        <div><b>Địa chỉ: </b>{seller.address} </div>
                    </Col>
                </Row>
            </div>

            <div className="description">
                <div><b>Mo ta chi tiet</b></div>
                <div>
                    {product.description}
                </div>
            </div>
        </Container>
    );
}

export default ProductDetail;
