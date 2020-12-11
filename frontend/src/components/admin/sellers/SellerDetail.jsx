import { Col, Row } from "antd";
import React from "react";
import SellerDetailInfo from "./SellerDetailInfo";
import SellerDetailProducts from "./SellerDetailProducts";

const seller = {
    id: "",
    code: "SE00001",
    name: "Tran Trung nn",
    // gender: 1,
    // birthday: "14/02/1999",
    phone: "0966865142",
    email: "trung@gmail.com",
    address: "Hà Nội",
    products: [
        {
            id: "1",
            code: "PD00001",
            name: "Quần ",
            quantity: 10,
            price: 1000000,
            discount: 10,
        },
        {
            id: "2",
            code: "PD00002",
            name: "Quần ",
            quantity: 20,
            price: 1000000,
            discount: 10,
        },
    ]
};

function SellerDetail(props) {
    
    return (
        <div>
            <Row>
                <SellerDetailInfo seller={seller} />
            </Row>
            <Row>
                <SellerDetailProducts seller={seller} />
            </Row>
        </div>
    );
}

export default SellerDetail;
