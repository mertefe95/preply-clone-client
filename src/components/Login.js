import React, { useState } from "react";
import { Form, Col, Row, Button } from "react-bootstrap"
import GoogleLogin from 'react-google-login';
import { Link } from "react-router-dom";
const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [url, setUrl] = useState("");

  const responseGoogle = (response) => {
    setName(response.profileObj.name);
    setEmail(response.profileObj.email);
    setUrl(response.profileObj.imageUrl);
  }


  return (
    <div className="login-form-div">
    
  <Form className="login-form">
    <div className="upper-login">
      <h4 className="login-text">Log in</h4>
      <p className="login-span-text"><Link className="formspan-link"><span className="login-span">Sign up as student</span></Link> or <Link><span className="login-span">Sign up as a tutor</span></Link></p>
    </div>

    <hr/>

  
    <p>
      {name}
      {email}
      <img src={url} />
      
      
      <Button href="#">
      <GoogleLogin 
      id="google-login"
      clientId="310321453603-1r1qcqu8rjapksnacnuu3j8u09q4fch2.apps.googleusercontent.com"
      buttonText=""
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
      cookiePolicy={'single_host_origin'}
      /></Button>

    </p>

    <span className="or-span">or</span>

    <div className="bottom-form">
    <Form.Group as={Row} controlId="formPlaintextEmail">
    <Form.Label className="form-label" column sm="3">
      Email
    </Form.Label>
    <Col sm="5">
      <Form.Control className="form-input" type="email" placeholder="Email"/>
    </Col>
    
  </Form.Group>

  <span className="formspan">
  <Form.Group as={Row} controlId="formPlaintextPassword">
    <Form.Label className="form-label" column sm="3">
      Password
    </Form.Label>
    <Col sm="5">
      <Form.Control className="form-input" type="password" placeholder="Password" />
    </Col>
  </Form.Group>
  <Link className="formspan-link"><p className="form-span-p">Forgot Password?</p></Link>
  </span>
  <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Remember me" />
  </Form.Group>
  </div>
</Form>

</div>
)
}

export default Login;