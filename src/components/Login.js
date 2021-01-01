import React, { useState } from "react";
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
    
  <form className="login-form">
    <div className="upper-login">
      <h4 className="login-text">Log in</h4>
      <p className="login-span-text"><Link className="formspan-link"><span className="login-span">Sign up as student</span></Link> or <Link><span className="login-span">Sign up as a tutor</span></Link></p>
    </div>

    <hr/>

  
    <p>
      {name}
      {email}
      <img src={url} />
      
      <button href="#">
      <GoogleLogin 
      id="google-login"
      clientId="310321453603-1r1qcqu8rjapksnacnuu3j8u09q4fch2.apps.googleusercontent.com"
      buttonText=""
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
      cookiePolicy={'single_host_origin'}
      /></button>
    </p>

    <span className="or-span">or</span>

    <div className="bottom-form">
    <div className="form-group">
    <label className="form-label" row sm="2" lg="8">
      Email
    </label>
      <input className="form-input" type="email" placeholder="Email"/>
    </div>
  <span className="formspan">
    <label className="form-label" row sm="3" lg="8">
      Password
    </label>
      <input className="form-input" type="password" placeholder="Password" />
  <Link className="formspan-link"><p className="form-span-p">Forgot Password?</p></Link>
  </span>
    <input type="checkbox" label="Remember me" />
  </div>


  <button variant="info" size="lg">Info</button>
</form>

</div>
)
}

export default Login;