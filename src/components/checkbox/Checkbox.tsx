import styles from "./Checkbox.module.css";
import { Check } from "@phosphor-icons/react";

interface CheckboxProps {
  isCompleted: boolean;
  onClick: () => void;
}

export function Checkbox(props: CheckboxProps) {
  return (
    <div>
      <label>
        <input type="checkbox" className={styles.checkbox} />
        <span
          className={
            props.isCompleted
              ? styles.customCheckboxChecked
              : styles.customCheckboxUnchecked
          }
          onClick={props.onClick}
        >
          {props.isCompleted ? (
            <Check weight="bold" className={styles.icon} />
          ) : (
            <></>
          )}
        </span>
      </label>
    </div>
  );
}
