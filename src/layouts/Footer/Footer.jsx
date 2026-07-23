import { useState } from "react";
import { footerBottomLinks, footerCategory } from "../../constants";
import "./Footer.scss";
import { ChevronDown, ChevronUp } from "lucide-react";
export const Footer = () => {
  const [open, setOpen] = useState(null);
  return (
    <>
      <footer>
        <div className="footerBody container">
          <div className="footerGrid">
            {footerCategory.map((item, inx) => (
              <div className="footerCard" key={inx}>
                <button
                  className="footerTitle"
                  onClick={() => setOpen(open === inx ? null : inx)}
                >
                  {open === inx ? <ChevronUp /> : <ChevronDown />}
                  {item.title}
                </button>

                {open === inx && (
                  <div className="footerItems">
                    {item.items.map((text, il) => (
                      <p key={il}>{text}</p>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="footerBottom">
            {footerBottomLinks.map((item, el) => (
              <h4 key={el}>{item}</h4>
            ))}
          </div>
        </div>
      </footer>
    </>
  );
};
