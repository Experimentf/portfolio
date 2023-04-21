import logo from "./logo.svg";
import "./App.css";
import { Canvas } from "@react-three/fiber";
import { CameraControls } from "@react-three/drei";
import Room from "./components/Room";

function App() {
  return (
    <Canvas
      style={{
        width: "100vw",
        height: "100vh",
        background: "#171717",
      }}
    >
      <ambientLight />
      <CameraControls />
      <Room />
    </Canvas>
  );
}

export default App;
