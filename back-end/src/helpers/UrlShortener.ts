import crypto from "crypto";

const Base62Encode = (link: string) => {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const base = characters.length;
  let result = "";
  let num = parseInt(link, 16);

  while (num > 0) {
    result = characters[num % base] + result;
    num = Math.floor(num / base);
  }

  return result;
};

const UrlShortener = (originalUrl: string): any => {
  const date = new Date();
  const value = date + originalUrl + date;
  const hash = crypto.createHash("md5").update(value).digest("hex");

  const sequenciaCurta = Base62Encode(hash);

  return sequenciaCurta;
};

export default UrlShortener;
