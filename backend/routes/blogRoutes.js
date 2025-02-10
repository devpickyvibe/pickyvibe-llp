const express = require("express");
const { createBlog } = require("../controllers/blogController");
const authMiddleware = require("../middleware/authMiddleware");
const roleMiddleware = require("../middleware/roleMiddleware");
const router = express.Router();

router.post(
  "/",
  authMiddleware,
  roleMiddleware(["admin", "editor"]),
  createBlog
);

module.exports = router;
