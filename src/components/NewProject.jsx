import { useRef } from "react";
import { Input } from "./Input";

export const NewProject = ({ onBackToNeutralState, onSaveProject }) => {
  const titleRef = useRef();
  const descriptionRef = useRef();
  const dateRef = useRef();

  const handleSave = () => {
    const enteredTitle = titleRef.current.value;
    const enteredDescription = descriptionRef.current.value;
    const enteredDate = dateRef.current.value;

    // Validation

    onSaveProject({
      title: enteredTitle,
      description: enteredDescription,
      date: enteredDate,
    });
  };

  return (
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
  );
};
