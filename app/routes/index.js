const express = require("express");
const CheckTime = require("../middleware/checkTime");
const router = express.Router();

module.exports = () => {
  router.get("/", CheckTime);
  return router;
};
