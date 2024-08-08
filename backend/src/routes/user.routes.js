const express = require("express");
const {getCurrentUser } = require("../controllers/user.controller");
const authenticateJWT = require("../middleware/auth.middleware");

const router = express.Router();

router.get("/current-user", authenticateJWT, getCurrentUser);

module.exports = router;
