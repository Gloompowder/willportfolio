// Footer.js

import React from "react";
import styles from "../styles/Home.module.css";
import LinkedIn from "../public/linkedin-svgrepo-com.svg";
import Medium from "../public/medium-icon-svgrepo-com.svg";
import Github from "../public/github-svgrepo-com.svg";
import Image from "next/image";
import { useRouter } from "next/router";
import { usePathname } from "next/navigation";
import whiteLinkedIn from "../public/whitelinkedin-svgrepo-com.svg";
import whiteMedium from "../public/whitemedium-icon-svgrepo-com.svg";
import whiteGithub from "../public/whitegithub-svgrepo-com.svg";

const Footer = ({ windowSize, isNightMode }) => {

    const windowWidth = windowSize.width;
    const nightMode = isNightMode;
  const router = useRouter();
  const path = usePathname();
  const iconStyle = {
    width: "2rem",
    height: "2rem",
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const nightModeFooterMobileRender = () => {
    return path != "/" ? ''
     : nightMode && windowWidth < 500 ? (
      <>
        <div className={styles["nightMode-mobileFooter"]}>
          <div className={styles["nightMode-footer-branding"]}>
            <div className={styles["nightMode-footer-social-media"]}>
              <a
                target="_blank"
                referrerPolicy="noreferrer"
                href="https://linkedin.com/in/wl96"
                alt="https://linkedin.com/in/wl96"
              >
                <Image
                  src={whiteLinkedIn}
                  width="100px"
                  height="100px"
                  style={iconStyle}
                  alt="https://linkedin.com/in/wl96"
                  unoptimized
                />
              </a>
              <a
                target="_blank"
                referrerPolicy="noreferrer"
                href="https://medium.com/@will-lin"
                alt="https://medium.com/@will-lin"
              >
                <Image
                  src={whiteMedium}
                  width="100px"
                  height="100"
                  style={iconStyle}
                  alt="https://medium.com/@will-lin"
                  unoptimized
                />
              </a>
              <a
                target="_blank"
                referrerPolicy="noreferrer"
                href="https://github.com/Gloompowder"
                alt="https://github.com/Gloompowder"
              >
                <Image
                  src={whiteGithub}
                  width="100px"
                  height="100px"
                  style={iconStyle}
                  alt="https://github.com/Gloompowder"
                  unoptimized
                />
              </a>
            </div>
            <h1
              onClick={() => scrollToSection("introSection")}
              className={styles["nightMode-footer"]}
            >
              william lin
            </h1>
            <p>Need help with graphic design, branding, or web development?</p>
            <p>Let's build something awesome together.</p>
            <div>
              <button onClick={() => scrollToSection("contactSection")}>
                Contact
              </button>
            </div>
          </div>
          <div>
            <h2>Sections</h2>
            <p onClick={() => scrollToSection("workSection")}>work</p>
            <p onClick={() => scrollToSection("aboutSection")}>about</p>
            <p onClick={() => scrollToSection("contactSection")}>contact</p>
          </div>
          <div>
            <h2>Links</h2>
            <p>linkedin</p>
            <p>github</p>
            <p>medium</p>
          </div>
        </div>
        <div className={styles["nightMode-copyright"]}>©By William Lin 2024</div>
      </>
    ) : !nightMode && windowWidth < 500 ? (
        <>
        <div className={styles["mobileFooter"]}>
          <div className={styles["footer-branding"]}>
            <div className={styles["footer-social-media"]}>
              <a
                target="_blank"
                referrerPolicy="noreferrer"
                href="https://linkedin.com/in/wl96"
                alt="https://linkedin.com/in/wl96"
              >
                <Image
                  src={LinkedIn}
                  width="100px"
                  height="100px"
                  style={iconStyle}
                  alt="https://linkedin.com/in/wl96"
                  unoptimized
                />
              </a>
              <a
                target="_blank"
                referrerPolicy="noreferrer"
                href="https://medium.com/@will-lin"
                alt="https://medium.com/@will-lin"
              >
                <Image
                  src={Medium}
                  width="100px"
                  height="100"
                  style={iconStyle}
                  alt="https://medium.com/@will-lin"
                  unoptimized
                />
              </a>
              <a
                target="_blank"
                referrerPolicy="noreferrer"
                href="https://github.com/Gloompowder"
                alt="https://github.com/Gloompowder"
              >
                <Image
                  src={Github}
                  width="100px"
                  height="100px"
                  style={iconStyle}
                  alt="https://github.com/Gloompowder"
                  unoptimized
                />
              </a>
            </div>
            <h1
              onClick={() => scrollToSection("introSection")}
              className={styles["footer"]}
            >
              william lin
            </h1>
            <p>Need help with graphic design, branding, or web development?</p>
            <p>Let's build something awesome together.</p>
            <div>
              <button onClick={() => scrollToSection("contactSection")}>
                Contact
              </button>
            </div>
          </div>
          <div>
            <h2>Sections</h2>
            <p onClick={() => scrollToSection("workSection")}>work</p>
            <p onClick={() => scrollToSection("aboutSection")}>about</p>
            <p onClick={() => scrollToSection("contactSection")}>contact</p>
          </div>
          <div>
            <h2>Links</h2>
            <p>linkedin</p>
            <p>github</p>
            <p>medium</p>
          </div>
        </div>
        <div className={styles["copyright"]}>©By William Lin 2024</div>
      </>
    ) : nightMode && windowWidth >= 500 ? (
        <>
        <div className={styles["nightMode-Footer"]}>
          <div className={styles["nightMode-footer-branding"]}>
            <div className={styles["nightMode-footer-social-media"]}>
              <a
                target="_blank"
                referrerPolicy="noreferrer"
                href="https://linkedin.com/in/wl96"
                alt="https://linkedin.com/in/wl96"
              >
                <Image
                  src={whiteLinkedIn}
                  width="100px"
                  height="100px"
                  style={iconStyle}
                  alt="https://linkedin.com/in/wl96"
                  unoptimized
                />
              </a>
              <a
                target="_blank"
                referrerPolicy="noreferrer"
                href="https://medium.com/@will-lin"
                alt="https://medium.com/@will-lin"
              >
                <Image
                  src={whiteMedium}
                  width="100px"
                  height="100"
                  style={iconStyle}
                  alt="https://medium.com/@will-lin"
                  unoptimized
                />
              </a>
              <a
                target="_blank"
                referrerPolicy="noreferrer"
                href="https://github.com/Gloompowder"
                alt="https://github.com/Gloompowder"
              >
                <Image
                  src={whiteGithub}
                  width="100px"
                  height="100px"
                  style={iconStyle}
                  alt="https://github.com/Gloompowder"
                  unoptimized
                />
              </a>
            </div>
            <h1 onClick={() => scrollToSection("introSection")}>william lin</h1>
            <p>Need help with graphic design, branding, or web development?</p>
            <p>Let's build something awesome together.</p>
            <button onClick={() => scrollToSection("contactSection")}>
              Contact
            </button>
          </div>
          <div>
            <h2>Sections</h2>
            <p onClick={() => scrollToSection("workSection")}>work</p>
            <p onClick={() => scrollToSection("aboutSection")}>about</p>
            <p onClick={() => scrollToSection("contactSection")}>contact</p>
          </div>
          <div>
            <h2>Links</h2>
            <a
              target="_blank"
              referrerPolicy="noreferrer"
              href="https://github.com/Gloompowder"
              alt="https://github.com/Gloompowder"
            >
              github
            </a>
            <a
              target="_blank"
              referrerPolicy="noreferrer"
              href="https://linkedin.com/in/wl96"
              alt="https://linkedin.com/in/wl96"
            >
              linkedin
            </a>
            <a
              target="_blank"
              referrerPolicy="noreferrer"
              href="https://medium.com/@will-lin"
              alt="https://medium.com/@will-lin"
            >
              medium
            </a>
          </div>
        </div>
        <div className={styles["nightMode-copyright"]} data-moveup=".-1">
          ©By William Lin 2024
        </div>
      </>
    ) : !nightMode && windowWidth >= 500 ? (
        <>
        <div className={styles["Footer"]}>
          <div className={styles["footer-branding"]}>
            <div className={styles["footer-social-media"]}>
              <a
                target="_blank"
                referrerPolicy="noreferrer"
                href="https://linkedin.com/in/wl96"
                alt="https://linkedin.com/in/wl96"
              >
                <Image
                  src={LinkedIn}
                  width="100px"
                  height="100px"
                  style={iconStyle}
                  alt="https://linkedin.com/in/wl96"
                  unoptimized
                />
              </a>
              <a
                target="_blank"
                referrerPolicy="noreferrer"
                href="https://medium.com/@will-lin"
                alt="https://medium.com/@will-lin"
              >
                <Image
                  src={Medium}
                  width="100px"
                  height="100"
                  style={iconStyle}
                  alt="https://medium.com/@will-lin"
                  unoptimized
                />
              </a>
              <a
                target="_blank"
                referrerPolicy="noreferrer"
                href="https://github.com/Gloompowder"
                alt="https://github.com/Gloompowder"
              >
                <Image
                  src={Github}
                  width="100px"
                  height="100px"
                  style={iconStyle}
                  alt="https://github.com/Gloompowder"
                  unoptimized
                />
              </a>
            </div>
            <h1 onClick={() => scrollToSection("introSection")}>william lin</h1>
            <p>Need help with graphic design, branding, or web development?</p>
            <p>Let's build something awesome together.</p>
            <button onClick={() => scrollToSection("contactSection")}>
              Contact
            </button>
          </div>
          <div>
            <h2>Sections</h2>
            <p onClick={() => scrollToSection("workSection")}>work</p>
            <p onClick={() => scrollToSection("aboutSection")}>about</p>
            <p onClick={() => scrollToSection("contactSection")}>contact</p>
          </div>
          <div>
            <h2>Links</h2>
            <a
              target="_blank"
              referrerPolicy="noreferrer"
              href="https://github.com/Gloompowder"
              alt="https://github.com/Gloompowder"
            >
              github
            </a>
            <a
              target="_blank"
              referrerPolicy="noreferrer"
              href="https://linkedin.com/in/wl96"
              alt="https://linkedin.com/in/wl96"
            >
              linkedin
            </a>
            <a
              target="_blank"
              referrerPolicy="noreferrer"
              href="https://medium.com/@will-lin"
              alt="https://medium.com/@will-lin"
            >
              medium
            </a>
          </div>
        </div>
        <div className={styles["copyright"]} data-moveup=".-1">
          ©By William Lin 2024
        </div>
      </>
    ) : ''};
  return nightModeFooterMobileRender();
};

export default Footer;
