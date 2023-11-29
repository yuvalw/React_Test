
import React, { createContext, useContext, useReducer, useState } from 'react';

interface Task {
  id: number;
  text: string;
  completed: boolean;
}

interface Project {
  id: number;
  name: string;
  tasks: Task[];
}

interface ProjectState {
  projects: Project[];
  selectedProject: number | null;
}

const initialState: ProjectState = {
  projects: [],
  selectedProject: null,
};

type Action =
  | { type: 'ADD_PROJECT'; payload: string }
  | { type: 'SELECT_PROJECT'; payload: number }
  | { type: 'ADD_TASK'; payload: { projectId: number; taskText: string } }
  | { type: 'TOGGLE_TASK'; payload: { projectId: number; taskId: number } };

const projectReducer = (state: ProjectState, action: Action): ProjectState => {
  switch (action.type) {
    case 'ADD_PROJECT':
        return state //Implement
    case 'SELECT_PROJECT':
        return state //Implement
    case 'ADD_TASK':
        return state //Implement
    case 'TOGGLE_TASK':
      return state //Implement
    default:
      return state;
  }
};

const ProjectContext = createContext<{ state: ProjectState; dispatch: React.Dispatch<Action> } | undefined>(
  undefined
);


//fix
const ProjectManagerProvider: React.FC<any> = ({children}) => {
  const [state, dispatch] = useReducer(projectReducer, initialState);

  return <ProjectContext.Provider value={{ state, dispatch }}>{children}</ProjectContext.Provider>;
};

const useProjectManager = () => {
  const context = useContext(ProjectContext);
  if (!context) {
    throw new Error('useProjectManager must be used within a ProjectManagerProvider');
  }
  return context;
};

const ProjectManager: React.FC = () => {
  const { state, dispatch } = useProjectManager();
  const [newProjectName, setNewProjectName] = useState<string>('');
  const [newTaskText, setNewTaskText] = useState<string>('');

  const addProject = () => {
    dispatch({ type: 'ADD_PROJECT', payload: newProjectName });
    setNewProjectName('');
  };

  const addTaskToProject = () => {
   //Implement
  };

  return (
    <div>
      <h1>Project Manager</h1>

      {/* Project List */}
      <div>
        <input
          type="text"
          value={newProjectName}
          onChange={(e) => setNewProjectName(e.target.value)}
        />
        <button onClick={addProject}>Add Project</button>
      </div>

      {/* Project List */}
      <ul>
        {state.projects.map((project) => (
          <li key={project.id}>
            <button onClick={() => dispatch({ type: 'SELECT_PROJECT', payload: project.id })}>
              {project.name}
            </button>
          </li>
        ))}
      </ul>

      {/* Task Input */}
      {state.selectedProject && (
        <div>
          <input
            type="text"
            value={newTaskText}
            onChange={(e) => setNewTaskText(e.target.value)}
          />
          <button onClick={addTaskToProject}>Add Task to Project</button>
        </div>
      )}

      {/*Render the tasks for the selected project only */}
      {state.selectedProject && (
        <div>
          <h2>Tasks for {state.projects.find(p => p.id === state.selectedProject)?.name}</h2>
          <ul>
          {/*Implement*/}
          </ul>
        </div>
      )}
    </div>
  );
};

export { ProjectManagerProvider, useProjectManager, ProjectManager };