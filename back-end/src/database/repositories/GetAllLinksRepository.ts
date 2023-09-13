import Link from "../models/Links";

const GetAllLinksRepository = async () => {
  try {
    const results = await Link.findAll();
    return results;
  } catch (err: any) {
    return err;
  }
};

export default GetAllLinksRepository;
