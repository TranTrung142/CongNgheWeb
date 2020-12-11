import { Card, CardContent, makeStyles, Typography } from "@material-ui/core";
import { Col, Row } from "antd";
import React from "react";
import { useParams } from "react-router-dom";
import BillDetailCustomer from "./BillDetailCostomer";
import BillDetailProducts from "./BillDetailProducts";

const useStyles = makeStyles((theme) => ({
    
    cardTT: {
      marginTop: theme.spacing(1),
    },
  }));
function BillDetail(props) {
    const id = useParams().id;
    const classes = useStyles();
    
    const data = {
        code: "BI00001",
        totalProduct: 10,
        totalPrice: 2100000,
        // cashIn: 2500000,
        // cashOut: 400000,
        createOn: "14/02/1999",
        note: "test",
        customer: {
            code: "SE00001",
            name: "Tran Trung nn",
            gender: 1,
            birthday: "14/02/1999",
            phone: "0966865142",
            email: "trung@gmail.com",
            address: "Hà Nội",
        },
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
    }
    return (
        <div>
            <Row>
                <Col span={18}>
                    <BillDetailCustomer customer={data.customer} />
                    <BillDetailProducts products={data.products} />
                </Col>
                <Col span={6}>
                    <Card className={classes.cardTT}>
                        <CardContent>
                            <Typography
                                variant="h6"
                                component="h6"
                                align="left"
                            >
                                Information bill
                            </Typography>
                            <br />
                            <div>
                                <Row>
                                    <b>Code of bill: </b>&nbsp;{data.code} 
                                    
                                </Row>
                                <br />
                                <Row>
                                    <b>Note:</b>&nbsp; {data.note }
                                    
                                </Row>
                                <br />
                                <Row>
                                    <b>Create date:</b>&nbsp; {data.createOn}
                                    
                                </Row>
                                <br />
                            </div>
                        </CardContent>
                    </Card>
                </Col>
            </Row>
        </div>
    );
}

export default BillDetail;
