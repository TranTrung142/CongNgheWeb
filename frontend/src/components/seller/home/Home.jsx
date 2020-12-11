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

const imgHome = `${process.env.PUBLIC_URL}image/all-shop.jpg`;
const benefit = `${process.env.PUBLIC_URL}image/benefit.jpg`;

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
          <Row style={{marginBottom: "15px"}}>
            <CardAntd
              hoverable
            //   style={{ width: "540px", height: "312px", marginBottom: "15px" }}
            >
              <Typography gutterBottom variant="h5" component="p">
                Hello user
              </Typography>
            </CardAntd>
          </Row>

          <Row>
            <CardAntd
              hoverable
              style={{ height: "380px"}}
            >
              <Typography gutterBottom variant="h5" component="p">
                Benefits of website for seller
              </Typography>
              <Typography gutterBottom variant="body1" component="p">
                &emsp; - Lower Set Up and Running Costs Than An Offline Businesses
              </Typography>
              <Typography gutterBottom variant="body1" component="p">
                &emsp; - The Business Can Be Operated From Anywhere
              </Typography>
              <Typography gutterBottom variant="body1" component="p">
                &emsp; - Scale-ability
              </Typography>
              <Typography gutterBottom variant="body1" component="p">
                &emsp; - No opening Time Restrictions
              </Typography>
              <Typography gutterBottom variant="body1" component="p">
                &emsp; - More Measurable Than Other Sales Approaches
              </Typography>
              <Typography gutterBottom variant="body1" component="p">
                &emsp; - Less Time Intensive
              </Typography>
              <Typography gutterBottom variant="body1" component="p">
                &emsp; - Higher Margins and Better Cashflow
              </Typography>
              
            </CardAntd>
          </Row>
        </Col>

        <Col span={12}>
          <Row>
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Image smart home"
                  height="300"
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
                    Smart Home
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Row>

          <Row>
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Image smart home"
                  height="306"
                  image={benefit}
                  title="Modeling of smart home"
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="h2"
                    align="center"
                  >
                    benefit for seller
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default Home;
