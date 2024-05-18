import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {Navigate, useNavigate } from "react-router-dom";
import CheckButton from "react-validation/build/button";
import Input from "react-validation/build/input";
import Form from "react-validation/build/form";
import { isEmail } from "validator";

import {login} from "../actions/auth";

const required = (value) => {
    if(!value)
    {
        return (
        <div role="alert">
            This Value is required
        </div>
        );
    }
}

const Login = (props) =>{

    let navigate = useNavigate();

    const form = useRef();
    const checkBtn = useRef();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const {message} = useSelector(state => state.message);
    const {isLoggedIn} = useSelector(state => state.auth);

    const dispatch = useDispatch();

    const usernameChangeHandler = (event) => {
        event.preventDefault();
        setUsername(event.target.value);
    }

    const passwordChangeHandler = (event) => {
        event.preventDefault();
        setPassword(event.target.value);
    }

    const handleLogin = (event) => {
        event.preventDefault();
        setLoading(true);
        // form.current.validateAll();

        if(checkBtn.current.context_errors.length() === 0)
        {
            dispatch(login(username,password)).then(()=>{
                navigate("/admin");
                window.location.reload();
            }).catch(()=> {
                setLoading(false);
            })
        }
        else{
            setLoading(false);
        }
    }

    if(isLoggedIn)
    {
        return <Navigate to="/admin"/>;
    }



    return (
        <div className="col-md-12">
          <div className="card card-container">
            <img
              src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
              alt="profile-img"
              className="profile-img-card"
            />
    
            <Form onSubmit={handleLogin} ref={form}>
              <div className="form-group">
                <label htmlFor="username">Username</label>
                <Input
                  type="text"
                  className="form-control"
                  name="username"
                  value={username}
                  onChange={usernameChangeHandler}
                  validations={[required]}
                />
              </div>
    
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <Input
                  type="password"
                  className="form-control"
                  name="password"
                  value={password}
                  onChange={passwordChangeHandler}
                  validations={[required]}
                />
              </div>
    
              <div className="form-group">
                <button className="btn btn-primary btn-block" disabled={loading}>
                  {loading && (
                    <span className="spinner-border spinner-border-sm"></span>
                  )}
                  <span>Login</span>
                </button>
              </div>
    
              {message && (
                <div className="form-group">
                  <div className="alert alert-danger" role="alert">
                    {message}
                  </div>
                </div>
              )}
              <CheckButton style={{ display: "none" }} ref={checkBtn} />
            </Form>
          </div>
        </div>
      );
    };

export default Login;