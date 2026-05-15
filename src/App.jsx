import { useEffect, useRef } from "react";
import "./App.css";

import img from "./components/3.jpg";
import "bootstrap-icons/font/bootstrap-icons.css";

import html from "./assets/html.png";
import css from "./assets/css.png";
import js from "./assets/js.png";
import python from "./assets/python.png";
import reactimg from "./assets/react.png";
import api from "./assets/api.png";
import firebase from "./assets/firebase.png";
import psql from "./assets/psql.png";
import git from "./assets/git.png";
import django from "./assets/django.png";
import bootstrap from "./assets/bootstrap.png";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import w from "./components/w.png";
import e from "./components/e.png";
import r from "./components/4.png";
import q from "./components/q.png";

function App() {
  const refs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.1 },
    );

    refs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
  const handleScroll = () => {
    const section = document.getElementById("footer1");

    if (!section) return;

    const rect = section.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    if (rect.top < windowHeight - 100) {
      section.classList.add("show");
    }
  };

  window.addEventListener("scroll", handleScroll);

  handleScroll();

  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, []);

  return (
    <>
      {/* HOME */}

      <div className="home" id="home">
        <div>
          <h1 className="name" ref={(el) => (refs.current[0] = el)}>
            ABDU
          </h1>

          <h1 className="name" ref={(el) => (refs.current[1] = el)}>
            SAMAD
          </h1>
        </div>

        <h2 className="positions" ref={(el) => (refs.current[2] = el)}>
          I am a
          <span>
            <span>&nbsp;Python Developer</span>
            <span>&nbsp;React.js Developer</span>
            <span>&nbsp;Web Developer</span>
            <span>&nbsp;Front-End Developer</span>
          </span>
        </h2>
      </div>

      {/* ABOUT */}

      <div className="about">
        <div className="all">
          {/* ABOUT CARD */}

          <div className="cardo">
            <img
              src={img}
              alt="profile"
              className="img"
              ref={(el) => (refs.current[3] = el)}
            />

            <div className="para" ref={(el) => (refs.current[4] = el)}>
              <h1 style={{ color: "red" }}>About Me</h1>

              <p>
                My name is Abdu Samad, a 22-year-old. I come from Mappuram,
                Kerala. I will complete my studies in full-stack development in
                Python and front end in React.js from Cybersquare Professionals
                in January 2024. I have 6 months of experience at Baabte System
                Technologies Pvt. Ltd. Another part of my studies is that I
                completed higher secondary in computer commerce in 2023.
                Recently, I have been pursuing a degree in BCA from IGNOU. I
                also completed an internship in Python full-stack from Knovista
                from January 2026 to April 2026.
              </p>
            </div>
          </div>

          {/* SKILLS */}

          <div className="skills" ref={(el) => (refs.current[5] = el)}>
            <div className="skills-track">
              <div className="minicard">
                <img src={html} alt="" />
                <p>HTML</p>
              </div>

              <div className="minicard">
                <img src={css} alt="" />
                <p>CSS</p>
              </div>

              <div className="minicard">
                <img src={js} alt="" />
                <p>JavaScript</p>
              </div>

              <div className="minicard">
                <img src={python} alt="" />
                <p>Python</p>
              </div>

              <div className="minicard">
                <img src={django} alt="" />
                <p>Django</p>
              </div>

              <div className="minicard">
                <img src={reactimg} alt="" />
                <p>React</p>
              </div>

              <div className="minicard">
                <img src={api} alt="" />
                <p>API</p>
              </div>

              <div className="minicard">
                <img src={bootstrap} alt="" />
                <p>Bootstrap</p>
              </div>

              <div className="minicard">
                <img src={psql} alt="" />
                <p>PostgreSQL</p>
              </div>

              <div className="minicard">
                <img src={git} alt="" />
                <p>Git</p>
              </div>

              <div className="minicard">
                <img src={firebase} alt="" />
                <p>Firebase</p>
              </div>
              <div className="minicard">
                <img src={q} alt="" />
                <p>AI</p>
              </div>
              <div
                className="minicard"
                style={{
                  justifyContent: "center",
                }}
              >
                <p>Tikinter</p>
              </div>
            </div>
          </div>

          {/* EDUCATION */}

          <div className="education" ref={(el) => (refs.current[6] = el)}>
            <div className="e_card q">
              <h1>SSLC</h1>

              <div>
                <h3>GHSS Pandikkad</h3>
                <p>2020 - 2021</p>
              </div>
            </div>

            <div className="e_card">
              <h1>Higher Secondary</h1>

              <div>
                <h3>Computer Commerce</h3>
                <p>2021 - 2023</p>
              </div>
            </div>

            <div className="e_card q">
              <h1>Python Full Stack</h1>

              <div>
                <h3>Baabte Technologies</h3>
                <p>2023 - 2024</p>
              </div>
            </div>

            <div className="e_card">
              <h1>BCA</h1>

              <div>
                <h3>IGNOU</h3>
                <p>From 2024</p>
              </div>
            </div>
            <div className="e_card q">
              <h1>Python Full Stack</h1>

              <div>
                <h3>Knovista</h3>
                <p>2026/JAN - APR</p>
              </div>
            </div>
          </div>

          {/* EXPERIENCE */}

          <div className="expiriance" ref={(el) => (refs.current[7] = el)}>
            <div>
              <h1>Intern (Python Full Stack Developer)</h1>

              <h3>
                Baabtra, Calicut, India
                <br />
                AUGUST 2023 - JANUARY 2024
              </h3>

              <ul>
                <li>
                  Developed and maintained web applications using Django and
                  Flask.
                </li>

                <li>
                  Worked with React.js, HTML, CSS and JavaScript for frontend
                  integration.
                </li>

                <li>Built REST APIs for client-server communication.</li>

                <li>Participated in debugging, testing and code reviews.</li>
              </ul>
            </div>
          </div>

          {/* LANGUAGE */}

          <div className="language" ref={(el) => (refs.current[8] = el)}>
            <h1>Languages</h1>

            {/* Malayalam */}

            <div className="langbox">
              <div className="langhead">
                <div>Malayalam</div>
                <div>100%</div>
              </div>

              <div className="languageborder">
                <div className="mal" ref={(el) => (refs.current[9] = el)}></div>
              </div>
            </div>

            {/* English */}

            <div className="langbox">
              <div className="langhead">
                <div>English</div>
                <div>90%</div>
              </div>

              <div className="languageborder">
                <div
                  className="eng"
                  ref={(el) => (refs.current[10] = el)}
                ></div>
              </div>
            </div>

            {/* Hindi */}

            <div className="langbox">
              <div className="langhead">
                <div>Hindi</div>
                <div>70%</div>
              </div>

              <div className="languageborder">
                <div
                  className="hin"
                  ref={(el) => (refs.current[11] = el)}
                ></div>
              </div>
            </div>
          </div>

          {/* WORKS */}

          <div className="works" ref={(el) => (refs.current[12] = el)}>
            <h1>
              <u>Works</u>
            </h1>

            <div className="p_table">
              <a
                href="https://weather-aw6u.onrender.com"
                className="p_card"
                target="_blank"
              >
                <img src={w} alt="" />

                <ul>
                  <h1>Weather</h1>

                  <li>Created with React</li>

                  <li>API from OpenWeather</li>
                </ul>
              </a>

              <a
                href="https://resort2.onrender.com"
                className="p_card"
                target="_blank"
              >
                <img src={e} alt="" />

                <ul>
                  <h1>Resort</h1>

                  <li>Created with HTML, CSS & JavaScript</li>

                  <li>Hosted on Render</li>
                </ul>
              </a>

              <a
                href="https://asset-nf3g.onrender.com"
                className="p_card"
                target="_blank"
              >
                <img src={r} alt="" />

                <ul>
                  <h1>Asset Track</h1>

                  <li>Created using Django & React</li>

                  <li>Hosted on Render</li>
                </ul>
              </a>
            </div>
          </div>

          {/* FOOTER */}

          <div className="footer1" id="footer1">
            <div className="info">
              <p>
                <i>
                  <i className="bi bi-phone"></i> +91 9037358392 <br />
                  <i className="bi bi-envelope"></i> abdusamadibnuhamza@gmail.com{" "}
                  <br />
                  <i className="bi bi-geo-alt"></i>Manjeri,Malappuram,Kerala
                </i>
              </p>
            </div>
            <div>
              <a href="https://www.facebook.com/abdusamad.ibnuhamza/">
                <button className="btn1">
                  <i className="bi bi-facebook"></i>
                </button>
              </a>

              <a
                href="https://www.linkedin.com/in/abdusamadibnuhamza"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="btn1">
                  <i className="bi bi-linkedin"></i>
                </button>
              </a>

              <a href="https://x.com/Samad____rx">
                <button className="btn1">
                  <i className="bi bi-twitter-x"></i>
                </button>
              </a>
              <a href="https://www.instagram.com/iam___abdusamad/">
                <button className="btn1">
                  <i className="bi bi-instagram"></i>
                </button>
              </a>
              <a href="https://github.com/abdusamad-m">
                <button className="btn1">
                  <i className="bi bi-github"></i>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
