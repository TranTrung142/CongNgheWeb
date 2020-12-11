import { Card, Col } from "antd";
import React from "react";
import { useHistory } from "react-router-dom";
import "./Home.css";

function Product(props) {
    const history = useHistory();
    const {product, key} = props;
    return (
        <Col span={4} flex="center" className="col-antd">
            <Card
                hoverable
                style={{ width: 190, height: 280 }}
                onClick={(event)=>{
                    console.log(product);
                    history.push(`/user/product/${product.id}`);
                }}
                cover={
                    <div className="box">
                        <img
                            className="img-content"
                            src={product.img}
                            alt=""
                            srcset=""
                        />
                        <div className="sale">
                            <div className="sale-content">
                                <span className="content">Yêu thích</span>
                            </div>
                        </div>
                        <div class="_2N1Tif">
                            <div class="shopee-badge shopee-badge--fixed-width shopee-badge--promotion">
                                <div class="shopee-badge--promotion__label-wrapper shopee-badge--promotion__label-wrapper--vi">
                                    <span class="percent">{product.discount}% </span>
                                    <span class="shopee-badge--promotion__label-wrapper__off-label shopee-badge--promotion__label-wrapper__off-label--vi">
                                        giảm
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                }
            >
                <div class="_3eufr2">
                    <div class="O6wiAW">
                        <div class="_1NoI8_ _16BAGk">
                            {product.name}
                        </div>
                    </div>
                    <div class="nJq7PD _2lBkmX">
                        <div class="_1w9jLI _3_udCI">
                            <span class="_3fVV-h">₫</span>
                            <span class="SlvYAy">{product.price} </span>
                        </div>
                        <div class="_18SLBt _2SLPtW">Còn hàng</div>
                    </div>
                </div>

                <div class="shopee-item-card__hover-footer">
                    Tìm sản phẩm tương tự
                </div>
            </Card>
        </Col>
    );
}

export default Product;
