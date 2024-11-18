
import { Router } from "express";
import { createTest, getAllTests, getTestById, getTestResult, getTestStats, getUserTests, submitTest } from "../controllers/test.controller";

const router = Router();


router.route("/create-test").post(createTest);

router.route("/submit-test").post(submitTest);

router.route("/all-tests").get(getAllTests);

router.route("/result/:resultId/:userId").get(getTestResult);

router.route("/:testId").get(getTestById);

router.route("/user/:userId").get(getUserTests);

router.route("/stats/:userId").get(getTestStats);


export default router;
