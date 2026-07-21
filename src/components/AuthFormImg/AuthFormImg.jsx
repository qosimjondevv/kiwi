import "./AuthFormImg.scss";
import fon from "../../assets/img/registeFon.png";
export const AuthFormImg = () => {
  return (
    <>
      <div className="authFormImg">
        <img src={fon} alt="Register-images" />

        <div className="authFormImg-text">
          <span className="authFormImg-logo">kiwi</span>
          <p>Откройте для себя целую плошадку для продаже</p>
          <button>Как это делать?</button>
        </div>
      </div>
    </>
  );
};
