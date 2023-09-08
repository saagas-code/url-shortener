import { Request, Response } from "express";
import ViewLinkRepository from "../database/repositories/ViewLinkRepository";

const ViewLink = async (req: Request, res: Response) => {
    const { shortener } = req.params;

    const getLink = await ViewLinkRepository(shortener);
    if (!getLink.length) {
        return res.status(404).send();
    }
    return res.json({ result: getLink[0].url });
};

export default ViewLink;
