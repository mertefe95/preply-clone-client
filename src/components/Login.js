import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [url, setUrl] = useState("");

  const responseGoogle = (response) => {
    setName(response.profileObj.name);
    setEmail(response.profileObj.email);
    setUrl(response.profileObj.imageUrl);
  }

  const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1)
      },
    },
    buttonStyles: {
      fontFamily: 'Roboto',
      fontUppercase: false,
      fontSize: "16px",
      fontWeight: "500",
      border: "none",
      padding: "15px",
      borderRadius: "2px",
      cursor: "pointer",
      color: "#fff",
      backgroundColor: "rgb(80, 187, 196)"
    }
  }));

  const classes = useStyles();



  return (
    <div className="login-form-div">
    
  <form className="login-form">
    <div className="upper-login">
      <h4 className="login-text">Log in</h4>
      <p className="login-span-text"><Link className="formspan-link"><span className="login-span">Sign up as student</span></Link> or <Link><span className="login-span">Sign up as a tutor</span></Link></p>
    </div>

    <hr/>
    
    <span className="or-span">or</span>

    <div className="bottom-form">

    <div className="form-group email-div">
      <label className="form-label" htmlFor="email-input"> Email </label>
      <input className="form-input" type="email" id="email-input" name="email-input" />
    </div>

    <div className="form-group password-div">
      <label className="form-label" htmlFor="password-input"> Password </label>
      <input className="form-input" id="password-input" name="password-input" type="password" style={{ border: "none" }} /> 
      <span><Link className="formspan-link"><p className="form-span-p">Forgot Password?</p></Link></span>
    </div>

    
    <span className="checkbox-span">
      <input type="checkbox" label="Remember me" id="checkbox" />
      <label htmlFor="checkbox">Remember me</label>
    </span>


    <Button variant="contained" className={classes.buttonStyles}>
    Log in
    </Button>
    </div>

</form>

</div>
)
}

export default Login;