import Image from 'next/image'
import selfie from '@/components/placeholder.png'

export default function about() {
  return (
    <main>
      <div className="grid p-5">
        <div className="container m-3">
          <div className="row text-start">
            <h1 className="primary-color">About Me</h1>
          </div>
          <div className="row">
            <div className="col col-lg-4">
              <Image className="m-2 rounded-5"
                src="https://portfolio-website-strapi-s3.s3.us-west-2.amazonaws.com/1539571601789_e0410b11ae.jpg"
                alt="Picture of Jonathan To"
                width={300}
                height={300}
              />
            </div>
              <div className="col col-lg-4">
                <p>
                  Hello, I'm Jonathan To. I am majoring in Computer Science, Cybersecurity and will graduate from Oregon State University in Summer of 2024. I have a focus in security, gravitating towards the topics Digital Forensics and Malware Analysis while at Oregon State, but still exploring areas within security as a whole! 
                </p>
                <p>
                  My hobbies include games, photography, and graphic design.
                </p>
              </div>
            </div>
          </div>
          <div className="container m-3">
            <div className="row text-start">
              <h1 className="primary-color">Socials</h1>
            </div>
            <div className="row text-start">
              <div className="col">
                <a href="https://www.linkedin.com/in/jonathan-to-a73136172/" className="btn btn-bd-primary me-4">LinkedIn</a>
                <a href="https://github.com/nawaji" className="btn btn-bd-primary me-4">GitHub</a>
                <a href="mailto:jonathant15191@gmail.com" className="btn btn-bd-primary me-4">Email</a>
              </div>
            </div>
          </div>
        </div>
    </main>
  )
}
