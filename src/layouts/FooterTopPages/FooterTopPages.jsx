import "./FooterTopPages.scss";
import logoFooter from "../../assets/img/logoFooter.svg";
import appStore from "../../assets/img/AppStore.svg";
import googlePlay from "../../assets/img/GooglePlay.svg";
export const FooterTopPages = () => {
  return (
    <>
      <div className="footerTopPages">
        <div className="footerTopPages-aps container">
          <div className="footerTopPagesImg">
            <img src={logoFooter} alt="" />
            <p>
              Продай, найди, купи <br /> все что ты пожелаешь
            </p>
          </div>
          <h5>
            Веб сайт бесплатных обьявлений | на базе имеется 234 944 999 шт
            обяления
          </h5>
          <div className="footerTopPages-apps">
            <img src={appStore} alt="" />
            <img src={googlePlay} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};
