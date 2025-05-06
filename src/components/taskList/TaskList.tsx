import styles from "./TaskList.module.css";
import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react";
import { Task, TaskProps } from "../task/Task";
import { PlusCircle } from "@phosphor-icons/react";

export function TaskList() {
  const [tasks, setTasks] = useState<TaskProps[]>([]);

  const [newTaskText, setNewTaskText] = useState("");
  const [isInputFilled, setIsInputFilled] = useState(false);

  const tasksCompleted = tasks.filter((task) => task.isCompleted).length;

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault();

    const newTask: TaskProps = {
      id: Date.now(), // ou outra estratégia de geração de ID
      content: newTaskText,
      isCompleted: false,
    };

    setTasks((prev) => [...prev, newTask]);
    setNewTaskText("");
    setIsInputFilled(false);
  }

  function handleNewTaskChange(event: ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity("");
    setNewTaskText(event.target.value);
    setIsInputFilled(event.target.value.length > 0);
  }

  function handleNewTaskInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity("Esse campo é obrigatório!");
  }

  function handleCompleteTask(id: number) {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
      )
    );
  }

  function handleDeleteTask(id: number) {
    const tasksWithoutDeletedOne = tasks.filter((task) => {
      return task.id !== id;
    });

    setTasks(tasksWithoutDeletedOne);
  }

  return (
    <form onSubmit={handleCreateNewTask} className={styles.form}>
      <div className={styles.newTaskBar}>
        <textarea
          name="task"
          placeholder="Adicione uma nova tarefa"
          value={newTaskText}
          onChange={handleNewTaskChange}
          onInvalid={handleNewTaskInvalid}
          required
        />

        <button type="submit" disabled={!isInputFilled}>
          Criar
          <PlusCircle size={16} weight="bold" />
        </button>
      </div>

      <div className={styles.header}>
        <p>
          Tarefas criadas <span>{tasks.length}</span>
        </p>
        <p>
          Concluídas <span>{tasksCompleted}</span>
        </p>
      </div>

      {tasks.length === 0 ? (
        <div className={styles.noTaskContainer}>
          <img src="clipboard.png" alt="prancheta" />
          <div>
            <p>Você ainda não tem tarefas cadastradas</p>
            <span>Crie tarefas e organize seus itens a fazer</span>
          </div>
        </div>
      ) : (
        <div className={styles.taskList}>
          {tasks.map((task) => (
            <Task
              key={task.id}
              task={task}
              onTaskComplete={handleCompleteTask}
              onDelete={handleDeleteTask}
            />
          ))}
        </div>
      )}
    </form>
  );
}
