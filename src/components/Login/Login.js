import React from "react";
import AuthForm from "../AuthForm/AuthForm";
import Preloader from "../Movies/Preloader/Preloader";

function Login(props) {
  return (
    props.isLoading ? <Preloader/> : <AuthForm onLogin={props.onLogin} onError={props.onError}/>
  )
}

export default Login;
