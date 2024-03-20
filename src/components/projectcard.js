import Image from 'next/image'
import selfie from '@/components/placeholder.png'

const ProjectCard = ({ project }) => (
	<>
		<div className="row">
	  	<div className="m-3 col">
		    <Image className="rounded-5"
		      src={project.thumbnail_url}
		      alt="Picture of {project.project_name}"
		      width={250}
		      height={250}
		    />
	  	</div>
	  	<div className="col">
		    <h2 className="secondary-color">		    
		      {project.project_name}
		    </h2>
		    <p>
		      {project.project_description}
		    </p>
		    <a href={project.project_link} className="btn btn-bd-primary me-4">Project</a>
		    <a href={project.github_link} className="btn btn-bd-primary me-4">Github</a>
	  	</div>
  	</div>
	</>
)

export { ProjectCard }