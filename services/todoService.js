const Todo = require('../models/Todo');
const message = require('../common/message')
module.exports = {

    async create(data) {
        let todo = new Todo(data)
        return await todo.save();
    },
    async update(todoId, todoItem) {
        let updatedItem = await Todo.updateOne({ _id: todoId }, todoItem);
        if (updatedItem) {
            return { success: true, message: message.ITEM_UPDATE_SUCCESS }
        }
    },
    async get() {
        return await Todo.find({});
    },
    async delete(todoId) {
        let deletedItem = await Todo.deleteOne({ _id: todoId });
        if (deletedItem) {
            return { success: true, message: message.ITEM_DELETE_SUCCESS };
        } else {
            return { success: false, message: message.ITEM_NOT_FOUND }
        }
    }
}