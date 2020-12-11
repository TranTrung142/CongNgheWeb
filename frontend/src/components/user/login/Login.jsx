import React from "react";
// import "antd/dist/antd.css";
import "./Login.css";
import { Form, Input, Button, Checkbox, Row, Col } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import UserData from 'database/user.js';
import { setCookie } from "utils/Cookie";
import { Redirect, useHistory } from "react-router-dom";
// import { Redirect, useHistory } from "react-router";
const Background = `${process.env.PUBLIC_URL}/image/backgroundLogin.jpg`;
const ImgLogin = `${process.env.PUBLIC_URL}/image/fast-food.jpg`;

function UserLogin(props) {
    const history = useHistory();

    const rd=()=>{
        return Math.floor((1+Math.random()) * 0x10000).toString(16).substring(1);
      }
    const generate=()=>{
        return rd() + rd() + '-' + rd() + '-' + rd() + rd() +'-' + rd();
    }

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
    const {username, password} = values;
    
    UserData.map((user, index)=>{
      console.log('user', user)
        if(user.username === username){
            if(user.password === password){
              // console.log('user', user)
                localStorage.setItem("token", generate());
                localStorage.setItem("userId", user.id);
                history.push('/user');
                // <Redirect to={{ pathname: "/", state: { from: history.location } }} />
                // <Redirect to="/somewhere/else" />
                // setCookie('token', generate(), 2);
            }
        }
    });
  };
  return (
    <div style={{backgroundImage: `url(${Background})`, 
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            height: '714px'
        }}
    >
      <Row >
        <Col span={12} style={{"marginTop": "100px", marginLeft: '20px'}}>
            <img 
                src={ImgLogin}
                alt=""
                style={{"width": "80%", 'height': '80%', borderRadius: '50%',opacity: '0.8'}} 
            />
        </Col>
        <Col span={2} ></Col>
        <Col span={8} style={{"marginTop": "100px", display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor:'rgba(255, 255, 255, 0.8)', borderRadius:'10%' }}>
          <Form
            name="normal_login"
            className="login-form"
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            style={{minWidth:'300px'}}
          >
            <Form.Item
              name="username"
              rules={[
                {
                  required: true,
                  message: "Please input your Username!",
                },
              ]}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Username"
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your Password!",
                },
              ]}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
              />
            </Form.Item>
            <Form.Item>
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>Remember me</Checkbox>
              </Form.Item>
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
              >
                Log in
              </Button>
              Or <a href="">register now!</a>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </div>
  );
}

export default UserLogin;
