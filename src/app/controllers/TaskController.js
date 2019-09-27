import * as Yup from 'yup';
import Task from '../models/Task';

class TaskController {
  /**
   * Route ==> "/tasks"
   * HTTP Method ==> "get"
   * Params ==> None
   * Body ==> task_name (opcional)
   * Desc ==> Lista Taks, Utilizar paginação com 10 itens por página e filtro task Name opcional.
   */
  index() {
    /** */
  }

  /**
   * Route ==> "/tasks"
   * HTTP Method ==> "get"
   * Params ==> "/:id"
   * Body ==> None
   * Desc ==> Lista uma tasks específica através de seu ID.
   */
  show() {
    /** */
  }

  /**
   * Route ==> "/tasks"
   * HTTP Method ==> "post"
   * Params ==> None
   * Body ==> task_name (obrigatório)
   * Desc ==> Cria uma nova Task.
   */
  async store(req, res) {
    // Configura schema de validação do Body
    const schema = Yup.object().shape({
      task_name: Yup.string().required().max(255),
    });

    // Valida o Body
    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Falha na validação dos dados de entrada' });
    }

    const { task_name } = req.body;

    //Valida se já existe tarefa com o mesmo nome
    const taskNameExists = await Task.findOne({ where: { task_name } });
    if (taskNameExists) {
      return res.status(400).json({ error: 'Tarefa já existente' });
    }

    // Cria nova tarefa
    const newTask = await Task.create(req.body);

    //retorna nova tarefa criada
    return res.json(newTask);
  }

  /**
   * Route ==> "/tasks"
   * HTTP Method ==> "put"
   * Params ==> "/:id"
   * Body ==> task_name (obrigatório)
   * Desc ==> Atualiza uma task específica através de seu id.
   */
  update() {
    /** */
  }

  /**
   * Route ==> "/tasks"
   * HTTP Method ==> "delete"
   * Params ==> "/:id"
   * Body ==> None
   * Desc ==> Remove uma task específica através de seu id.
   */
  delete() {
    /** */
  }
}

export default new TaskController();
