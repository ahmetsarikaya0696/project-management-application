import { Input } from "./Input";
import { Button } from "./Button";
import { useRef, useState } from "react";
import { Modal } from "./Modal";

export const Tasks = ({ tasks, onAddTask, onDeleteTask }) => {
  const [enteredTaskText, setEnteredTaskText] = useState("");

  const modalRef = useRef();

  const handleChange = (event) => {
    setEnteredTaskText(event.target.value);
  };

  const handleClick = () => {
    if (enteredTaskText.trim().length === 0) {
      modalRef.current.open();
      return;
    }

    const newTask = { id: Math.random(), text: enteredTaskText };
    onAddTask(newTask);

    setEnteredTaskText("");
  };

  return (
    <>
      <Modal ref={modalRef}>
        <h2 className="text-xl font-bold text-stone-500 my-4">Invalid Input</h2>
        <p className="text-stone-600 mb-4">
          Ooops... looks like you forgot to enter a value.
        </p>
        <p className="text-stone-600 mb-4">
          Please make sure you provide a valid value for input field.
        </p>
      </Modal>
      <section>
        <h2>Tasks</h2>
        <div>
          <Input
            type="text"
            label="Task"
            value={enteredTaskText}
            onChange={handleChange}
          />
          <Button onClick={handleClick}>+ Add Task</Button>
        </div>
        {tasks && tasks.length > 0 ? (
          <ul className="p-4 mt-8 rounded-md bg-stone-100">
            {tasks.map((task) => (
              <li key={task.id} className="flex justify-between my-4">
                <span>{task.text}</span>
                <button
                  className="text-stone-700 hover:text-red-500"
                  onClick={() => onDeleteTask(task.id)}
                >
                  Clear
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p className="p-4 mt-8 rounded-md bg-stone-100 text-center shadow-sm">
            This project does not have any tasks yet.
          </p>
        )}
      </section>
    </>
  );
};
