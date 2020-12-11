import {  Container } from "@material-ui/core";
import { Button, Col, InputNumber, Row } from "antd";
import MaterialTable from "material-table";
import React from "react";
import { useHistory } from "react-router-dom";
import { tableIcons } from "utils/IconUtil";
import CartItem from "./CartItem";
import "./Cart.css";
import { currencyFormat } from "utils/NumberFormat";
import { useState } from "react";
import { useEffect } from "react";
import { MdAddShoppingCart } from "react-icons/md";

let products = [
    {
        id: "1",
        name: "Ao nam",
        img:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR5wV-hb1HVpDFxiauwakIwb1S3InjIIS2ZhQ&usqp=CAU",
        price: 1000000,
        discount: 50,
        description:
            "Definitely annoying though. A simple check for Xcode installation and then an update during the OS update would be pretty simple to add. It's always something with these OS updates from Apple. You'd think they'd have figured it out by now",
        quantity: 10,
    },
    {
        id: "2",
        name: "Ao nu",
        img:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR5wV-hb1HVpDFxiauwakIwb1S3InjIIS2ZhQ&usqp=CAU",
        price: 2000000,
        discount: 20,
        description:
            "Definitely annoying though. A simple check for Xcode installation and then an update during the OS update would be pretty simple to add. It's always something with these OS updates from Apple. You'd think they'd have figured it out by now",
        quantity: 5,
    },
];

function Cart(props) {
    const history = useHistory();
    const [listProduct, setListProduct] = useState(products);
    const [totalPrice , setTotalPrice] = useState(0);
    useEffect(()=>{
        setTotalPrice(showTotalPrice());
    }, []);
    const updateProduct = (id, quantity)=>{
        console.log('pay ', id, ' ,quan ', quantity);
        let index = findIndex(id);
        listProduct[index].quantity = quantity ;
        setTotalPrice(showTotalPrice());
    }
    const showTotalPrice = ()=>{
        let total = 0;
        listProduct.map(item=>{
            total = total + (item.price * item.quantity * (1 - item.discount/100));
        })
        return total;
    }
    
    const findIndex = (id)=>{
        let index = -1;
        listProduct.map((item, i)=>{
            if(item.id === id){
                index = i;
            }
        });
        return index;
    }
    return (
        <Container>
            <div className="cart">
                <h2>Giỏ hàng</h2>
                <div className="cart-item">
                    <Row className="detail-item">
                        <Col span={2}>Sản phẩm</Col>
                        <Col span={4}> </Col>
                        <Col span={4}>Khuyến mãi</Col>
                        <Col span={4}>Giá </Col>
                        <Col span={4}>
                            <div>Số lượng</div>{" "}
                        </Col>
                        <Col span={4}>Số tiền</Col>
                    </Row>
                </div>
                {products.map((product, index) => {
                    return <CartItem key={index} product={product} updateProduct={updateProduct} />;
                })}
                <div className="pay">
                    <h4>Thanh toán</h4>
                    <Row>
                        <Col className="tth">
                            <div  >Tổng tiền hàng ({products.length} loại hàng):  </div >
                        </Col>
                        <Col span={4}>
                            <div className="total-price">{currencyFormat(totalPrice)}</div >
                        </Col>
                        <Col>
                            <div className="btnPayment">
                            <Button
                                icon={<MdAddShoppingCart />}
                                style={{width: 200, marginLeft: 600 }}
                            >
                                Đặt hàng
                            </Button>
                            </div>
                        </Col>
                    </Row>

                    
                </div>
            </div>
        </Container>
    );
}

export default Cart;
