import Image from 'next/image'
import selfie from '@/components/placeholder.png'
import soundbendorLogo from '@/components/soundbendorLogo.png'
import cLogo from '@/components/cLogo.png'

import { ProjectCard } from '@/components/projectcard.js'

// fetch the list of projects from Strapi API
export async function getProjects() {
  const res = await fetch('http://localhost:1337/api/projects?populate=*', { cache: 'no-store'});
  if (!res.ok) {
    throw new Error("Failed to fetch projects data from Strapi API.");
  }

  return res.json();
} 

export default async function projects() {
  const rawProjectData = await getProjects();
  //console.log(rawProjectData.data[0].attributes.thumbnail);
  rawProjectData.data.map(project =>
    project.attributes.thumbnail_url = project.attributes.thumbnail.data.attributes.url
    );
  //console.log(rawProjectData.data[0].attributes.thumbnail.url);
  return (
    <main>
      <div className="grid p-5">
        <div className="container m-3">
          <div className="row text-start">
            <h1 className="primary-color">Projects</h1>
          </div>
          <div className="row">
            {rawProjectData.data.map(project => (
              <ProjectCard key={project.id} project={project.attributes}/>
              ))}
          </div>
        </div>
      </div>
    </main>
  )
}
