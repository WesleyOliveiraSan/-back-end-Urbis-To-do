import * as Yup from 'yup';
import Todo from '../models/Todo';

class TodoController {
  async index(req, res) {
    const todos = await Todo.findAll({
      where: { user_id: req.userId },
      attributes: ['id', 'user_id', 'title', 'description', 'completed'],
    });

    return res.json(todos);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      title: Yup.string().required(),
      description: Yup.string(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const { title, description } = req.body;

    const { id, user_id } = await Todo.create({
      user_id: req.userId,
      title,
      description,
    });

    return res.json({
      id,
      user_id,
      title,
      description,
    });
  }

  async update(req, res) {
    const todo = await Todo.findByPk(req.params.todoId, {
      attributes: ['id', 'user_id', 'title', 'description', 'completed'],
    });

    if (!todo) {
      return res.status(400).json({ error: 'Todo does not exists' });
    }

    const isOwner = await Todo.findOne({ where: { id: req.params.todoId, user_id: req.userId } });

    if (!isOwner) {
      return res.status(401).json({ error: 'You do not own this todo' });
    }

    todo.completed = !todo.completed;
    await todo.save();
    return res.json(todo);
  }

  async delete(req, res) {
    const todo = await Todo.findByPk(req.params.todoId);

    if (!todo) {
      return res.status(400).json({ error: 'Todo does not exists' });
    }

    const isOwner = await Todo.findOne({ where: { id: req.params.todoId, user_id: req.userId } });

    if (!isOwner) {
      return res.status(401).json({ error: 'You do not own this todo' });
    }

    await todo.destroy();
    return res.json();
  }
}

export default new TodoController();
