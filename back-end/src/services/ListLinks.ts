import { Request, Response } from "express";
import GetAllLinksRepository from "../database/repositories/GetAllLinksRepository";

const ListLinks = async (req: Request, res: Response) => {
    const getLinks = await GetAllLinksRepository();
    return res.json({ result: getLinks });
};

export default ListLinks;
