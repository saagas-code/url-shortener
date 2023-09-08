import {check} from "express-validator"

const CreateLinkDTO = [
    check("url").notEmpty().withMessage("Field URL is required")
]

export {CreateLinkDTO}