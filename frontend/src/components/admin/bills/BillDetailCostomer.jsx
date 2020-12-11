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
        minWidth: 500,
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

function BillDetailCustomer(props) {
    
    const classes = useStyles();
    const {customer} = props;
    

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
                    Customer
                </div>
            </Typography>
            <CardContent>
                <form noValidate autoComplete="off">
                    <div>
                        <Row>
                            <Col span={6}>
                                <b> Code</b>
                            </Col>
                            <Col span={18}>: {customer.code}</Col>
                        </Row>
                        <br />
                        <Row>
                            <Col span={6}>
                                <b> Name</b>
                            </Col>
                            <Col span={18}>: {customer.name}</Col>
                        </Row>
                        <br />
                        <Row>
                            <Col span={6}>
                                <b> Gender</b>
                            </Col>
                            <Col span={18}>: {customer.gender === 1 ? "Male" : "Female"}</Col>
                        </Row>
                        <br />
                        <Row>
                            <Col span={6}>
                                <b> Birthday</b>
                            </Col>
                            <Col span={18}>: {customer.birthday}</Col>
                        </Row>
                        <br />
                        <Row>
                            <Col span={6}>
                                <b> Phone number</b>
                            </Col>
                            <Col span={18}>: {customer.phone}</Col>
                        </Row>
                        <br />
                        <Row>
                            <Col span={6}>
                                <b>Email</b>
                            </Col>
                            <Col span={18}>: {customer.email}</Col>
                        </Row>
                        <br />
                        <Row>
                            <Col span={6}>
                                <b>Address</b>
                            </Col>
                            <Col span={18}>: {customer.address}</Col>
                        </Row>
                        <br />
                    </div>
                </form>
            </CardContent>
        </Card>
    );
}

export default BillDetailCustomer;
