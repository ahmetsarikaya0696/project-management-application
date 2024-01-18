import noProjecstImage from "../assets/no-projects.png";
import { Button } from "./Button";

export const NoProjectSelected = ({ onStartCreateProject }) => {
  return (
    <div className="mt-2 text-center w-2/3">
      <img
        src={noProjecstImage}
        alt="An emty task list"
        className="w-16 h-16 object-contain  mx-auto"
      />
      <h2 className="text-xl font-bold text-stone-500 my-4">
        No Project Selected
      </h2>
      <p className="text-stone-400 mb-4">
        Select a project or get started with new one
      </p>
      <p className="mt-8">
        <Button onClick={onStartCreateProject}>Create New Project</Button>
      </p>
    </div>
  );
};
