const express = require("express");
const router = express();

router.use("/api/users", require("./UserRoutes.js"));
// router.use("/api/photos", require("./PhotoRoutes"));

module.exports = router;