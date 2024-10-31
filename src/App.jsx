import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="bg-gray-900 text-white font-sans w-full min-h-screen">
        {/* Navbar */}
        <header className="bg-gray-800 py-6 w-full">
          <div className="max-w-7xl mx-auto flex justify-between items-center px-4">
            <h1 className="text-3xl font-bold">Gdangga Portfolio</h1>
            <nav className="space-x-14">
              <a href="#about" className="hover:text-teal-500">
                About
              </a>
              <a href="#projects" className="hover:text-teal-500">
                Projects
              </a>
              <a href="#contact" className="hover:text-teal-500">
                Contact
              </a>
            </nav>
          </div>
        </header>

        {/* Hero Section */}
        <section className="hero bg-gray-900 text-white py-20 w-full">
          <div className="container mx-auto flex flex-col lg:flex-row items-center px-4 lg:px-36 space-y-10 lg:space-y-0">
            {/* Left Side - Text and Button */}
            <div className="kiri flex-1 text-center lg:text-left">
              <h2 className="text-4xl font-bold mb-4">
                Hello, I'm I Gede Angga Saputra{" "}
              </h2>
              <p>
                Hello, I am an Information Technology student at Politeknik
                Negeri Bali, majoring in Software Engineering Technology. I am
                highly enthusiastic and interested in technology, especially in
                web development, including front-end and back-end. Additionally,
                I am a 3D game modeller.
              </p>
              <button className="contact bg-teal-500 px-6 py-3 rounded text-white font-semibold hover:bg-teal-600">
                Contact Me
              </button>
            </div>

            {/* Right Side - Image */}
            <div className="kanan flex-1 flex justify-center lg:justify-end">
              <img src="src\assets\angga1.jpg" alt="" className="as" />
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-gray-800 w-full">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-6">About Me</h2>
            <p className="text-gray-400">
              I am a passionate developer with experience in building web
              applications and designing user interfaces...
            </p>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 bg-gray-900 w-full">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-6 text-center">Projects</h2>
            <div className="overflow-x-auto scrollbar-hide">
              <div className="flex space-x-8 min-w-max">
                {/* Project 1 */}
                <div class="max-w-sm rounded overflow-hidden shadow-lg bg-gray-800">
                  <img src="src/assets/Screenshot (40).png" alt="" />
                  <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2">Mountain</div>
                    <p class=" text-base">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Voluptatibus quia, Nonea! Maiores et perferendis eaque,
                      exercitationem praesentium nihil.
                    </p>
                  </div>
                </div>
                {/* Project 1 */}
                <div class="max-w-sm rounded overflow-hidden shadow-lg bg-gray-800">
                  <img src="src/assets/Screenshot (40).png" alt="" />
                  <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2">Mountain</div>
                    <p class=" text-base">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Voluptatibus quia, Nonea! Maiores et perferendis eaque,
                      exercitationem praesentium nihil.
                    </p>
                  </div>
                </div>
                {/* Project 1 */}
                <div class="max-w-sm rounded overflow-hidden shadow-lg bg-gray-800">
                  <img src="src/assets/Screenshot (40).png" alt="" />
                  <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2">Mountain</div>
                    <p class=" text-base">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Voluptatibus quia, Nonea! Maiores et perferendis eaque,
                      exercitationem praesentium nihil.
                    </p>
                  </div>
                </div>
                {/* Project 1 */}
                <div class="max-w-sm rounded overflow-hidden shadow-lg bg-gray-800">
                  <img src="src/assets/Screenshot (40).png" alt="" />
                  <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2">Mountain</div>
                    <p class=" text-base">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Voluptatibus quia, Nonea! Maiores et perferendis eaque,
                      exercitationem praesentium nihil.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-gray-800 w-full">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
            <p className="text-gray-400 mb-6">
              Feel free to reach out if you'd like to work together!
            </p>
            <button className="bg-teal-500 px-6 py-2 rounded text-white hover:bg-teal-600">
              Send Message
            </button>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 py-6 text-center w-full">
          <p className="text-gray-500">
            &copy; 2024 Anggs. All rights reserved.
          </p>
        </footer>
      </div>
    </>
  );
}

export default App;
