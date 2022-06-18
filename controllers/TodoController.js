const todoService = require('../services/todoService')
module.exports = {
    createdTodo(req, res) {
        try {
            todoService.create(req.body).then((todo) => {
                return res.status(200).json(
                    todo
                );
            }).catch((err) => {
                return res.status(400).json(
                    {
                        success: false,
                        message: err.message
                    }
                );
            })
        } catch (err) {
            return res.status(500).json(
                {
                    success: false,
                    message: err.message
                }
            );
        }
    },
    updateTodo(req, res) {
        try {
            todoService.update(req.query.todoId, req.body).then((todo) => {
                return res.status(200).json(
                    todo
                );
            }).catch((err) => {
                return res.status(400).json(
                    {
                        success: false,
                        message: err.message
                    }
                );
            })
        } catch (err) {
            return res.status(500).json(
                {
                    success: false,
                    message: err.message
                }
            );
        }
    },
    getTodoList(req, res) {
        try {
            todoService.get().then((todoList) => {
                return res.status(200).json(
                    todoList
                );
            }).catch((err) => {
                return res.status(400).json(
                    {
                        success: false,
                        message: err.message
                    }
                );
            })
        } catch (err) {
            return res.status(500).json(
                {
                    success: false,
                    message: err.message
                }
            );
        }
    },
    deleteTodoById(req, res) {
        try {
            todoService.delete(req.query.todoId).then((todo) => {
                return res.status(200).json(
                    {
                        success: true,
                        todo
                    }
                );
            }).catch((err) => {
                return res.status(400).json(
                    {
                        success: false,
                        message: err.message
                    }
                );
            })
        } catch (err) {
            return res.status(500).json(
                {
                    success: false,
                    message: err.message
                }
            );
        }

    }
}