import Image from 'next/image'
import selfie from '@/components/placeholder.png'

const ProjectCard = ({ project }) => (
	<>
		<div className="row">
	  	<div className="col">
		    <Image className="m-2 rounded-5"
		      src={project.thumbnail_url}
		      alt="Picture of {project.project_name}"
		      width={500}
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
	  	</div>
  	</div>
	</>
)

export { ProjectCard }