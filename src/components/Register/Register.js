import React from "react";
import AuthForm from "../AuthForm/AuthForm";
import Preloader from "../Movies/Preloader/Preloader";

function Register(props) {
  return (
    props.isLoading ? <Preloader/> : <AuthForm onRegister={props.onRegister} onError={props.onError}/>
  )
}

export default Register;
