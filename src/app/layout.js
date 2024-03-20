import 'bootstrap/dist/css/bootstrap.css'
import bootstrapClient from '@/components/bootstrapClient.js';
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Tojo",
  description: "Portfolio Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      </head>
      <body>
        <img src="https://portfolio-website-strapi-s3.s3.us-west-2.amazonaws.com/DSC_8728_bc64774aae.JPG" class="img-fluid z-n1 opacity-25 position-absolute" alt="image of crater lake" />
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">TOJO</a>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item ml-auto"><a className="nav-link " href="/">Home</a></li>
                <li className="nav-item"><a className="nav-link" href="/about">About</a></li>
                <li className="nav-item"><a className="nav-link" href="/projects">Projects</a></li>
              </ul>

            </div>
          </div>
        </nav>
        {children}
        <bootstrapClient />
      </body>
    </html>
  );
}
