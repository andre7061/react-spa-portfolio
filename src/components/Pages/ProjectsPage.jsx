import { projectsData } from '../data/projectsData';
import { Calculator } from '../MiniApps/Calculator';
console.log(projectsData);
// const petProects = projectsData.map((item) => {
//   return (
//     <div key={item.id} className="project-card">
//       <h3>{item.name}</h3>
//       <p>{item.description}</p>
//     </div>
//   );
// });
export const ProjectsPage = () => {
  return (
    <div className="page-content">
      <h1>Мои проекты</h1>
      <div className="projects-grid">
        {projectsData.map((item) => {
          return (
            <div key={item.id} className="project-card">
              <h3>{item.name}</h3>
              <p>{item.description}</p>
            </div>
          );
        })}
        <Calculator />
      </div>
    </div>
  );
};
