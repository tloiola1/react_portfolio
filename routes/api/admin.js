const router = require("express").Router();
const adminController = require("../../controllers/adminController");

router.route("/") 
  .get(adminController.find)
  .post(adminController.create)
  .put(adminController.update)
  .delete(adminController.remove);

module.exports = router; 