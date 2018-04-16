const router = require("express").Router();
const messageController = require("../../controllers/messageController");

router.route("/") 
  .get(messageController.find)
  .post(messageController.create)
  .put(messageController.update)
  .delete(messageController.remove);
  

module.exports = router; 