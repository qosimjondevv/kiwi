import "./AuthForm.scss";

export const AuthForm = ({
  username,
  setUsername,
  password,
  setPassword,
  onLogin,
  onRegister,
  isValid,
  error,
  loading,
}) => {
  return (
    <div>
      <form className="authForm">
        <h2 className="autForm-title">ВАША РЕГИСТРАЦИЯ ЗАВЕРШЕНА!</h2>
        <p className="authForm-subtitle">
          Вы успешно зарегистрированы на сайте киви и ваше пароль отправлен в
          виде смс на ваше телефонный номер
        </p>

        <div className="authForm-form">
          <label>Введите email или номер телефона</label>
          <input
            type="text"
            placeholder="ismingizni kiriting"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className="authForm-form">
          <label>Пароль</label>
          <input
            type="password"
            placeholder="********"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {error && <p className="authForm-error">{error}</p>}

        <button
          type="submit"
          className="authForm-submit"
          disabled={!isValid || loading}
          onClick={onLogin}
        >
          {loading ? "Yuklanmoqda..." : "Войти"}
        </button>

        <div className="authForm-span">
          <span></span>
          <p>или</p>
          <span></span>
        </div>

        <button
          type="submit"
          className="authForm-register"
          disabled={!isValid}
          onClick={onRegister}
        >
          Регистрация
        </button>

        <a href="#" className="authForm-restar">
          Восстоновить ваше пароль
        </a>
      </form>
    </div>
  );
};
