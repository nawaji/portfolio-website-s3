function projectCard({ project }) {
	return (
	<>
  	<div className="col">
	    <Image className="m-2 rounded-5"
	      src={a}
	      alt="Picture of Project #n"
	      width={250}
	      height={250}
	      placeholder="blur"
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
	</>
	)
}

export default projectCard;