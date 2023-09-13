import UrlShortener from "../../helpers/UrlShortener";
import Link from "../models/Links";
import crypto from "crypto";

interface props {
  url: string;
}

const CreateLinkRepository = async ({ url }: props) => {
  try {
    const result = await Link.create({
      id: crypto.randomUUID(),
      url,
      shortener: UrlShortener(url),
      clicks: 0,
    });
    return result;
  } catch (err: any) {
    return err;
  }
};

export default CreateLinkRepository;
