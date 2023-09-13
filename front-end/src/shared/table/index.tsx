import "./styles.css";
import { getDateLink } from "../../helpers/date";
import { Link } from "../../api/links";
import { UpperFirstLetter } from "../../helpers/upperFirstLetter";
import config from "../../config";
import copyText from "../../helpers/copyText";
import Accordion from "./accordion";

interface props {
    links: Link[];
}

const Table = ({ links }: props) => {
    if (links.length) {
        return (
            <div className="table-container">
                <div className="table-head">
                    <div className="head-cell short-link">Shorten Links</div>
                    <div className="head-cell long-link">Original Link</div>
                    <div className="head-cell clicks">Clicks</div>
                    <div className="head-cell qr-code">QR Code</div>
                    <div className="head-cell status">Status</div>
                    <div className="head-cell date">Date</div>
                </div>
                <div className="table-body">
                    {links.map((item, index) => {
                        const date = getDateLink(
                            item.createdAt
                        );
                        const {day, month, year} = date

                        return (
                            <>
                                <div
                                    style={{ position: "relative" }}
                                    className=""
                                >
                                    <div key={index} className="table-row ">
                                        <div className="short-link">
                                            <span>{`${config.frontEndUrl}/${item.shortener}`}</span>
                                            <img
                                                onClick={() =>
                                                    copyText(
                                                        `${config.frontEndUrl}/${item.shortener}`
                                                    )
                                                }
                                                className="copy"
                                                src="/assets/copy.svg"
                                                alt=""
                                            />
                                        </div>
                                        <div className="long-link">
                                            <span>{item.url}</span>
                                        </div>
                                        <div className="head-cell clicks">
                                            {item.clicks}
                                        </div>
                                        <div className="qr-code">
                                            <img
                                                src="/assets/qrcode.svg"
                                                alt=""
                                            />
                                        </div>
                                        <div className="head-cell status">
                                            <span
                                                className={`status-text ${item.status}`}
                                            >
                                                {UpperFirstLetter(item.status)}
                                            </span>
                                            <img
                                                className={`status-icon ${item.status}`}
                                                src={`/assets/link-${item.status}.svg`}
                                                alt="status icon"
                                            />
                                        </div>
                                        <div className="date">
                                            {month.slice(0, 3)} - {day} - {year}
                                        </div>
                                    </div>
                                    <Accordion link={item} linkDate={date} />
                                </div>
                            </>
                        );
                    })}
                </div>
            </div>
        );
    }

    return null;
};

export default Table;
