import styles from "./Task.module.css";
import { Checkbox } from "../checkbox/Checkbox";
import { Trash } from "@phosphor-icons/react";

export interface TaskProps {
  id: number;
  content: string;
  isCompleted: boolean;
}

interface TaskListProps {
  task: TaskProps;
  onTaskComplete: (id: number) => void;
  onDelete: (id: number) => void;
}

export function Task({ task, onTaskComplete, onDelete }: TaskListProps) {
  function handleDeleteComment() {
    onDelete(task.id);
  }

  function handleTaskComplete() {
    onTaskComplete(task.id);
  }

  return (
    <div className={styles.container}>
      <Checkbox isCompleted={task.isCompleted} onClick={handleTaskComplete} />

      <p className={task.isCompleted ? styles.taskCompleted : ""}>
        {task.content}
      </p>

      <button
        type="button"
        onClick={handleDeleteComment}
        className={styles.iconContainer}
      >
        <Trash size={16} className={styles.icon} />
      </button>
    </div>
  );
}
