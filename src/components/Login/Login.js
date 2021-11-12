import React from "react";
import AuthForm from "../AuthForm/AuthForm";

function Login(props) {
  return(
    <>
      <AuthForm onLogin={props.onLogin} onError={props.onError}/>
    </>
  )
}

export default Login;
