// fetch the list of projects from Strapi API

export async function getFiles() {
  // we know the background image we want is ID 3, grab this specifically
  const res = await fetch('http://localhost:1337/api/upload/files/', { cache: 'no-store'});
  if (!res.ok) {
    throw new Error("Failed to fetch files data from Strapi API.");
  }

  return res.json();
} 

export default async function Home() {
  //const rawFilesData = await getFiles();
  //console.log(rawFilesData);

  return (
    <main>
      <div className="grid p-5">
        <div className="container text-center">
          <div className="row">
            <div className="col position-absolute top-50 start-50 translate-middle">
              <h1 className="primary-color">Jonathan To</h1>
              <h4 className="secondary-color">Cybersecurity</h4>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
