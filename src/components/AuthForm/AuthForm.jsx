import "./AuthForm.scss";

export const AuthForm = () => {
  return (
    <>
      <div className="">
        <div className="authForm ">
          <h2 className="autForm-title">ВАША РЕГИСТРАЦИЯ ЗАВЕРШЕНА!</h2>
          <p className="authForm-subtitle">
            Вы успешно зарегистрированы на сайте киви и ваше пароль отправлен в
            виде смс на ваше телефонный номер
          </p>

          <div className="authForm-form">
            <label>Введите email или номер телефона</label>
            <input type="text" placeholder="99890 770 10 73" />
          </div>

          <div className="authForm-form">
            <label>Пароль</label>
            <input type="password" placeholder="********" />
          </div>

          <button className="authForm-submit">Войти</button>

          <div className="authForm-span">
            <span></span>
            <p>или</p>
            <span></span>
          </div>

          <a href="#" className="authForm-restar">
            Восстоновить ваше пароль
          </a>
        </div>
      </div>
    </>
  );
};
