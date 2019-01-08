const router = require("express").Router();
const catRoutes = require("./cat");
const dogRoutes = require("./dog");


// all api components are required and routed here
// example: domain.com/api/*ROUTE HERE*
router.use("/cat", catRoutes)
router.use("/dog", dogRoutes);

module.exports = router;



// dev notes: this file could be cleaned up with switch/case possibly. future clean up