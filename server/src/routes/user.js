const router = require('express').Router();
const userController = require('../controllers/user.controller');

router.get('/', userController.findAll)
  .post('/', userController.create);
  
router.get('/:id', userController.findOne)
  .put('/:id', userController.update)
  .delete('/:id', userController.delete);



module.exports = router;