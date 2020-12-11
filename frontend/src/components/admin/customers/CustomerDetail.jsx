import { Row } from "antd";
import React from "react";
import CustomerDetailBill from "./CustomerDetailBill";
import CustomerDetailInfo from "./CustomerDetailInfo";

const customer = {
    code: "SE00001",
    name: "Tran Trung nn",
    gender: 1,
    birthday: "14/02/1999",
    phone: "0966865142",
    email: "trung@gmail.com",
    address: "Hà Nội",
    bills: [
        {
            code: "BI00001",
            customer: "Tran Trung",
            totalProduct: 10,
            totalPrice: 2100000,
            cashIn: 2500000,
            cashOut: 400000,
            createOn: "14/02/1999",
        },
        {
            code: "BI00002",
            customer: "Tran Trung",
            totalProduct: 10,
            totalPrice: 2100000,
            cashIn: 2500000,
            cashOut: 400000,
            createOn: "14/02/1999",
        },
        {
            code: "BI00003",
            customer: "Tran Trung",
            totalProduct: 10,
            totalPrice: 2100000,
            cashIn: 2500000,
            cashOut: 400000,
            createOn: "14/02/1999",
        },
    ]
};

function CustomerDetail(props) {
    return (<div>
        <Row>
            <CustomerDetailInfo customer={customer} />
        </Row>
        <Row>
            <CustomerDetailBill customer={customer} />
        </Row>
    </div>);
}

export default CustomerDetail;
