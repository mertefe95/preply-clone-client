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
      <div className="login-main">
        <div className="login-page">
          <div className="login-form">
            <div className="login-inner-first">
              <h1 className="login-h1">Log in</h1>
              <div className="h1-right">

              </div>
              <div className="h1-wrap">

              </div>
              <form method="post">
                <div className="form-table">
                  <div className="form-table-row">
                    <label className="form-title">Password</label>
                    <Link className="forgot-password" tabIndex="3">
                      <span>Forgot password?</span>
                    </Link>
                    <div className="form-password-div" data-qa-id="empty-password-error-msg">
                      <input className="form-input" tabIndex="2" type="password" autoComplete="current-password" name="password" data-qa-id="login-password-field"  value="" />
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div className="login-inner-second" style={{ height: "21px" }}>

            </div>
          </div>
        </div>
      </div>

    </div>
)
}

export default Login;