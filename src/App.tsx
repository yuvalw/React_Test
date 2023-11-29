import { ProjectManager, ProjectManagerProvider } from "./project";
import styles from './style.module.scss'

function App() {
  console.log(styles)
  return (
    <>
      <ProjectManagerProvider>
          <ProjectManager />
      </ProjectManagerProvider>
    </>
  );
}

export default App;
