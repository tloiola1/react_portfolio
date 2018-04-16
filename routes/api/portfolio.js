const router = require("express").Router();
const portfolioController = require("../../controllers/portfolioController");

router.route("/") 
  .get(portfolioController.find)
  .post(portfolioController.create)
  .put(portfolioController.update)
  .delete(portfolioController.remove);

module.exports = router; 