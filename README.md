
The project consists of the following files:

- `App.tsx`: The main application file where the `ProjectManager` component is rendered.
- `ProjectManager.tsx`: The main component responsible for managing projects and tasks.
- `ProjectContext.tsx`: The context provider for managing global state.
- `types.ts`: TypeScript interfaces for defining the data structure.

## To-Do List

### 1. Implement Adding a Project

- Open `types.ts` and complete the implementation for the `ADD_PROJECT` case in the `projectReducer` function. Update the state to include a new project with a unique ID and the provided project name.

### 2. Implement Selecting a Project

- Open `types.ts` and complete the implementation for the `SELECT_PROJECT` case in the `projectReducer` function. Update the state to set the `selectedProject` to the provided project ID.

### 3. Implement Adding a Task to a Project

- Open `types.ts` and complete the implementation for the `ADD_TASK` case in the `projectReducer` function. Update the state to add a new task to the specified project with a unique ID and the provided task text.

- In `ProjectManager.tsx`, implement the `addTaskToProject` function. Use the `dispatch` function to trigger the `ADD_TASK` action when the "Add Task to Project" button is clicked.

### 4. Implement Toggling a Task

- Open `types.ts` and complete the implementation for the `TOGGLE_TASK` case in the `projectReducer` function. Update the state to toggle the completion status of the specified task within the specified project.

### 5. Render Tasks for the Selected Project

- In `ProjectManager.tsx`, implement the rendering of tasks for the selected project. Use the `state` to retrieve the tasks for the selected project and render them inside the `<ul>` element.

## Fix List

### 1. Fix ProjectManagerProvider

- In `ProjectManager.tsx`, fix the comment indicating the need for a fix in the `ProjectManagerProvider`. The comment suggests that something needs to be fixed, but the specific issue is not mentioned.

### 2. Fix Task Input

- In `ProjectManager.tsx`, implement the `addTaskToProject` function. Currently, the comment says "//Implement." Replace this comment with the actual implementation for adding a task to the selected project.

### 3. Fix Task Rendering

- In `ProjectManager.tsx`, inside the "Render the tasks for the selected project only" section, the comment says "//Implement." Replace this comment with the actual implementation for rendering tasks for the selected project inside the `<ul>` element.

## Notes

- Make sure to test the application thoroughly after implementing each feature to ensure proper functionality.
- Feel free to refactor and optimize the code as needed.
- Additional features and improvements can be considered based on the project requir