import Link from "../models/Links";
import sequelize from "sequelize";

const ViewLinkRepository = async (shortener: string) => {
    try {
        const results = await Link.update(
            {
                clicks: sequelize.literal(`clicks + ${1}`),
            },
            {
                where: {
                    shortener,
                },
                returning: true,
            }
        );
        return results[1];
    } catch (err: any) {
        return err;
    }
};

export default ViewLinkRepository;
