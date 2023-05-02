import logo from './logo.svg';
import './App.css';
import { Canvas } from '@react-three/fiber';
import { CameraControls, ScrollControls } from '@react-three/drei';
import Room from './components/Elements/Room';

function App() {
    return (
        <Canvas
            style={{
                width: '100vw',
                height: '100vh',
            }}
        >
            <ScrollControls pages={3} damping={0.1}>
                <ambientLight />
                <CameraControls />
                <Room />
            </ScrollControls>
        </Canvas>
    );
}

export default App;
