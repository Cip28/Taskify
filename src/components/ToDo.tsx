import "../App.css";
import { Todo } from "../interfaces";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdFileDownloadDone } from "react-icons/md";
import React, { useEffect, useRef, useState } from "react";

type Props = {
  task: Todo;
  tasks: Todo[];
  setTasks: React.Dispatch<React.SetStateAction<Todo[]>>;
};
const ToDo = ({ task, tasks, setTasks }: Props) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editTask, setEditTask] = useState<string>(task.todo);

  const handleDone = (id: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, isDone: !task.isDone } : task
      )
    );
  };
  const handleDelete = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };
  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault();
    setTasks(
      tasks.map((task) => (task.id === id ? { ...task, todo: editTask } : task))
    );
    setEdit(false);
  };

  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(()=>{
    inputRef.current?.focus();
  },[edit])

  return (
    <form className="todo" onSubmit={(e) => handleEdit(e, task.id)}>
      {edit ? (
        <input
          ref={inputRef}
          value={editTask}
          onChange={(e) => setEditTask(e.target.value)}
          className="todo__editMode"
        />
      ) : task.isDone ? (
        <s className="todo--text s">{task.todo}</s>
      ) : (
        <span className="todo--text">{task.todo}</span>
      )}
      <div className="icons--wrapper">
        <span
          className="icons"
          onClick={() => {
            if (!edit && !task.isDone) {
              setEdit(!edit);
            }
          }}
        >
          <AiFillEdit />{" "}
        </span>
        <span className="icons" onClick={() => handleDelete(task.id)}>
          <AiFillDelete />
        </span>
        <span className="icons" onClick={() => handleDone(task.id)}>
          <MdFileDownloadDone />
        </span>
      </div>
    </form>
  );
};

export default ToDo;
