import "./Register.scss";
import { Navbar, SearchPanel } from "../../layouts";
import { AuthForm, AuthFormImg } from "../../components";
import { useAuthForm } from "../../hooks";

export const Register = () => {
  const form = useAuthForm();

  return (
    <>
      <Navbar shadow={false} />
      <SearchPanel />

      <div className="authPage container">
        <AuthForm
          username={form.username}
          setUsername={form.setUsername}
          password={form.password}
          setPassword={form.setPassword}
          onLogin={form.handleLogin}
          onRegister={form.handleRegister}
          isValid={form.isValid}
          error={form.error}
          loading={form.loading}
        />
        <AuthFormImg />
      </div>
    </>
  );
};
