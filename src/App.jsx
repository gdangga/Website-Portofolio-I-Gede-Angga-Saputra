import { useState, useEffect, useRef } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="bgs text-white font-sans w-full min-h-screen">
        {/* Navbar */}
        <header className="navbar py-6 w-full fixed top-0">
          <div className="max-w-7xl mx-auto flex justify-between items-center px-4">
            <h1 className="text-3xl font-bold top-2">Gede Angga</h1>
            
            {/* Desktop menu */}
            <nav className="hidden md:flex space-x-14">
              <a href="#hero" className="hover:text-red-400">Home</a>
              <a href="#about" className="hover:text-red-400">About</a>
              <a href="#projects" className="hover:text-red-400">Projects</a>
              <a href="#skill" className="hover:text-red-400">Skill</a>
              <a href="#contact" className="hover:text-red-400">Contact</a>
            </nav>
            
            {/* Burger Icon for Mobile */}
            <div className="md:hidden">
              <button onClick={toggleMenu} className="focus:outline-none">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile menu */}
          {isMenuOpen && (
            <nav className="md:hidden bg-gray-800 py-4">
              <div className="flex flex-col items-center space-y-4">
                <a href="#hero" onClick={toggleMenu} className="hover:text-red-400">Home</a>
                <a href="#about" onClick={toggleMenu} className="hover:text-red-400">About</a>
                <a href="#projects" onClick={toggleMenu} className="hover:text-red-400">Projects</a>
                <a href="#skill" onClick={toggleMenu} className="hover:text-red-400">Skill</a>
                <a href="#contact" onClick={toggleMenu} className="hover:text-red-400">Contact</a>
              </div>
            </nav>
          )}
        </header>

        {/* Hero Section */}
        <section id="hero" className="hero  text-white py-20 w-full">
          <div className="container mx-auto flex flex-col lg:flex-row items-center px-4 lg:px-36 space-y-10 lg:space-y-0">
            {/* Left Side - Text and Button */}
            <div className="kiri flex-1 text-center lg:text-left">
              <h2 className="text-4xl font-bold mb-4">
                Hello, I'm I Gede Angga Saputra{" "}
              </h2>
              <h3 className="webtext font-bold ">Web & UI/UX Design Development</h3>
              <p>
                Hello, I am an Information Technology student at Politeknik
                Negeri Bali, majoring in Software Engineering Technology. I am
                highly enthusiastic and interested in technology, especially in
                web development, including front-end and back-end. Additionally,
                I am a 3D game modeller.
              </p>
              <button
                className="contactb px-6 py-3 rounded text-white font-semibold hover:bg-red-600"
                onClick={() => window.open("https://drive.google.com/file/d/1z0fK5zxZS9DIUCIlKC4yR-TXmg4kdVL7/view?usp=sharing", "_blank")}
              >
                My Resume
              </button>
            </div>

            {/* Right Side - Image */}
            <div className="kanan flex-1 flex justify-center lg:justify-end end-0">
              <img src="src\assets\angga.png" alt="" className="as" />
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="about py-20 w-full text-center">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-6">About Me</h2>
            <p className="text-gray-100">
            Hello! My name is I Gede Angga Saputra, born in 2004 Karangasem Bali. I’m currently a fifth-semester student at the Bali 
            State Polytechnic, majoring in Information Technology. My passion for web development 
            inspired me to pursue this field, and I’ve already had the opportunity to work on several 
            website projects with my classmates.
            In addition to my studies, I’m also a freelance 3D game modeller, specializing in creating and 
            customizing vehicle assets. To further enhance my skills and gain professional experience, I’m 
            participating in the Independent Study Program at Infinite Learning, where I focus on web development 
            and UI/UX design. This program has been a great way to deepen my expertise in developing websites and 
            improve my skills.
            </p>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="projects py-20 w-full">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-6 text-center">Projects</h2>
            <div className="overflow-x-auto scrollbar-hide">
              <div className="flex space-x-5 min-w-max">
                {/* Project 1 */}
                <div class="max-w-sm rounded overflow-hidden shadow-lg bg-gray-800">
                  <img src="src/assets/visualvibe.png" alt="" />
                  <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2">Visual Vibe</div>
                    <p class=" text-base">
                    In this project, I serve as a frontend developer, 
                    creating several sections of the website for storing 
                    and displaying images that have been successfully used.
                    </p>
                  </div>
                </div>
                {/* Project 1 */}
                <div class="max-w-sm rounded overflow-hidden shadow-lg bg-gray-800">
                  <img src="src/assets/banksampah.png" alt="" />
                  <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2">Bank Sampah</div>
                    <p class=" text-base">
                    In this project, I play the role of a fullstack developer in the 
                    development of the Bank Sampah website, specifically focusing on 
                    the dashboard. This website has been utilized by the village of
                    Banjarangkan in Klungkung, Bali, for recording and managing bank Sampah activities.
                    </p>
                  </div>
                </div>
                {/* Project 1 */}
                <div class="max-w-sm rounded overflow-hidden shadow-lg bg-gray-800">
                  <img src="src/assets/toeic.png" alt="" />
                  <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2">Toeic Assesment</div>
                    <p class=" text-base">
                    In this project, I am a fullstack developer working on the TOEIC 
                    Assessment website, particularly on the dashboard for adding questions, 
                    assets, and the evaluation page. This website is planned to be used by 
                    the Language Unit at the State Polytechnic of Bali.
                    </p>
                  </div>
                </div>
                {/* Project 1 */}
                <div class="max-w-sm rounded overflow-hidden shadow-lg bg-gray-800">
                  <img src="src/assets/3d.png" alt="" />
                  <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2">Game 3D Modeller</div>
                    <p class=" text-base">
                    I also take freelance jobs in creating 3D vehicle assets for various 
                    games, such as GTA 5, Assetto Corsa, ETS 2, and GTA SA, ensuring that
                    they meet the specifications required by each game.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skill Set Section */}
          <section id="skill" className="skill py-20  w-full">
            <div className="max-w-4xl mx-auto px-4 text-center">
              <h2 className="text-3xl font-bold mb-6 text-white">My Skill </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Skill Item */}
                <div className="flex items-center space-x-4">
                  <img src="src\assets\html.svg" alt="HTML" className="w-10 h-10" />
                  <div className="w-full">
                    <div className="flex justify-between mb-1">
                      <span className="text-white">HTML</span>
                      <span className="text-white">80%</span>
                    </div>
                    <div className="w-full bg-gray-600 rounded-full h-2">
                      <div className="bg-red-400 h-2 rounded-full" style={{ width: '80%' }}></div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <img src="src\assets\php.svg" alt="PHP" className="w-10 h-10" />
                  <div className="w-full">
                    <div className="flex justify-between mb-1">
                      <span className="text-white">PHP</span>
                      <span className="text-white">75%</span>
                    </div>
                    <div className="w-full bg-gray-600 rounded-full h-2">
                      <div className="bg-red-400 h-2 rounded-full" style={{ width: '75%' }}></div>
                    </div>
                  </div>
                </div>

                {/* Add more skill items similarly */}
                <div className="flex items-center space-x-4">
                  <img src="src\assets\css.svg" alt="CSS" className="w-10 h-10" />
                  <div className="w-full">
                    <div className="flex justify-between mb-1">
                      <span className="text-white">CSS</span>
                      <span className="text-white">80%</span>
                    </div>
                    <div className="w-full bg-gray-600 rounded-full h-2">
                      <div className="bg-red-400 h-2 rounded-full" style={{ width: '80%' }}></div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <img src="src\assets\javascript.svg" alt="Javascript" className="w-10 h-10" />
                  <div className="w-full">
                    <div className="flex justify-between mb-1">
                      <span className="text-white">Javascript</span>
                      <span className="text-white">50%</span>
                    </div>
                    <div className="w-full bg-gray-600 rounded-full h-2">
                      <div className="bg-red-400 h-2 rounded-full" style={{ width: '50%' }}></div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <img src="src\assets\tailwind.svg" alt="Tailwind" className="w-10 h-10" />
                  <div className="w-full">
                    <div className="flex justify-between mb-1">
                      <span className="text-white">Tailwind</span>
                      <span className="text-white">60%</span>
                    </div>
                    <div className="w-full bg-gray-600 rounded-full h-2">
                      <div className="bg-red-400 h-2 rounded-full" style={{ width: '60%' }}></div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <img src="src\assets\blender.svg" alt="3D" className="w-10 h-10" />
                  <div className="w-full">
                    <div className="flex justify-between mb-1">
                      <span className="text-white">3D Modeling</span>
                      <span className="text-white">80%</span>
                    </div>
                    <div className="w-full bg-gray-600 rounded-full h-2">
                      <div className="bg-red-400 h-2 rounded-full" style={{ width: '80%' }}></div>
                    </div>
                  </div>
                </div>

                {/* Add similar code blocks for JavaScript, Wix, WordPress, Social Media Manager, etc. */}
              </div>
            </div>
          </section>

        {/* Contact Section */}
        <section id="contact" className="contacts py-20 w-full ">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Contact</h2>
            <p className="text-gray-100 mb-8">
              Feel free to reach out if you'd like to work together or just say hello!
            </p>
            
            {/* Contact Form */}
            <form className="mb-8 space-y-4">
              <div className="flex flex-col  md:flex-row md:space-x-4">
                <input type="text" placeholder="Your Name" className="w-full px-4 py-2 border rounded focus:outline-none focus:border-white text-gray-800" required />
                
              </div>
              <div className="flex flex-col  md:flex-row md:space-x-4">
                <input type="email" placeholder="Your Email" className="w-full px-4 py-2 border rounded focus:outline-none focus:border-white text-gray-800 " required />
              </div>
              <input type="text" placeholder="Subject" className="w-full px-4 py-2 border rounded focus:outline-none focus:border-white text-gray-800" />
              <textarea placeholder="Your Message" className="w-full px-4 py-2 border rounded focus:outline-none focus:border-white text-gray-800" rows="5" required></textarea>
              <a href="mailto:gedeangga424@gmail.com" className="hover:underline">
                <button  type="button" className="contactb px-6 py-2 rounded  text-white hover:bg-red-600">
                  Send Message
                </button>
              </a>
            </form>
            
            
          </div>
        </section>


        {/* Footer */}
          <footer className="footer py-8  text-center w-full">
            <div className="container mx-auto px-4">
              
              {/* Social Media Icons */}
              <div className="flex justify-center space-x-6 mb-4">
                <a href="https://web.facebook.com/gede.angga.5095110" target="_blank" rel="noopener noreferrer">
                  <img src="src\assets\facebook.svg" alt="Facebook" className="h-6 w-6" />
                </a>
                <a href="https://www.instagram.com/gdangga._?igsh=c2I0azc2aGM2aWpj" target="_blank" rel="noopener noreferrer">
                  <img src="src\assets\instagram.svg" alt="Instagram" className="h-6 w-6" />
                </a>
                <a href="https://github.com/gdangga" target="_blank" rel="noopener noreferrer">
                  <img src="src\assets\github.svg" alt="GitHub" className="h-6 w-6" />
                </a>
              </div>
              
              {/* Contact Information */}
              <div className="mb-4">
                <p className="text-white">
                  <a href="mailto:gedeangga424@gmail.com" className="hover:underline">
                    gedeangga424@gmail.com
                  </a> 
                  | +62 852 3807 1154
                </p>
              </div>
              
              {/* Call to Action */}
              <div className="mb-6">
                <p className="text-white">Let’s work together!</p>
                <a href="/contact" className="text-blue-500 hover:underline">
                  Available for freelance projects
                </a>
              </div>
              
              {/* Copyright */}
              <p className="text-white">
                &copy; 2024 Gdangga. All rights reserved.
              </p>

            </div>
          </footer>
      </div>
    </>
  );
}

export default App;
