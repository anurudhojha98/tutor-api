const userController = require('../controllers/UserController');
const { isAuthenticated } = require('../middlewares/middleware')
module.exports = (router) => {
  router.get('/users', isAuthenticated, userController.getUsers);
  router.delete('/user/:id', isAuthenticated, userController.deleteUser);
}