import { Container, Fab } from "@material-ui/core";
import { Avatar, Col, Image, Row } from "antd";
import React from "react";
import "./Home.css";
import { Card } from "antd";
import Categories from "./Categories";
import Product from "./Product";
import { products } from "./Data";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";


const { Meta } = Card;

function Home(props) {
    return (
        <div className="home-user">
            <Container>
                <Categories />
                <hr />
                

                <div className="products">
                    <div className="title">
                        <h2>Quần áo nam <hr style={{margin: 0}} /><hr style={{margin: 0}}/></h2>
                    </div>
                    <Row>
                        {products.map((product, index) => {
                            return <Product key={index} product={product} />;
                        })}
                        <div className="more" style={{color: 'rgb(36 60 245)', zIndex:'1000'}}>
                        <Fab
                            color="secondary"
                            size="small"
                            aria-label="scroll back to top"
                        >
                            <KeyboardArrowUpIcon />
                        </Fab>
                        </div>
                    </Row>
                </div>
                <div className="products">
                    <div className="title">
                        <h2>Quần áo nu<hr style={{margin: 0}} /><hr style={{margin: 0}} /></h2>
                    </div>
                    <Row>
                        {products.map((product, index) => {
                            return <Product key={index} product={product} />;
                        })}
                    </Row>
                </div>
                <div className="products">
                    <div className="title">
                        <h2>Laptop<hr style={{margin: 0}} /><hr style={{margin: 0}} /></h2>
                    </div>
                    <Row>
                        {products.map((product, index) => {
                            return <Product key={index} product={product} />;
                        })}
                    </Row>
                </div>
            </Container>
        </div>
    );
}

export default Home;
