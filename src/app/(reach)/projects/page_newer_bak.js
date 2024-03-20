import Image from 'next/image'
import selfie from '@/components/placeholder.png'
import soundbendorLogo from '@/components/soundbendorLogo.png'
import cLogo from '@/components/cLogo.png'

import { projectCard } from '@/components/projectcard.js'

// fetch the list of projects from Strapi API
export async function getProjects() {

  fetch('http://localhost:1337/api/projects', {
    method: 'GET',
    headers: {'Content-Type': 'application/json',}
  })  
    .then(response => response.json())
    .then(data => console.log(data));
/*  // dorce rebuild the cache during development
  // during live build, we'll want to avoid this
  const res = await fetch("http://localhost:1337/api/projects", { cache: 'no-store' })
  const rawProjectList = await res.json();
  //console.log(rawProjectList.data[0].attributes);


  const projectList = rawProjectList.data.map(project => {
    console.log(project);
    //return <projectCard key={project.id} project={project.attributes}/>;
    return <div>{project.project_description}</div>;
    });
  console.log(projectList);
  //rawProjectList.data.forEach((project) => {
  //  console.log(project.attributes);
  //  projectList = <projectCard project={project}/>
  //});
  return projectList;
  */
} 


export default function about() {
  getProjects();
  return (
    <main>
      <div className="grid p-5">
        <div className="container m-3">
          <div className="row text-start">
            <h1 className="primary-color">Projects</h1>
          </div>
          <div className="row">
          </div>
        </div>
      </div>
    </main>
  )
}
