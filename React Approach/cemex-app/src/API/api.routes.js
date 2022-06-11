import { Router } from "express";
import {
	getUsers,
	getUserData,
	// getUser,
	postUser,
	putUserData,
	// putUser,
	deleteUser,
	userLogin
} from "./api.controller.js";

const router = Router();

// User routes
router.get("/users", getUsers);
router.get("/users/:username", getUserData);
router.get("/userLogin", userLogin);

router.post("/userRegister", postUser);

router.put("/users/:username", putUserData);

router.delete("/user/:id", deleteUser);


export default router;