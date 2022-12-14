import React, { useState } from "react"
import { useNavigate } from "react-router-dom";
import PolicyService from "../Services/PolicyService";


function Login ()
{   
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState(''); 
    const [usernameErr, setUsernameErr] = useState('');
    const [passwordErr, setPasswordErr] = useState('');
    const [usernameValid, setUsernameValid] = useState(false);
    const [passwordValid, setPasswordValid] = useState(false);
    const [formValid, setFormValid] = useState(false);
    const [errorMsg, setErrMsg] = useState('');                     // TODO: login failed message needs to be added to the html below


    function handleUserInput(e)
    {
        var name = e.target.name;
        var value = e.target.value;
        switch(name)
        {
            case 'username':
                {
                    setUsername(value);
                    break;
                }
            case 'password':
                {
                    setPassword(value);
                    break;
                }
            default: {break;}
        }
        validateField(name, value);
    }

    function validateField(name, value)
    {
        var username_valid = usernameValid;
        var password_valid = passwordValid;

        switch(name)
        {
            case 'username':
                {
                    username_valid = value.match(/^[a-zA-Z0-9.! #$%&'+/=? ^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+){1,2}$/);
                    if (!username_valid)
                    {
                        setUsernameErr(' is invalid');
                    }
                    else 
                    {
                        setUsernameErr('');
                    }
                    break;
                }
            case 'password':
                {
                    // min / max password length? has to be greater than 1 minimum currently
                    password_valid = value.length > 1;
                    if (!password_valid)
                    {
                        setPasswordErr(' is invalid');
                    }
                    else
                    {
                        setPasswordErr('');
                    }
                    break;
                }
            default: {break;}
        }
        setUsernameValid(username_valid);
        setPasswordValid(password_valid);
        validateForm();
    }

    function validateForm() 
    {
        setFormValid(usernameValid && passwordValid);
    }

    function errorClass(error, str) 
    {
        if (error.length === 0 || str.length === 0)
        {            
            return '';
        }
        return 'has-error'
        
    }

    function validClass(state)
    {
        if(!state)
        {
            return '';
        }
        return 'no-error';
    }

    function sendLogin(e)
    {
        e.preventDefault();
        PolicyService.login(username, password)
            .then((response) =>
            {
                console.log(response)
                if (response.status === 200)
                {   
                    navigate("/home")
                }
            })
            .catch((error) =>
            {
                console.log(error)
                if (error.status === 401)
                {

                }
                // login error popup?
            })
    }
    return (
        <div className="login-form-container">
            <form className="login-form" autoComplete="off">
                <div className="login-form-content">
                    <h3 className="login-form-title">SomeCorp Login</h3>
                    <div className="login-group mt-3">
                        <label>Email Address</label>
                        <input
                            name="username"
                            type="email"
                            className={`form-control mt-1 ${errorClass(usernameErr, username)} ${validClass(usernameValid)}`}
                            placeholder="Email Address"
                            value={username}
                            onChange={handleUserInput}
                            />
                    </div>
                    <div className="login-group mt-3">
                        <label>Password</label>
                        <input
                            name="password"
                            type="password"
                            className={`form-control mt-1 ${errorClass(passwordErr, password)} ${validClass(passwordValid)}`}
                            placeholder="Password"
                            value={password}
                            onChange={handleUserInput}
                            />
                    </div>
                    <div className="d-grid gap-2 mt-3">
                        <button type="submit" className="btn btn-primary" disabled={!formValid} onClick={sendLogin}>
                            Login
                        </button>
                    </div>
                </div>
            </form>            
        </div>
    )    
};

export default Login;