import QRCode from "react-qr-code";
import "./styles.css";
import { useEffect } from "react";
import config from "../../config";

interface props {
  link: string;
}

const QrCode = ({ link }: props) => {
  useEffect(() => {
    console.log(`${config.frontEndUrl}/${link}`);
  }, [link]);

  return (
    <div className="qrcode-container">
      <QRCode value={`${config.frontEndUrl}/${link}`} />
    </div>
  );
};

export default QrCode;
