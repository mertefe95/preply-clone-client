import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Form, Row } from 'react-bootstrap';
import { Input } from "@material-ui/core";

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
    
    <span className="or-span">or</span>

    <div className="bottom-form">

    <Form.Group className="form-group">
      <Form.Label className="form-label" htmlFor="email-input"> Email </Form.Label>
      <Form.Control className="form-input" type="email" id="email-input" name="email-input" />
    </Form.Group>

    <Form.Group className="form-group">
      <Form.Label className="form-label" htmlFor="password-input"> Password </Form.Label>
      <Form.Control className="form-input" id="password-input" name="password-input" type="password" style={{ border: "none" }} /> 
      <Form.Text><Link className="formspan-link"><p className="form-span-p">Forgot Password?</p></Link></Form.Text>
    </Form.Group>

    
    <span className="checkbox-span">
      
      <input type="checkbox" label="Remember me" id="checkbox" />
      <label htmlFor="checkbox">Remember me</label>
    </span>
    <button className="btn btn-success">
    Log in
    </button>

    <Button className="mt-3" style={{ backgroundColor: "rgb(80, 187, 196)", borderColor: "rgb(80, 187, 196)" }} size="lg">
asd
    </Button>
    </div>

</Form>

</div>
)
}

export default Login;