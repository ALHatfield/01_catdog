const router = require("express").Router();
const catController = require("../../controllers/catController");

// Matches with "/api/cats"
router.route("/")
  .get(catController.findAll)

// Matches with "/api/cats/:id"
// router
//   .route("/:id")
//   .get(catController.findById)
//   .put(catController.update)
//   .delete(catController.remove);

module.exports = router;