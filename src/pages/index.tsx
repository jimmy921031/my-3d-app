import { Canvas } from "@react-three/fiber";
import BoxAnimation from "../components/BoxAnimation";
import CameraOrbitController from "../components/CameraOrbitController";
import Lights from "../components/Lights";
import TexturedPlane from "../components/Ground";
import { OrbitControls, Stats, PerspectiveCamera } from "@react-three/drei";
import { Bamboo } from "../components/Bamboo";
import Spheres from "../components/Spheres";

export default function Home() {
  const testing = true;

  return (
    <div className="container">
      <Canvas shadows>
        <PerspectiveCamera args={[45, 1, 1, 500]} />
        {testing ? <axesHelper args={[5]} /> : null}
        {testing ? <Stats /> : null}
        {testing ? <gridHelper args={[100, 100]} /> : null}
        <OrbitControls />
        <Lights />
        {/* <BoxAnimation isTesting={testing} /> */}
        <Spheres />
        <TexturedPlane />
        <Bamboo position={[0, 0, 0]} />
      </Canvas>
    </div>
  );
}
