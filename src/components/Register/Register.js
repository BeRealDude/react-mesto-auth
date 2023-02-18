import ModalWindows from "../ModalWindows/ModalWindows";
import React, { useState } from "react";


function Register(props) {
 
    const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  function handleChangeEmail(e) {
    console.log("email");
    setEmail(e.target.value);
  }

  function handleChangePassword(e) {
    console.log("pass");
    setPassword(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("submit");
    
    props.onRegister({
        email: email,
        password: password
    })
    
  }

  return (
    <ModalWindows
      data={{
        classSelector: "register-modal",
        title: "Регистрация",
        user: "userRegister",
        submit: "Зарегистрироваться",
      }}
      onSubmit={handleSubmit}
    >
      <input
        value={email || ""}
        onChange={handleChangeEmail}
        autoComplete="on"
        required
        minLength="2"
        maxLength="40"
        className="modal__text"
        type="email"
        name="email"
        id="email"
        placeholder="Email"
      />
      <span className="form__error user-name-error" id="user-name-error">
        {props.message}
      </span>

      <input
        value={password || ""}
        onChange={handleChangePassword}
        autoComplete="current-password"
        required
        minLength="2"
        maxLength="40"
        className="modal__text"
        type="password"
        name="password"
        id="password"
        placeholder="Пароль"
      />
      <span className="form__error user-name-error" id="user-name-error">
        {props.message}
      </span>
    </ModalWindows>
  );
}

export default Register;
