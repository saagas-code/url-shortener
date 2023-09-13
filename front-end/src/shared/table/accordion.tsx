import { useState } from "react";
import { Link } from "../../api/links";
import { UpperFirstLetter } from "../../helpers/upperFirstLetter";

interface Date {
  day: string;
  month: string;
  year: string;
}

interface props {
  link: Link;
  linkDate: Date;
}

const Accordion = ({ link, linkDate }: props) => {
  const [accordionOpened, setAccordionOpened] = useState(false);
  const isAccordionOpened = Number(accordionOpened) * 240;
  const { day, month, year } = linkDate;

  return (
    <>
      <div className="more-info">
        <span onClick={() => setAccordionOpened(!accordionOpened)} className="">
          <img src="/assets/chevron-down.svg" alt="" />
        </span>
      </div>
      <div style={{ height: `${isAccordionOpened}px` }} className={`accordion`}>
        <div className="accordion-content">
          <div className="accordion-section">
            <div className="accordion-title">Original link</div>
            <div className="accordion-text">{link.url}</div>
          </div>

          <div className="">
            <div className="accordion-title">Clicks</div>
            <div className="accordion-text">{link.clicks}</div>
          </div>

          <div className="">
            <div className="accordion-title">Date</div>
            <div className="accordion-text">
              {month.slice(0, 3)} - {day} - {year}
            </div>
          </div>

          <div className="accordion-status">
            <div className="accordion-title">Status: </div>
            <div className="accordion-text-status">
              <span className={`status-text ${link.status}`}>
                {UpperFirstLetter(link.status)}
              </span>
              <img
                className={`status-icon ${link.status}`}
                src={`/assets/link-${link.status}.svg`}
                alt="status icon"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Accordion;
