import "./Register.scss";
import { Navbar, SearchPanel } from "../../layouts";
import { AuthForm, AuthFormImg } from "../../components";
export const Register = () => {
  return (
    <>
      <Navbar shadow={false} />
      <SearchPanel />

      <div className="authPage container">
        <AuthForm />
        <AuthFormImg />
      </div>
    </>
  );
};
