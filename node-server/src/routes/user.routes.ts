
import { Router } from "express";
import { getUserDetails, pingServer } from "../controllers/user.controller";

const router = Router();


router.route("/:userId").get(getUserDetails);


router.route("/alive").get(pingServer);
export default router;
