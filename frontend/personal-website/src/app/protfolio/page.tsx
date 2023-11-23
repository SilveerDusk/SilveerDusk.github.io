import Image from "next/image"
import Link from "next/link"
import ProjectPreview from "@/components/projectPreview"
import connectDB from "@/database/db"
import Project from "@/database/protfolioSchema"

async function getProjects(){
  await connectDB() // function from db.ts before

  try {
      // query for all blogs and sort by date
      const projects = await Project.find().orFail()
      // send a response as the blogs as the message
      return projects
  } catch (err) {
      return null
  }
}

export default async function Protfolio() {
  const projectData = await getProjects();
  return (<div>
			<div className="centered">
        <h1 className="title">My Protfolio</h1>
        <h2 className="sub-title">I did a thing once... well maybe a few times.</h2>
        <div className="container">
          <ul id="project-list">
            {projectData && projectData.map(project => 
              <ProjectPreview
              key={project.title}
              title={project.title}
              description={project.description}
              slug={project.slug}
              image={project.image}
              />
            )}
          </ul>
        </div>
      </div>
			</div>) 
}