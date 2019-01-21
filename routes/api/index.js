const router = require("express").Router();
const cigarRoutes = require("./cigars");

// Cigar routes
router.use("/cigars", cigarRoutes);

module.exports = router;
