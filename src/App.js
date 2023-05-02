import logo from './logo.svg';
import './App.css';
import { Canvas } from '@react-three/fiber';
import { CameraControls } from '@react-three/drei';

function App() {
    return (
        <Canvas
            style={{
                width: '100vw',
                height: '100vh',
                background: '#171717',
            }}
        >
            <ambientLight />
            <CameraControls />
        </Canvas>
    );
}

export default App;
