import { Router } from "express";
import ListLinks from "../services/ListLinks";
import GenerateLink from "../services/GenerateLink";
import { CreateLinkDTO } from "../helpers/validations";
import ViewLink from "../services/ViewLink";

const router = Router();

router.get("/", ListLinks);
router.post("/", CreateLinkDTO, GenerateLink);
router.get("/:shortener", ViewLink);

export default router;
