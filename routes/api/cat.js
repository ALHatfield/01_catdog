const router = require("express").Router();
const catController = require("../../controllers/catController");

// Matches with "/api/cat"
router.route("/")
  .get(catController.findAll)
  .post(catController.create)

// Matches with "/api/cat/:id"
router.route("/:id")
  .get(catController.findById)
//   .put(catController.update)
//   .delete(catController.remove);

module.exports = router;