const router = require("express").Router();
const dogController = require("../../controllers/dogController");

// Matches with "/api/dogs"
router.route("/")
  .get(dogController.findAll)
  // .post(dogController.create);

// Matches with "/api/dogs/:id"
// router
//   .route("/:id")
//   .get(dogController.findById)
//   .put(dogController.update)
//   .delete(dogsController.remove);

module.exports = router;