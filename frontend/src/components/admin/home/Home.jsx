import { Col, Row } from "antd";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import "./Home.css";

import { Card as CardAntd } from "antd";

const imgHome = `${process.env.PUBLIC_URL}image/bieu-do-doanh-so.png`;
const amount = `${process.env.PUBLIC_URL}image/store-cafe.jpg`;
const customer = `${process.env.PUBLIC_URL}image/customer.jpg`;
const shipper = `${process.env.PUBLIC_URL}image/shipper.jpg`;
const imgModelHome = `${process.env.PUBLIC_URL}image/model_home.jpg`;

const { Meta } = CardAntd;

const useStyles = makeStyles({
    root: {
        maxWidth: 540,
        marginBottom: 15,
    },
});

function Home(props) {
    const classes = useStyles();
    return (
        <div className="home">
            <Row>
                <Col span={12}>
                    <Card className={classes.root}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                alt="Image smart home"
                                height="240"
                                image={imgHome}
                                title="Image smart home"
                            />
                            <CardContent>
                                <Typography
                                    gutterBottom
                                    variant="h5"
                                    component="h2"
                                    align="center"
                                >
                                    Thống kê doanh số bán hàng
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Col>
                <Col span={12}>
                    <Card className={classes.root}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                alt="Image smart home"
                                height="240"
                                image={amount}
                                title="Image smart home"
                            />
                            <CardContent>
                                <Typography
                                    gutterBottom
                                    variant="h5"
                                    component="h2"
                                    align="center"
                                >
                                    Số lượng nhà bán hàng
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Col>
                <Col span={12}>
                    <Card className={classes.root}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                alt="Image smart home"
                                height="240"
                                image={customer}
                                title="Image smart home"
                            />
                            <CardContent>
                                <Typography
                                    gutterBottom
                                    variant="h5"
                                    component="h2"
                                    align="center"
                                >
                                    Số lượng người mua
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Col>
                <Col span={12}>
                    <Card className={classes.root}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                alt="Image smart home"
                                height="240"
                                image={shipper}
                                title="Image smart home"
                            />
                            <CardContent>
                                <Typography
                                    gutterBottom
                                    variant="h5"
                                    component="h2"
                                    align="center"
                                >
                                    Giao hàng
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Col>
            </Row>
        </div>
    );
}

export default Home;
