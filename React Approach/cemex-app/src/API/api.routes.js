import { Router } from "express";
import { login } from "./api.login.controller.js"; // Login
import { leaderboard } from "./api.leaderboard.js"; // Leaderboard

import {
	getUsers,
	getUserData,
	// getUser,
	postUser,
	putUserData,
	// putUser,
	deleteUser,
} from "./api.controller.js";

const router = Router();

// User routes
router.get("/users", getUsers);
router.get("/users/:username", getUserData);

router.post("/userRegister", postUser);

router.post("/login", login); // Login
router.get("/leaderboard", leaderboard); // Leaderboard
//

router.post("/userUpdate", putUserData);

router.delete("/user/:id", deleteUser);



export default router;