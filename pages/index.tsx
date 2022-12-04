import { Canvas } from "@react-three/fiber";
import BoxAnimation from "../components/BoxAnimation";
import CameraOrbitController from "../components/CameraOrbitController";
import { OrbitControls, Stats, PerspectiveCamera } from "@react-three/drei";

export default function Home() {
  const testing = true;

  return (
    <div className="container">
      <Canvas>
        <PerspectiveCamera args={[45, 1, 1, 500]} />
        {testing ? <axesHelper args={[5]} /> : null}
        {testing ? <Stats /> : null}
        {testing ? <gridHelper args={[100, 100]} /> : null}
        <OrbitControls />
        <ambientLight intensity={0.1} />
        <directionalLight color="red" position={[0, 0, 5]} />
        <BoxAnimation isTesting={testing} />
      </Canvas>
    </div>
  );
}
