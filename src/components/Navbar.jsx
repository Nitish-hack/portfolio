import { useRef, useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import styled from "styled-components";
import "../assets/styles/Navbar.css";
import { Link, Events } from "react-scroll";
import { useMediaQuery } from "@mantine/hooks";

function Navbar() {
	const isMobile = useMediaQuery("(max-width: 1024px)");
  const navRef = useRef();
  const [activeLink, setActiveLink] = useState("");

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  useEffect(() => {
    Events.scrollEvent.register("begin", (to, element) => {
      setActiveLink(to);
    });

    return () => {
      Events.scrollEvent.remove("begin");
    };
  }, []);

  return (
    <header>
      <img src="/images/portfolioLogo.png" className="portfolioLogo" alt="logo" />
      <nav ref={navRef}>
        <Link
          activeClass="active"
          to="home"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          onClick={showNavbar}
		  className="effectbtn"
        >
          Home
        </Link>
        <Link
          activeClass="active"
          to="experience"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          onClick={showNavbar}
		  className="effectbtn"
        >
          Experience
        </Link>
        <Link
          activeClass="active"
          to="work"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          onClick={showNavbar}
		  className="effectbtn"
        >
          Work
        </Link>
        <Link
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          onClick={showNavbar}
		  className="effectbtn"
        >
          Contact
        </Link>
       {!isMobile && <a href="https://drive.google.com/file/d/1mNKhDQoDzHtuiofmFSzw9HZRn0Z1ZU6D/view" target="_blank" rel="noreferrer"><Button>Resume</Button></a>}
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
}

export default Navbar;

const Button = styled.a`
  background: none;
  color: #00ffff;
  border: 1px solid #00ffff;
  padding: 10px 20px;
  font-size: 1rem;
  font-family: "Poppins";
  letter-spacing: 2px;
  font-weight: bold;
  border-radius: 10px;
    text-decoration:none;
  &:hover {
    background: #00ffff;
    color: black;
  }
`;

