import one from "./assets/one.jpg";
import two from "./assets/two.jpg";
import three from "./assets/three.jpg";
import "./App.css";
import { Background, Parallax } from "react-parallax";

function App() {
  return (
    <>
      <Parallax strength={600} bgImage={one}>
        <div className="content">
          <h1 className="title">Live Long</h1>
        </div>
      </Parallax>

      <Parallax strength={600}>
        <Background className="custom-bg">
          <img src={two}></img>
        </Background>
        <div className="content">
          <h1 className="title">Be Happy</h1>
        </div>
      </Parallax>

      <Parallax strength={600} bgImage={three}>
        <div className="content">
          <h1 className="title">Enjoy Everything</h1>
        </div>
      </Parallax>
    </>
  );
}

export default App;
