import React, { useEffect, useState } from "react";
import {
    Card,
    CardContent,
    CardHeader,
    Typography,
    Avatar,
} from "@material-ui/core";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import GroupAddIcon from "@material-ui/icons/GroupAdd";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router";
import { Col, Row } from "antd";

const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(4),
        "& .MuiTextField-root": {
            margin: theme.spacing(1),
            minWidth: 700,
            maxWidth: 1000,
            height: 1000,
        },
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 1120,
        maxWidth: 1200,
        minHeight: 350,
        maxHeight: 1000,
    },
    label: {
        textTransform: "capitalize",
        paddingRight: -300,
    },
    textField: {
        margin: theme.spacing(2),
        minWidth: 250,
    },
}));

function SellerDetailInfo(props) {
    
    const classes = useStyles();
    const {seller} = props;
    console.log("seller ", seller)
    

    return (
        <Card className={classes.formControl}>
            <Typography
                variant="h5"
                component="h6"
                align="left"
                style={{ display: "flex" }}
            >
                <Avatar
                    aria-label="recipe"
                    className={classes.avatar}
                    style={{ margin: 10 }}
                >
                    <GroupAddIcon />
                </Avatar>
                <div style={{ margin: 10, marginLeft: 0, paddingTop: 4 }}>
                    Seller
                </div>
            </Typography>
            <CardContent>
                <form noValidate autoComplete="off">
                    <div>
                        <Row>
                            <Col span={3}>
                                <b> Code</b>
                            </Col>
                            <Col span={9}>: {seller.code}</Col>
                            <Col span={3}>
                                <b> Name</b>
                            </Col>
                            <Col span={9}>: {seller.name}</Col>
                        </Row>
                        <br />
                        <Row>
                            <Col span={3}>
                                <b> Gender</b>
                            </Col>
                            <Col span={9}>: {seller.gender === 1 ? "Male" : "Female"}</Col>
                            <Col span={3}>
                                <b> Birthday</b>
                            </Col>
                            <Col span={9}>: {seller.birthday}</Col>
                        </Row>
                        <br />
                        <Row>
                            <Col span={3}>
                                <b> Phone number</b>
                            </Col>
                            <Col span={9}>: {seller.phone}</Col>
                            <Col span={3}>
                                <b>Email</b>
                            </Col>
                            <Col span={9}>: {seller.email}</Col>
                        </Row>
                        <br />
                        <Row>
                            <Col span={3}>
                                <b>Address</b>
                            </Col>
                            <Col span={9}>: {seller.address}</Col>
                        </Row>
                        <br />
                    </div>
                </form>
            </CardContent>
        </Card>
    );
}

export default SellerDetailInfo;
