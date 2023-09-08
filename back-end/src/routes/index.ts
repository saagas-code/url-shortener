import { Router } from "express";
import ListLinks from "../services/ListLinks";
import GenerateLink from "../services/GenerateLink";
import { CreateLinkDTO } from "../services/validations";

const router = Router();

router.get("/", ListLinks);
router.post("/", CreateLinkDTO, GenerateLink);

export default router;
