import React from "react";
import AuthForm from "../AuthForm/AuthForm";

function Register(props) {
  return(
    <>
      <AuthForm onRegister={props.onRegister} onError={props.onError}/>
    </>
  )
}

export default Register;
