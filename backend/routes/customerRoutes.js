const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");
const {
  createCustomer,
  getCustomers,
} = require("../controllers/customerController");

router.post("/", authMiddleware, createCustomer);
router.get("/", authMiddleware, getCustomers);

module.exports = router;
