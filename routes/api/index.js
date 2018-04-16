const router = require("express").Router();
const portfolioRoutes = require("./portfolio");
const messageRoutes = require("./message");
const adminRoutes = require("./admin");


// Property routes
router.use("/portfolio", portfolioRoutes);
router.use("/message",messageRoutes);
router.use("/admin",adminRoutes);

module.exports = router;