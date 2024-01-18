import { NewProject } from "./components/NewProject";
import { NoProjectSelected } from "./components/NoProjectSelected";
import { Sidebar } from "./components/Sidebar";

const DUMMY_PROJECTS = [
  {
    id: 1,
    title: "Project 1",
    description: "Project 1 Description",
    due_date: new Date("2024-02-02"),
    tasks: ["Project 1 - Task 1", "Project 1 - Task 2"],
  },
  {
    id: 2,
    title: "Project 2",
    description: "Project 2 Description",
    due_date: new Date("2024-03-15"),
    tasks: ["Project 2 - Task 1", "Project 2 - Task 2"],
  },
  {
    id: 3,
    title: "Project 3",
    description: "Project 3 Description",
    due_date: new Date("2024-04-30"),
    tasks: ["Project 3 - Task 1", "Project 3 - Task 2"],
  },
];

function App() {
  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar projects={DUMMY_PROJECTS} />
      {/* <NewProject /> */}
      <NoProjectSelected />
    </main>
  );
}

export default App;
