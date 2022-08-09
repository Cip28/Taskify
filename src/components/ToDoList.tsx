import ToDo from "./ToDo";
import { Todo } from "../interfaces";
import "../App.css";

interface Props {
  tasks: Todo[];
  setTasks: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const ToDoList = ({ tasks, setTasks }: Props) => {
  return (
    <div className="todolist">
      {tasks.length === 0 ? (
        <p className="exp">No tasks yet...</p>
      ) : (
        tasks.map((task) => (
          <li>
            <ToDo key={task.id} task={task} tasks={tasks} setTasks={setTasks} />
          </li>
        ))
      )}
    </div>
  );
};

export default ToDoList;
