import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#708A58] text-white py-4 mt-4">
      <div className="container flex justify-center md:flex-row items-center px-4">
        <div className="flex space-x-6 text-xl items-center justify-center">
          <a
            href="https://www.linkedin.com/in/gast%C3%B3n-silva-b55249220/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/GastiSilva"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition"
          >
            <FaGithub />
          </a>
          <a
            href="gasti.silva@gmail.com"
            className="hover:text-red-400 transition"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
    </footer>
  );
}
