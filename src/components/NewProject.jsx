import { useRef } from "react";
import { Input } from "./Input";
import { Modal } from "./Modal";

export const NewProject = ({ onBackToNeutralState, onSaveProject }) => {
  const modalRef = useRef();
  const titleRef = useRef();
  const descriptionRef = useRef();
  const dateRef = useRef();

  const handleSave = () => {
    const enteredTitle = titleRef.current.value;
    const enteredDescription = descriptionRef.current.value;
    const enteredDate = dateRef.current.value;

    // Validation
    const showErrorModal =
      enteredTitle.trim().length === 0 ||
      enteredDescription.trim().length === 0 ||
      enteredDate.trim().length === 0;

    if (showErrorModal) {
      modalRef.current.open();
      return;
    }

    onSaveProject({
      title: enteredTitle,
      description: enteredDescription,
      date: enteredDate,
    });
  };

  return (
    <>
      <Modal ref={modalRef}>
        <h2>Invalid Input</h2>
        <p>Ooops... looks like you forgot to enter a value.</p>
        <p>Please make sure you provide a valid value for every input field.</p>
      </Modal>
      <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <button
              onClick={onBackToNeutralState}
              className="text-stone-800 hover::text-stone-950"
            >
              Cancel
            </button>
          </li>
          <li>
            <button
              className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
              onClick={handleSave}
            >
              Save
            </button>
          </li>
        </menu>
        <div>
          <Input ref={titleRef} type="text" label="Title" />
          <Input ref={descriptionRef} rows="2" label="Description" />
          <Input ref={dateRef} type="date" label="Due Date" />
        </div>
      </div>
    </>
  );
};
