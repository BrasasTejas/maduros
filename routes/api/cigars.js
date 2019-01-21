const router = require("express").Router();
const cigarsController = require("../../controllers/cigarsController");

//responding to interaction with the front end (traffic on specificied route) and communicating with DB via controllers

// Matches with "/api/cigars"
router.route("/")
  .get(cigarsController.findAll)
  .post(cigarsController.create);

// Matches with "/api/cigars/:id"
router
  .route("/:id")
  .get(cigarsController.findById)
  .put(cigarsController.update)
  .delete(cigarsController.remove);

  //put route for CigarData???
  // router
  // .route("/:id")
  // .get(cigarsController.findById)
  // .put(cigarsController.update)
  // .delete(cigarsController.remove);

module.exports = router;
