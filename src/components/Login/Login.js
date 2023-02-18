import ModalWindows from "../ModalWindows/ModalWindows";

function Login() {
   console.log('Login')
    return(
        <ModalWindows
      data={{
        classSelector: "login-modal",
        title: "Вход",
        user: "userLogin",
        submit: "Войти",
      }}
    //   isOpen={isOpen}
    //   onClose={onClose}
    //   onSubmit={handleSubmit}
      //isOpen={isEditProfilePopupOpen}
      //onClose={closeAllPopups}
    >
      <input
        // value={name || ""}
        // onChange={handleChangeName}
        required
        minLength="2"
        maxLength="40"
        className="modal__text"
        type="email"
        name="userName"
        id="user-name"
        placeholder="Email"
      />
      {/* <span className="form__error user-name-error" id="user-name-error" /> */}
      <input
        // value={about || ""}
        // onChange={handleChangeDescription}
        required
        minLength="2"
        maxLength="200"
        className="modal__text"
        type="password"
        name="userActivity"
        id="user-activity"
        placeholder="Пароль"
      />
      {/* <span
        className="form__error user-activity-error"
        id="user-activity-error"
      /> */}
    </ModalWindows>
    )
}

export default Login;