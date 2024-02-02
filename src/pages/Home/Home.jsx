import "./home.css";
import Typewriter from "typewriter-effect";
import Resume from "../../assets/docs/Md.Ruhul Amin.pdf";

const Home = () => {
  return (
    <>
      <div className="container home" id="home">
        <h1>Hi I'am a</h1>
        <h2>
          <Typewriter
            options={{
              strings: [
                "Full Stack Developer",
                "MERN Stack Developer",
                "Ruhul Amin",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </h2>
        <div className="home-buttons">
          <button className="btn btn-hire">Hire Me</button>
          <a
            href={Resume}
            download="Md.Ruhul Amin.pdf"
            className="btn btn-resume"
          >
            Resume View
          </a>
        </div>
      </div>
    </>
  );
};

export default Home;
