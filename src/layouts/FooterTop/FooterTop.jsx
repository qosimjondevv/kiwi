import "./FooterTop.scss";
import logoFooter from "../../assets/img/logoFooter.svg";
import appStore from "../../assets/img/AppStore.svg";
import googlePlay from "../../assets/img/GooglePlay.svg";
export const FooterTop = () => {
  return (
    <>
      <div className=" container footerTop">
        <div className="blog">
          <img src={logoFooter} alt="siti logo" />
        </div>
        <div className="apps">
          <img src={appStore} alt="" />
          <img src={googlePlay} alt="" />
        </div>
      </div>
    </>
  );
};
