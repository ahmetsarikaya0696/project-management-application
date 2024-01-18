import { Button } from "./Button";

export const Sidebar = ({
  projects,
  onStartCreateProject,
  onSelectProject,
  selectedProjectId,
}) => {
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
        Your Projects
      </h2>
      <div>
        <Button onClick={onStartCreateProject}>+ Add Project</Button>
      </div>
      <ul className="mt-8">
        {projects.map((project) => {
          let { id, title } = project;
          let btnClasses =
            "w-full text-left px-2 py-1 rounded-sm my-1 hover:text-stone-200 hover:bg-stone-800";

          if (selectedProjectId === id) btnClasses += " bg-stone-800 text-stone-200";
          else  btnClasses += " text-stone-400";

          return (
            <li key={id} className="flex justify-between my-4">
              <button
                type="button"
                className={btnClasses}
                onClick={() => onSelectProject(id)}
              >
                {title}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};
