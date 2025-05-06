import { Header } from "./components/header/Header";
import { TaskList } from "./components/taskList/TaskList";

import "./global.css";
import styles from "./App.module.css";

function App() {
  return (
    <div>
      <Header />
      <div>
        <main className={styles.wrapper}>
          <TaskList />
        </main>
      </div>
    </div>
  );
}

export default App;
