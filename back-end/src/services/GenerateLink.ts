import { Request, Response } from "express";
import CreateLinkRepository from "../database/repositories/CreateLinkRepository";
import { validationResult } from "express-validator";

const GenerateLink = async (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { url } = req.body;

    await CreateLinkRepository({ url });
    return res.status(204).send();
};

export default GenerateLink;
