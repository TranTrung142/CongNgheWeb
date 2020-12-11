import { Avatar, Col, Row } from "antd";
import React from "react";
import { categories } from "./Data";
import "./Categories.css";

function Categories(props) {
    return (
        <div>
            <h2>Categories</h2>
            <div className="list-category">
                <Row>
                    {categories.map((category, index) => {
                        return (
                            <Col span={2}>
                                <div className="category">
                                    <div className="img-category">
                                        <Avatar size={60} src={category.img} />
                                    </div>
                                    <div className="title-category">
                                        {category.title}{" "}
                                    </div>
                                </div>
                            </Col>
                        );
                    })}
                </Row>
            </div>
        </div>
    );
}

export default Categories;
