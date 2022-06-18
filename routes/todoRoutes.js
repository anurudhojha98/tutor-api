const todoController = require('../controllers/TodoController');
const { isAuthenticated } = require('../middlewares/middleware')
module.exports = (router) => {
  router.post('/todo', isAuthenticated, todoController.createdTodo);
  router.patch('/todo', isAuthenticated, todoController.updateTodo);
  router.get('/todo', isAuthenticated, todoController.getTodoList);
  router.delete('/todo', isAuthenticated, todoController.deleteTodoById);
}