import { Badge, IconButton } from "@material-ui/core";
import { Col, InputNumber, Row } from "antd";
import React, { useEffect } from "react";
import { useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { currencyFormat } from "utils/NumberFormat";

function CartItem(props) {
    const { product, updateProduct } = props;
    const [quantity, setQuantity] = useState(product.quantity);
    useEffect(()=>{
    },[quantity]);
    const priceItem = (price, quatity, discount) => {
        return price * quatity * (1 - discount / 100);
    };
    return (
        <div className="cart-item">
            <Row className="detail-item">
                <Col span={2}>
                    <div className="img">
                        <img
                            className="img-detail"
                            src={product.img}
                            alt=""
                            srcset=""
                        />
                    </div>
                </Col>
                <Col span={4}>{product.name} </Col>
                <Col span={4}>
                    <div className="discount">{product.discount}%</div>
                </Col>
                <Col span={4}>{currencyFormat(product.price)} </Col>
                <Col span={4}>
                    <div>
                        <InputNumber
                            size="large"
                            min={1}
                            max={100000}
                            defaultValue={product.quantity}
                            onChange={(value) => {
                                console.log("va ", value);
                                setQuantity(value);
                                updateProduct(product.id,value)
                            }}
                        />
                    </div>{" "}
                </Col>
                <Col span={4}>
                    {currencyFormat(
                        priceItem(product.price, quantity, product.discount)
                    )}
                </Col>
                <Col>
                    <IconButton
                        aria-label="show 4 new mails"
                        color="inherit"
                        onClick={(event) => {}}
                    >
                        <AiOutlineDelete />
                    </IconButton>
                </Col>
            </Row>
        </div>
    );
}

export default CartItem;
