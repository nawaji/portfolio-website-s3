import Image from 'next/image'
import selfie from '@/components/placeholder.png'
import soundbendorLogo from '@/components/soundbendorLogo.png'
import cLogo from '@/components/cLogo.png'

export async function getProjects() {
  const res = await fetch("http://localhost:1337/api/projects")
  const projectList = await res.json();
  console.log(projectList.data);
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
            <div className="col">
              <Image className="m-2 rounded-5"
                src={soundbendorLogo}
                alt="Picture of Project #n"
                width={250}
                height={250}
                placeholder="blur"
              />
            </div>
            <div className="col">
              <h2 className="secondary-color">
                Soundbendor Website
              </h2>
              <p>
                Web application showcasing the Soundbendor Lab research group at Oregon State University's school of Electrical Engineering and Computer Science.
              </p>
            </div>
            <div className="col">
              <Image className="m-2 rounded-5"
                src={cLogo}
                alt="Picture of Project #n"
                width={250}
                height={250}
                placeholder="blur"
              />
            </div>
            <div className="col">
              <h2 className="secondary-color">
                Unix Shell
              </h2>
              <p>
                Recreation of a Unix Shell in C++.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
